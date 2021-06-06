Blockly.VBA['set_name'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var value_name = Blockly.VBA.valueToCode(block, 'NAME', Blockly.VBA.ORDER_ATOMIC);
  // TODO: Assemble VBA into code variable.
  var code = value_target_object + '.Name = ' + value_name + '\n';
  return code;
};

Blockly.VBA['set_open'] = function(block) {
  var text_file_name = block.getFieldValue('FILE_NAME');
  var dropdown_read_only = block.getFieldValue('READ_ONLY');
  var variable_name = Blockly.VBA.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble VBA into code variable.
  var code = 'Set ' + variable_name + ' = Workbooks.Open(Filename:="' + text_file_name + '", ' + dropdown_read_only + ')\n';
  return code;
};
