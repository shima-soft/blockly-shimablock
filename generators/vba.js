
'use strict';

goog.provide('Blockly.VBA');

goog.require('Blockly.Generator');
//goog.require('Blockly.inputTypes');
goog.require('Blockly.utils.global');
goog.require('Blockly.utils.string');


/**
 * VBA code generator.
 * @type {!Blockly.Generator}
 */
Blockly.VBA = new Blockly.Generator('VBA');

Blockly.VBA.INDENT = '    ';
Blockly.VBA.PROCEDURE_NAME = 'Main';
Blockly.Variables.NAME_TYPE = 'VARIABLE';

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.VBA.addReservedWords(
    // https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/keywords/
    'AddHandler,AddressOf,Alias,And,AndAlso,As,Boolean,ByRef,Byte,ByVal,Call,Case,Catch,' +
    'CBool,CByte,CChar,CDate,CDbl,CDec,Char,CInt,Class,CLng,CObj,Const,Continue,CSByte,' +
    'CShort,CSng,CStr,CType,CUInt,CULng,CUShort,Date,Decimal,Declare,Default,Delegate,Dim,' +
    'DirectCast,Do,Double,Each,Else,ElseIf,End,EndIf,Enum,Erase,Error,Event,Exit,False,' +
    'Finally,For,Friend,Function,Get,GetType,GetXMLNamespace,Global,GoSub,GoTo,Handles,If,' +
    'Implements,Imports,In,Inherits,Integer,Interface,Is,IsNot,Let,Lib,Like,Long,Loop,Me,' +
    'Mod,Module,MustInherit,MustOverride,MyBase,MyClass,NameOf,Namespace,Narrowing,New,Next,' +
    'Not,Nothing,NotInheritable,NotOverridable,Object,Of,On,Operator,Option,Optional,Or,' +
    'OrElse,Out,Overloads,Overridable,Overrides,ParamArray,Partial,Private,Property,Protected,' +
    'Public,RaiseEvent,ReadOnly,ReDim,REM,RemoveHandler,Resume,Return,SByte,Select,Set,Shadows,' +
    'Shared,Short,Single,Static,Step,Stop,String,Structure,Sub,SyncLock,Then,Throw,To,True,Try,' +
    'TryCast,TypeOf,UInteger,ULong,UShort,Using,Variant,Wend,When,While,Widening,With,WithEvents,' +
    'WriteOnly,Xor,#Const,#Else,#ElseIf,#End,#If'
);

/**
 * Order of operation ENUMs.
 * https://docs.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/operator-precedence
 */
Blockly.VBA.ORDER_ATOMIC = 0;           // 0 "" ...

//算術演算子
Blockly.VBA.ORDER_EXPONENTIATION = 1.1; // ^ 指数
Blockly.VBA.ORDER_UNARY_NEGATION = 1.2; // - 符号反転
Blockly.VBA.ORDER_MULTIPLICATION = 1.3; // * 乗算
Blockly.VBA.ORDER_DIVISION = 1.3;       // / 除算
Blockly.VBA.ORDER_INT_DIVISION = 1.4;   // / 整数除算
Blockly.VBA.ORDER_MODULUS = 1.5;        // Mod 剰余演算
Blockly.VBA.ORDER_SUBTRACTION = 1.6;      // - 減算
Blockly.VBA.ORDER_ADDITION = 1.6;         // + 加算
Blockly.VBA.ORDER_CONCATENATION = 1.7;    // & 文字列連結

//比較演算子
Blockly.VBA.ORDER_EQUALITY = 2;         // = <>
Blockly.VBA.ORDER_RELATIONAL = 2;       // < > <= >=
Blockly.VBA.ORDER_LIKE = 2;             // Like
Blockly.VBA.ORDER_IS = 2;               // Is

//論理演算子
Blockly.VBA.ORDER_LOGICAL_NOT = 3.1;     // Not
Blockly.VBA.ORDER_LOGICAL_AND = 3.2;     // And
Blockly.VBA.ORDER_LOGICAL_OR = 3.3;      // Or
Blockly.VBA.ORDER_LOGICAL_XOR = 3.4;     // Xor
Blockly.VBA.ORDER_LOGICAL_EQV = 3.5;     // Eqv
Blockly.VBA.ORDER_LOGICAL_IMP = 3.6;     // Imp

Blockly.VBA.ORDER_NONE = 99;            // (...)

