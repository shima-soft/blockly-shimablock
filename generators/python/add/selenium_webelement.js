Blockly.Python['element_var_set'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + ' = ' + value_name + '\n';
  return code;
};

Blockly.Python['element_var_get'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_attribute_value = Blockly.Python.valueToCode(block, 'ATTRIBUTE_VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + dropdown_method + '(' + value_attribute_value + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_arg0'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code = variable_object_name + dropdown_property;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_find_element_by'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.find_element_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_find_elements_by'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.find_elements_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_is'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('NAME');
  var code = variable_object_name + dropdown_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_method'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = variable_object_name + dropdown_method + '\n';
  return code;
};

Blockly.Python['element_method_send_keys'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_input_text = Blockly.Python.valueToCode(block, 'INPUT_TEXT', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.send_keys(' + value_input_text + ')\n';
  return code;
};

Blockly.Python['element_method_screenshot'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.screenshot(' + value_filename + ')\n';
  return code;
};