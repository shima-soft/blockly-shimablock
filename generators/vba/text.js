
'use strict';

goog.provide('Blockly.VBA.texts');

goog.require('Blockly.VBA');


Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "list";

Blockly.VBA['text'] = function(block) {
  // Text value.
  var code = Blockly.VBA.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_multiline'] = function(block) {
  // Text value.
  var code = Blockly.VBA.multiline_quote_(block.getFieldValue('TEXT'));
  var order = code.indexOf('+') != -1 ? Blockly.VBA.ORDER_ADDITION :
      Blockly.VBA.ORDER_ATOMIC;
  return [code, order];
};

/**
 * Enclose the provided value in 'String(...)' function.
 * Leave string literals alone.
 * @param {string} value Code evaluating to a value.
 * @return {[string, number]} Array containing code evaluating to a string and
 *    the order of the returned code.
 * @private
 */
Blockly.VBA.text.forceString_ = function(value) {
  if (Blockly.VBA.text.forceString_.strRegExp.test(value)) {
    return [value, Blockly.VBA.ORDER_ATOMIC];
  }
  return ['String(' + value + ')', Blockly.VBA.ORDER_ATOMIC];
};

/**
 * Regular expression to detect a single-quoted string literal.
 */
Blockly.VBA.text.forceString_.strRegExp = /^\s*'([^']|\\')*'\s*$/;

Blockly.VBA['text_join'] = function(block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
      elements[i] = Blockly.VBA.valueToCode(block, 'ADD' + i,
          Blockly.VBA.ORDER_NONE) || '\"\"';
    }
    var code = elements.join(' & ');
    return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var value = Blockly.VBA.valueToCode(block, 'TEXT',
      Blockly.VBA.ORDER_NONE) || '\"\"';
  var code = varName + ' = ' + varName + ' & ' + value + '\n';
  return code;
};

Blockly.VBA['text_length'] = function(block) {
  // String or array length.
  var text = Blockly.VBA.valueToCode(block, 'VALUE',
      Blockly.VBA.ORDER_ATOMIC) || '\'\'';
  return [text + '.length', Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_isEmpty'] = function(block) {
  // Is the string null or array empty?
  var text = Blockly.VBA.valueToCode(block, 'VALUE',
      Blockly.VBA.ORDER_ATOMIC) || '\'\'';
  return ['!' + text + '.length', Blockly.VBA.ORDER_LOGICAL_NOT];
};

Blockly.VBA['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var substring = Blockly.VBA.valueToCode(block, 'FIND',
      Blockly.VBA.ORDER_NONE) || '\'\'';
  var text = Blockly.VBA.valueToCode(block, 'VALUE',
      Blockly.VBA.ORDER_ATOMIC) || '\'\'';
  var code = text + '.' + operator + '(' + substring + ')';
  // Adjust index if using one-based indices.
  if (block.workspace.options.oneBasedIndex) {
    return [code + ' + 1', Blockly.VBA.ORDER_ADDITION];
  }
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var textOrder = (where == 'RANDOM') ? Blockly.VBA.ORDER_NONE :
      Blockly.VBA.ORDER_ATOMIC;
  var text = Blockly.VBA.valueToCode(block, 'VALUE',
      textOrder) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '.charAt(0)';
      return [code, Blockly.VBA.ORDER_ATOMIC];
    case 'LAST':
      var code = text + '.slice(-1)';
      return [code, Blockly.VBA.ORDER_ATOMIC];
    case 'FROM_START':
      var at = Blockly.VBA.getAdjusted(block, 'AT');
      // Adjust index if using one-based indices.
      var code = text + '.charAt(' + at + ')';
      return [code, Blockly.VBA.ORDER_ATOMIC];
    case 'FROM_END':
      var at = Blockly.VBA.getAdjusted(block, 'AT', 1, true);
      var code = text + '.slice(' + at + ').charAt(0)';
      return [code, Blockly.VBA.ORDER_ATOMIC];
    case 'RANDOM':
      var functionName = Blockly.VBA.provideFunction_(
          'textRandomLetter',
          ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
              '(text) {',
           '  var x = Math.floor(Math.random() * text.length);',
           '  return text[x];',
           '}']);
      var code = functionName + '(' + text + ')';
      return [code, Blockly.VBA.ORDER_ATOMIC];
  }
  throw Error('Unhandled option (text_charAt).');
};

