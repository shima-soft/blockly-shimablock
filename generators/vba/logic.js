
'use strict';

goog.provide('Blockly.VBA.logic');

goog.require('Blockly.VBA');


Blockly.VBA['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  if (Blockly.VBA.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    code += Blockly.VBA.injectId(Blockly.VBA.STATEMENT_PREFIX,
        block);
  }
  do {
    conditionCode = Blockly.VBA.valueToCode(block, 'IF' + n,
        Blockly.VBA.ORDER_NONE) || 'False';
    branchCode = Blockly.VBA.statementToCode(block, 'DO' + n);
    if (Blockly.VBA.STATEMENT_SUFFIX) {
      branchCode = Blockly.VBA.prefixLines(
          Blockly.VBA.injectId(Blockly.VBA.STATEMENT_SUFFIX,
          block), Blockly.VBA.INDENT) + branchCode;
    }
    code += (n > 0 ? 'Else' : '') +
        'If ' + conditionCode + ' Then\n' + branchCode + '';
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE') || Blockly.VBA.STATEMENT_SUFFIX) {
    branchCode = Blockly.VBA.statementToCode(block, 'ELSE');
    if (Blockly.VBA.STATEMENT_SUFFIX) {
      branchCode = Blockly.VBA.prefixLines(
          Blockly.VBA.injectId(Blockly.VBA.STATEMENT_SUFFIX,
          block), Blockly.VBA.INDENT) + branchCode;
    }
    code += 'Else\n' + branchCode;
  }
  return code + 'End If\n';
};

Blockly.VBA['controls_ifelse'] = Blockly.VBA['controls_if'];

Blockly.VBA['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '=',
    'NEQ': '<>',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.VBA.ORDER_EQUALITY : Blockly.VBA.ORDER_RELATIONAL;
  var argument0 = Blockly.VBA.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.VBA.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.VBA['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? 'And' : 'Or';
  var order = (operator == 'And') ? Blockly.VBA.ORDER_LOGICAL_AND :
      Blockly.VBA.ORDER_LOGICAL_OR;
  var argument0 = Blockly.VBA.valueToCode(block, 'A', order);
  var argument1 = Blockly.VBA.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'False';
    argument1 = 'False';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == 'And') ? 'True' : 'False';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.VBA['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.VBA.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.VBA.valueToCode(block, 'BOOL', order) ||
      'True';
  var code = 'Not ' + argument0;
  return [code, order];
};

Blockly.VBA['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'True' : 'False';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['logic_null'] = function(block) {
  // Null data type.
  return ['Null', Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.VBA.valueToCode(block, 'IF',
      Blockly.VBA.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.VBA.valueToCode(block, 'THEN',
      Blockly.VBA.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.VBA.valueToCode(block, 'ELSE',
      Blockly.VBA.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.VBA.ORDER_CONDITIONAL];
};
