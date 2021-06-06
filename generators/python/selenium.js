Blockly.Python['browser_find_element_by_class_name'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.find_element_by_class_name(' + value_name + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_find_element_by_id'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.find_element_by_id(' + value_name + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_find_element_by_xpath'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.find_element_by_xpath(' + value_name + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_current_url'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.current_url';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_title'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.title';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_page_source'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.page_source';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_method'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('METHOD');
  var code = value_browser_object_name + '.' + dropdown_method + '\n';
  return code;
};

Blockly.Python['element_click'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.click()';
  return code;
};

Blockly.Python['element_send_keys'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_input_text = Blockly.Python.valueToCode(block, 'INPUT_TEXT', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.send_keys(' + value_input_text + ')' + '\n';
  return code;
};

Blockly.Python['element_text'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.text';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_get_attribute'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_attribute_value = Blockly.Python.valueToCode(block, 'ATTRIBUTE_VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.get_attribute(' + value_attribute_value + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_is_displayed'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.is_displayed';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_is_enabled'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.is_enabled';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_is_selected'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_element_object_name = Blockly.Python.valueToCode(block, 'ELEMENT_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_element_object_name + '.is_selected';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['browser_get'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var value_browser_object_name = Blockly.Python.valueToCode(block, 'BROWSER_OBJECT_NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = value_browser_object_name + '.get(' + value_name + ')\n';
  return code;
};

Blockly.Python['browser_var_set'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_browser_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('BROWSER_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_browser_name = block.getFieldValue('BROWSER_NAME');
  var code = variable_browser_object_name + ' = webdriver.' + dropdown_browser_name +'()\n';
  return code;
};

Blockly.Python['browser_var_get'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_browser_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('BROWSER_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_browser_object_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['element_var_set'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_element_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ELEMENT_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = variable_element_object_name + ' = ' + value_name +'\n';
  return code;
};

Blockly.Python['element_var_get'] = function(block) {
  Blockly.Python.definitions_['import_webdriver'] = 'from selenium import webdriver';
  var variable_element_object_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ELEMENT_OBJECT_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_element_object_name;
  return [code, Blockly.Python.ORDER_ATOMIC];
};