/**
 * Returns an expression calculating the index into a string.
 * @param {string} stringName Name of the string, used to calculate length.
 * @param {string} where The method of indexing, selected by dropdown in Blockly
 * @param {string=} opt_at The optional offset when indexing from start/end.
 * @return {string|undefined} Index expression.
 * @private
 */
Blockly.VBA.text.getIndex_ = function(stringName, where, opt_at) {
  if (where == 'FIRST') {
    return '0';
  } else if (where == 'FROM_END') {
    return stringName + '.length - 1 - ' + opt_at;
  } else if (where == 'LAST') {
    return stringName + '.length - 1';
  } else {
    return opt_at;
  }
};

Blockly.VBA['text_getSubstring'] = function(block) {
  // Get substring.
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var requiresLengthCall = (where1 != 'FROM_END' && where1 != 'LAST' &&
      where2 != 'FROM_END' && where2 != 'LAST');
  var textOrder = requiresLengthCall ? Blockly.VBA.ORDER_ATOMIC :
      Blockly.VBA.ORDER_NONE;
  var text = Blockly.VBA.valueToCode(block, 'STRING',
      textOrder) || '\'\'';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = text;
    return [code, Blockly.VBA.ORDER_NONE];
  } else if (text.match(/^'?\w+'?$/) || requiresLengthCall) {
    // If the text is a variable or literal or doesn't require a call for
    // length, don't generate a helper function.
    switch (where1) {
      case 'FROM_START':
        var at1 = Blockly.VBA.getAdjusted(block, 'AT1');
        break;
      case 'FROM_END':
        var at1 = Blockly.VBA.getAdjusted(block, 'AT1', 1, false,
            Blockly.VBA.ORDER_SUBTRACTION);
        at1 = text + '.length - ' + at1;
        break;
      case 'FIRST':
        var at1 = '0';
        break;
      default:
        throw Error('Unhandled option (text_getSubstring).');
    }
    switch (where2) {
      case 'FROM_START':
        var at2 = Blockly.VBA.getAdjusted(block, 'AT2', 1);
        break;
      case 'FROM_END':
        var at2 = Blockly.VBA.getAdjusted(block, 'AT2', 0, false,
            Blockly.VBA.ORDER_SUBTRACTION);
        at2 = text + '.length - ' + at2;
        break;
      case 'LAST':
        var at2 = text + '.length';
        break;
      default:
        throw Error('Unhandled option (text_getSubstring).');
    }
    code = text + '.slice(' + at1 + ', ' + at2 + ')';
  } else {
    var at1 = Blockly.VBA.getAdjusted(block, 'AT1');
    var at2 = Blockly.VBA.getAdjusted(block, 'AT2');
    var getIndex_ = Blockly.VBA.text.getIndex_;
    var wherePascalCase = {'FIRST': 'First', 'LAST': 'Last',
      'FROM_START': 'FromStart', 'FROM_END': 'FromEnd'};
    var functionName = Blockly.VBA.provideFunction_(
        'subsequence' + wherePascalCase[where1] + wherePascalCase[where2],
        ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
        '(sequence' +
        // The value for 'FROM_END' and'FROM_START' depends on `at` so
        // we add it as a parameter.
        ((where1 == 'FROM_END' || where1 == 'FROM_START') ? ', at1' : '') +
        ((where2 == 'FROM_END' || where2 == 'FROM_START') ? ', at2' : '') +
        ') {',
          '  var start = ' + getIndex_('sequence', where1, 'at1') + ';',
          '  var end = ' + getIndex_('sequence', where2, 'at2') + ' + 1;',
          '  return sequence.slice(start, end);',
          '}']);
    var code = functionName + '(' + text +
        // The value for 'FROM_END' and 'FROM_START' depends on `at` so we
        // pass it.
        ((where1 == 'FROM_END' || where1 == 'FROM_START') ? ', ' + at1 : '') +
        ((where2 == 'FROM_END' || where2 == 'FROM_START') ? ', ' + at2 : '') +
        ')';
  }
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.toUpperCase()',
    'LOWERCASE': '.toLowerCase()',
    'TITLECASE': null
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var textOrder = operator ? Blockly.VBA.ORDER_ATOMIC :
      Blockly.VBA.ORDER_NONE;
  var text = Blockly.VBA.valueToCode(block, 'TEXT',
      textOrder) || '\'\'';
  if (operator) {
    // Upper and lower case are functions built into VBA.
    var code = text + operator;
  } else {
    // Title case is not a native VBA function.  Define one.
    var functionName = Blockly.VBA.provideFunction_(
        'textToTitleCase',
        ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
            '(str) {',
         '  return str.replace(/\\S+/g,',
         '      function(txt) {return txt[0].toUpperCase() + ' +
            'txt.substring(1).toLowerCase();});',
         '}']);
    var code = functionName + '(' + text + ')';
  }
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_trim'] = function(block) {
  // Trim spaces.
  var OPERATORS = {
    'LEFT': ".replace(/^[\\s\\xa0]+/, '')",
    'RIGHT': ".replace(/[\\s\\xa0]+$/, '')",
    'BOTH': '.trim()'
  };
  var operator = OPERATORS[block.getFieldValue('MODE')];
  var text = Blockly.VBA.valueToCode(block, 'TEXT',
      Blockly.VBA.ORDER_ATOMIC) || '\'\'';
  return [text + operator, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_print'] = function(block) {
  // Print statement.
  var msg = Blockly.VBA.valueToCode(block, 'TEXT',
      Blockly.VBA.ORDER_NONE) || '\"\"';
  return 'MsgBox (' + msg + ')\n';
};

