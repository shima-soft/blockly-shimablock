
'use strict';

goog.provide('Blockly.VBA.variables');

goog.require('Blockly.VBA');


Blockly.VBA['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.VBA.nameDB_.getName(block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.VBA.valueToCode(block, 'VALUE',
      Blockly.VBA.ORDER_NONE) || '0';
  var varName = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + '\n';
};
