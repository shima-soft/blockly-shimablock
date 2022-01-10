Blockly.Variables.NAME_TYPE = 'VARIABLE';
Blockly.Python['driver_var_set'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_driver_name = block.getFieldValue('driver_NAME');
  var code = variable_object_name + ' = webdriver.' + dropdown_driver_name + '()\n';
  return code;
};

Blockly.Python['driver_get'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = variable_object_name + dropdown_method;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_cookie'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.get_cookie(' + value_name + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_cookies'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name + '.get_cookies()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_find_element_by'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.find_element_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_find_elements_by'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.find_elements_by_' + dropdown_method + '('+ value_name +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_screenshot_as_xxx'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = variable_object_name + dropdown_method;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_switch_to_active_element'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name + '.switch_to.active_element';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_switch_to_alert'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name + '.switch_to.alert';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_method'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = variable_object_name + dropdown_method + '\n';
  return code;
};

Blockly.Python['driver_method_add_cookie'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.add_cookie({\'name\': ' + value_name + ', \'value\': ' + value_value + '})\n';
  return code;
};

Blockly.Python['driver_method_delete_cookie'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.delete_cookie(' + value_name + ')\n';
  return code;
};

Blockly.Python['driver_method_delete_all_cookies'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name + '.delete_all_cookies()\n';
  return code;
};

Blockly.Python['driver_method_execute_script'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_javascript = Blockly.Python.valueToCode(block, 'JAVASCRIPT', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.execute_script(' + value_javascript + ')\n';
  return code;
};

Blockly.Python['driver_method_get'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.get(' + value_name + ')\n';
  return code;
};

Blockly.Python['driver_method_get_screenshot_as_file'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.get_screenshot_as_file(' + value_filename + ')\n';
  return code;
};

Blockly.Python['driver_set_window_size'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.set_window_size(' + value_width + ',' + value_height + ')\n';
  return code;
};

Blockly.Python['driver_set_window_position'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.set_window_position(' + value_x + ',' + value_y + ')\n';
  return code;
};

Blockly.Python['driver_set_window_rect'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  var arg_list = [];
  if (value_y != "") {
    arg_list.push("y=" + value_y)
  }
  if (value_x != "") {
    arg_list.push("x=" + value_x)
  }
  if (value_width != "") {
    arg_list.push("width=" + value_width)
  }
  if (value_height != "") {
    arg_list.push("height=" + value_height)
  }
  var code = variable_object_name + '.set_window_rect(' + arg_list.join(",") + ')\n';
  return code;
};

Blockly.Python['driver_set_implicitly_wait'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_sec = Blockly.Python.valueToCode(block, 'SEC', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.implicitly_wait(' + value_sec + ')\n';
  return code;
};

Blockly.Python['driver_set_page_load_timeout'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_timeout_second = Blockly.Python.valueToCode(block, 'TIMEOUT_SECOND', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.set_page_load_timeout(' + value_timeout_second + ')\n';
  return code;
};

Blockly.Python['driver_set_script_timeout'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_timeout_second = Blockly.Python.valueToCode(block, 'TIMEOUT_SECOND', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.set_script_timeout(' + value_timeout_second + ')\n';
  return code;
};

Blockly.Python['driver_method_switch_to_frame_window'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_method = block.getFieldValue('METHOD');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.switch_to.' + dropdown_method + '(' + value_name + ')\n';
  return code;
};

Blockly.Python['driver_get_session_id'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name + '.session_id';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_get_command_executor_url'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_name + '.command_executor._url';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['driver_var_set_remote'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_command_executor = Blockly.Python.valueToCode(block, 'COMMAND_EXECUTOR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_option_headless = block.getFieldValue('OPTION_HEADLESS');
  var code = '';
  if(dropdown_option_headless != ""){
    code += 'options = webdriver.ChromeOptions()\n';
    code += 'options.add_argument(\'--headless\')\n';
    code += variable_object_name + ' = webdriver.Remote(command_executor=' + value_command_executor + ',options=options)\n';
  }else{
    code += variable_object_name + ' = webdriver.Remote(command_executor=' + value_command_executor + ')\n';
  }
  return code;
};

Blockly.Python['driver_set_session_id'] = function(block) {
  var variable_object_name = Blockly.Python.nameDB_.getName(block.getFieldValue('OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_sesshion_id = Blockly.Python.valueToCode(block, 'SESSHION_ID', Blockly.Python.ORDER_ATOMIC);
  var code = variable_object_name + '.session_id = ' + value_sesshion_id + '\n';
  return code;
};