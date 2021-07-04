Blockly.Python['browser_var_set'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_browser_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('BROWSER_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_browser_name = block.getFieldValue('BROWSER_NAME');
  var code = variable_browser_object_name + ' = webdriver.' + dropdown_browser_name + '()\n';
  return code;
};

Blockly.Python['browser_var_get'] = function(block) {
  var variable_browser_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('BROWSER_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_browser_object_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_var_set'] = function(block) {
  var variable_element_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ELEMENT_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_element_object_name + ' = ' + value_name + '\n';
  return code;
};

Blockly.Python['element_var_get'] = function(block) {
  var variable_element_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ELEMENT_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_element_object_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_get'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code = value_browser_object_name + dropdown_property;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_get_find_element_by'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.find_element_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_get_find_elements_by'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.find_elements_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_method'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = value_browser_object_name + dropdown_method + '\n';
  return code;
};

Blockly.Python['browser_method_get'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.get(' + value_name + ')\n';
  return code;
};

Blockly.Python['browser_set_window_size'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.set_window_size(' + value_width + ',' + value_height + ')\n';
  return code;
};

Blockly.Python['browser_set_window_position'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.set_window_position(' + value_x + ',' + value_y + ')\n';
  return code;
};

Blockly.Python['browser_set_script_timeout'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_timeout_second = Blockly.Python.valueToCode(block, 'TIMEOUT_SECOND', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.set_script_timeout(' + value_timeout_second + ')\n';
  return code;
};

Blockly.Python['browser_set_page_load_timeout'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_timeout_second = Blockly.Python.valueToCode(block, 'TIMEOUT_SECOND', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.set_page_load_timeout(' + value_timeout_second + ')\n';
  return code;
};

Blockly.Python['element_get_find_element_by'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.find_element_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_find_elements_by'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.find_elements_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_text'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.text';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_arg0'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code = value_element_object_name + dropdown_property;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_attribute_value = Blockly.Python.valueToCode(block, 'ATTRIBUTE_VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + dropdown_method + '(' + value_attribute_value + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_method'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = value_element_object_name + dropdown_method + '\n';
  return code;
};

Blockly.Python['element_method_send_keys'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_input_text = Blockly.Python.valueToCode(block, 'INPUT_TEXT', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.send_keys(' + value_input_text + ')\n';
  return code;
};

Blockly.Python['element_method_screenshot'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.screenshot(' + value_filename + ')\n';
  return code;
};

Blockly.Python['element_is'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var code = value_element_object_name + dropdown_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_method_add_cookie'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.add_cookie({\'name\': ' + value_name + ', \'value\': ' + value_value + '})\n';
  return code;
};

Blockly.Python['browser_get_cookies'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.get_cookies()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_get_cookie'] = function(block) {
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.get_cookie(' + value_name + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_method_delete_all_cookies'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.delete_all_cookies()\n';
  return code;
};

Blockly.Python['browser_method_delete_cookie'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.delete_cookie(' + value_name + ')\n';
  return code;
};

Blockly.Python['browser_method_get_screenshot_as_file'] = function(block) {
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.get_screenshot_as_file(' + value_filename + ')';
  return code;
};