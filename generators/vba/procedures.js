
'use strict';

goog.provide('Blockly.VBA.procedures');

goog.require('Blockly.VBA');


Blockly.VBA['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
  var xfix1 = '';
  if (Blockly.VBA.STATEMENT_PREFIX) {
    xfix1 += Blockly.VBA.injectId(Blockly.VBA.STATEMENT_PREFIX,
        block);
  }
  if (Blockly.VBA.STATEMENT_SUFFIX) {
    xfix1 += Blockly.VBA.injectId(Blockly.VBA.STATEMENT_SUFFIX,
        block);
  }
  if (xfix1) {
    xfix1 = Blockly.VBA.prefixLines(xfix1, Blockly.VBA.INDENT);
  }
  var loopTrap = '';
  if (Blockly.VBA.INFINITE_LOOP_TRAP) {
    loopTrap = Blockly.VBA.prefixLines(
        Blockly.VBA.injectId(Blockly.VBA.INFINITE_LOOP_TRAP,
        block), Blockly.VBA.INDENT);
  }
  var branch = Blockly.VBA.statementToCode(block, 'STACK');
  var returnValue = Blockly.VBA.valueToCode(block, 'RETURN',
      Blockly.VBA.ORDER_NONE) || '';
  var xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = Blockly.VBA.INDENT + 'return ' + returnValue + ';\n';
  }
  var args = [];
  var variables = block.getVars();
  for (var i = 0; i < variables.length; i++) {
    args[i] = Blockly.VBA.nameDB_.getName(variables[i],
        Blockly.VARIABLE_CATEGORY_NAME);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      xfix1 + loopTrap + branch + xfix2 + returnValue + '}';
  code = Blockly.VBA.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.VBA.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.VBA['procedures_defnoreturn'] =
    Blockly.VBA['procedures_defreturn'];

Blockly.VBA['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
  var args = [];
  var variables = block.getVars();
  for (var i = 0; i < variables.length; i++) {
    args[i] = Blockly.VBA.valueToCode(block, 'ARG' + i,
        Blockly.VBA.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.VBA.ORDER_FUNCTION_CALL];
};

Blockly.VBA['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  // Generated code is for a function call as a statement is the same as a
  // function call as a value, with the addition of line ending.
  var tuple = Blockly.VBA['procedures_callreturn'](block);
  return tuple[0] + ';\n';
};

Blockly.VBA['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.VBA.valueToCode(block, 'CONDITION',
      Blockly.VBA.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (Blockly.VBA.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the return is triggered.
    code += Blockly.VBA.prefixLines(
        Blockly.VBA.injectId(Blockly.VBA.STATEMENT_SUFFIX, block),
        Blockly.VBA.INDENT);
  }
  if (block.hasReturnValue_) {
    var value = Blockly.VBA.valueToCode(block, 'VALUE',
        Blockly.VBA.ORDER_NONE) || 'null';
    code += Blockly.VBA.INDENT + 'return ' + value + ';\n';
  } else {
    code += Blockly.VBA.INDENT + 'return;\n';
  }
  code += '}\n';
  return code;
};