/**
 * List of outer-inner pairings that do NOT require parentheses.
 * @type {!Array.<!Array.<number>>}
 */
Blockly.VBA.ORDER_OVERRIDES = [
  // (foo()).bar -> foo().bar
  // (foo())[0] -> foo()[0]
  [Blockly.VBA.ORDER_FUNCTION_CALL, Blockly.VBA.ORDER_MEMBER],
  // (foo())() -> foo()()
  [Blockly.VBA.ORDER_FUNCTION_CALL, Blockly.VBA.ORDER_FUNCTION_CALL],
  // (foo.bar).baz -> foo.bar.baz
  // (foo.bar)[0] -> foo.bar[0]
  // (foo[0]).bar -> foo[0].bar
  // (foo[0])[1] -> foo[0][1]
  [Blockly.VBA.ORDER_MEMBER, Blockly.VBA.ORDER_MEMBER],
  // (foo.bar)() -> foo.bar()
  // (foo[0])() -> foo[0]()
  [Blockly.VBA.ORDER_MEMBER, Blockly.VBA.ORDER_FUNCTION_CALL],

  // !(!foo) -> !!foo
  [Blockly.VBA.ORDER_LOGICAL_NOT, Blockly.VBA.ORDER_LOGICAL_NOT],
  // a * (b * c) -> a * b * c
  [Blockly.VBA.ORDER_MULTIPLICATION, Blockly.VBA.ORDER_MULTIPLICATION],
  // a + (b + c) -> a + b + c
  [Blockly.VBA.ORDER_ADDITION, Blockly.VBA.ORDER_ADDITION],
  // a && (b && c) -> a && b && c
  [Blockly.VBA.ORDER_LOGICAL_AND, Blockly.VBA.ORDER_LOGICAL_AND],
  // a || (b || c) -> a || b || c
  [Blockly.VBA.ORDER_LOGICAL_OR, Blockly.VBA.ORDER_LOGICAL_OR]
];

/**
 * Whether the init method has been called.
 * @type {?boolean}
 */