Blockly.VBA['text_prompt_ext'] = function(block) {
  // Prompt function.
  if (block.getField('TEXT')) {
    // Internal message.
    var msg = Blockly.VBA.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    var msg = Blockly.VBA.valueToCode(block, 'TEXT',
        Blockly.VBA.ORDER_NONE) || '\'\'';
  }
  var code = 'window.prompt(' + msg + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'Number(' + code + ')';
  }
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_prompt'] = Blockly.VBA['text_prompt_ext'];

Blockly.VBA['text_count'] = function(block) {
  var text = Blockly.VBA.valueToCode(block, 'TEXT',
      Blockly.VBA.ORDER_NONE) || '\'\'';
  var sub = Blockly.VBA.valueToCode(block, 'SUB',
      Blockly.VBA.ORDER_NONE) || '\'\'';
  var functionName = Blockly.VBA.provideFunction_(
      'textCount',
      ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
          '(haystack, needle) {',
       '  if (needle.length === 0) {',
       '    return haystack.length + 1;',
       '  } else {',
       '    return haystack.split(needle).length - 1;',
       '  }',
       '}']);
  var code = functionName + '(' + text + ', ' + sub + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_replace'] = function(block) {
  var text = Blockly.VBA.valueToCode(block, 'TEXT',
      Blockly.VBA.ORDER_NONE) || '\'\'';
  var from = Blockly.VBA.valueToCode(block, 'FROM',
      Blockly.VBA.ORDER_NONE) || '\'\'';
  var to = Blockly.VBA.valueToCode(block, 'TO',
      Blockly.VBA.ORDER_NONE) || '\'\'';
  // The regex escaping code below is taken from the implementation of
  // goog.string.regExpEscape.
  var functionName = Blockly.VBA.provideFunction_(
      'textReplace',
      ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
          '(haystack, needle, replacement) {',
       '  needle = ' +
           'needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")',
       '                 .replace(/\\x08/g,"\\\\x08");',
       '  return haystack.replace(new RegExp(needle, \'g\'), replacement);',
       '}']);
  var code = functionName + '(' + text + ', ' + from + ', ' + to + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['text_reverse'] = function(block) {
  var text = Blockly.VBA.valueToCode(block, 'TEXT',
      Blockly.VBA.ORDER_ATOMIC) || '\'\'';
  var code = text + '.split(\'\').reverse().join(\'\')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};