Blockly.VBA.isInitialized = false;

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.VBA.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.VBA.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.VBA.functionNames_ = Object.create(null);

  if (!Blockly.VBA.nameDB_) {
    Blockly.VBA.nameDB_ =
        new Blockly.Names(Blockly.VBA.RESERVED_WORDS_);
  } else {
    Blockly.VBA.nameDB_.reset();
  }

  Blockly.VBA.nameDB_.setVariableMap(workspace.getVariableMap());

  var defvars = [];
  var defvars_workbook = [];
  var defvars_worksheet = [];
  // Add developer variables (not created or named by the user).
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    defvars.push(Blockly.VBA.nameDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  // Add user variables, but only ones that are being used.
  var variables = Blockly.Variables.allUsedVarModels(workspace);
  for (var i = 0; i < variables.length; i++) {
    if (variables[i]['type'] == 'Workbook') {
      defvars_workbook.push(Blockly.VBA.nameDB_.getName(variables[i].getId(),
      Blockly.VARIABLE_CATEGORY_NAME).concat(" As Workbook"));
    } else if (variables[i]['type'] == 'Worksheet') {
      defvars_worksheet.push(Blockly.VBA.nameDB_.getName(variables[i].getId(),
      Blockly.VARIABLE_CATEGORY_NAME).concat(" As Worksheet"));
    } else {
      defvars.push(Blockly.VBA.nameDB_.getName(variables[i].getId(),
      Blockly.VARIABLE_CATEGORY_NAME));
    }
  }

  // Declare all of the variables.
  if (defvars_workbook.length) {
    Blockly.VBA.definitions_['workbook'] =
        'Dim ' + defvars_workbook.join(', ') ;
  }

  if (defvars_worksheet.length) {
    Blockly.VBA.definitions_['worksheet'] =
        'Dim ' + defvars_worksheet.join(', ') ;
  }

  if (defvars.length) {
    Blockly.VBA.definitions_['variables'] =
        'Dim ' + defvars.join(', ') ;
  }
  this.isInitialized = true;
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.VBA.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  for (var name in Blockly.VBA.definitions_) {
    definitions.push(Blockly.VBA.definitions_[name]);
  }
  // Clean up temporary data.
  delete Blockly.VBA.definitions_;
  delete Blockly.VBA.functionNames_;
  Blockly.VBA.nameDB_.reset();
  if (definitions.length){
    var def_code = definitions.join('\n') + '\n\n' + code
  } else {
    var def_code = code || '\n'
  }
  
  return 'Sub ' + Blockly.VBA.PROCEDURE_NAME + '() \n' + Blockly.VBA.prefixLines(def_code, Blockly.VBA.INDENT) + 'End Sub';
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.VBA.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a properly escaped VBA string, complete with
 * quotes.
 * @param {string} string Text to encode.
 * @return {string} VBA string.
 * @protected
 */
Blockly.VBA.quote_ = function(string) {
  string = string.replace(/"/g, '\"\"');
  return '\"' + string + '\"';
};

/**
 * Encode a string as a properly escaped multiline VBA string, complete
 * with quotes.
 * @param {string} string Text to encode.
 * @return {string} VBA string.
 * @protected
 */
Blockly.VBA.multiline_quote_ = function(string) {
  // Can't use goog.string.quote since Google's style guide recommends
  // JS string literals use single quotes.
  var lines = string.split(/\n/g).map(Blockly.VBA.quote_);
  return lines.join(' & vbNewLine & _\n');
};

/**
 * Common tasks for generating VBA from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The VBA code created for this block.
 * @param {boolean=} opt_thisOnly True to generate code for only this statement.
 * @return {string} VBA code with comments and subsequent blocks added.
 * @protected
 */
Blockly.VBA.scrub_ = function(block, code, opt_thisOnly) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      comment = Blockly.utils.string.wrap(comment,
          Blockly.VBA.COMMENT_WRAP - 3);
      commentCode += Blockly.VBA.prefixLines(comment + '\n', '\' ');
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var i = 0; i < block.inputList.length; i++) {
      if (block.inputList[i].type == Blockly.inputTypes.VALUE) {
        var childBlock = block.inputList[i].connection.targetBlock();
        if (childBlock) {
          comment = Blockly.VBA.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.VBA.prefixLines(comment, '\' ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = opt_thisOnly ? '' : Blockly.VBA.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

/**
 * Gets a property and adjusts the value while taking into account indexing.
 * @param {!Blockly.Block} block The block.
 * @param {string} atId The property ID of the element to get.
 * @param {number=} opt_delta Value to add.
 * @param {boolean=} opt_negate Whether to negate the value.
 * @param {number=} opt_order The highest order acting on this value.
 * @return {string|number}
 */
Blockly.VBA.getAdjusted = function(block, atId, opt_delta, opt_negate,
    opt_order) {
  var delta = opt_delta || 0;
  var order = opt_order || Blockly.VBA.ORDER_NONE;
  if (block.workspace.options.oneBasedIndex) {
    delta--;
  }
  var defaultAtIndex = block.workspace.options.oneBasedIndex ? '1' : '0';
  if (delta > 0) {
    var at = Blockly.VBA.valueToCode(block, atId,
        Blockly.VBA.ORDER_ADDITION) || defaultAtIndex;
  } else if (delta < 0) {
    var at = Blockly.VBA.valueToCode(block, atId,
        Blockly.VBA.ORDER_SUBTRACTION) || defaultAtIndex;
  } else if (opt_negate) {
    var at = Blockly.VBA.valueToCode(block, atId,
        Blockly.VBA.ORDER_UNARY_NEGATION) || defaultAtIndex;
  } else {
    var at = Blockly.VBA.valueToCode(block, atId, order) ||
        defaultAtIndex;
  }

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, adjust it right now.
    at = Number(at) + delta;
    if (opt_negate) {
      at = -at;
    }
  } else {
    // If the index is dynamic, adjust it in code.
    if (delta > 0) {
      at = at + ' + ' + delta;
      var innerOrder = Blockly.VBA.ORDER_ADDITION;
    } else if (delta < 0) {
      at = at + ' - ' + -delta;
      var innerOrder = Blockly.VBA.ORDER_SUBTRACTION;
    }
    if (opt_negate) {
      if (delta) {
        at = '-(' + at + ')';
      } else {
        at = '-' + at;
      }
      var innerOrder = Blockly.VBA.ORDER_UNARY_NEGATION;
    }
    innerOrder = Math.floor(innerOrder);
    order = Math.floor(order);
    if (innerOrder && order >= innerOrder) {
      at = '(' + at + ')';
    }
  }
  return at;
};
