Blockly.VBA['sheet_sheets'] = function(block) {
  var code = 'Worksheets';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_activesheet'] = function(block) {
  var code = 'ActiveSheet';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_activesheet_cell'] = function(block) {
  var value_object_range = Blockly.VBA.valueToCode(block, 'OBJECT_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = 'ActiveSheet.' + value_object_range;
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_sheet'] = function(block) {
  var text_sheet_name = block.getFieldValue('SHEET_NAME');
  var code = 'Worksheets("' + text_sheet_name + '")';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_sheet_cell'] = function(block) {
  var text_sheet_name = block.getFieldValue('SHEET_NAME');
  var value_object_range = Blockly.VBA.valueToCode(block, 'OBJECT_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Worksheets("' + text_sheet_name + '").' + value_object_range;
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_var_cell'] = function(block) {
  var variable_var_sheet = Blockly.VBA.variableDB_.getName(block.getFieldValue('VAR_SHEET'), Blockly.Variables.NAME_TYPE);
  var value_object_range = Blockly.VBA.valueToCode(block, 'OBJECT_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = variable_var_sheet + '.' + value_object_range;
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_var_set'] = function(block) {
  var variable_var_sheet = Blockly.VBA.variableDB_.getName(block.getFieldValue('VAR_SHEET'), Blockly.Variables.NAME_TYPE);
  var value_object_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEET', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Set ' + variable_var_sheet + ' = ' + value_object_sheet + '\n';
  return code;
};

Blockly.VBA['sheet_var_get'] = function(block) {
  var variable_var_sheet = Blockly.VBA.variableDB_.getName(block.getFieldValue('VAR_SHEET'), Blockly.Variables.NAME_TYPE);
  var code = variable_var_sheet;
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_book_activesheet'] = function(block) {
  var value_object_book = Blockly.VBA.valueToCode(block, 'OBJECT_BOOK', Blockly.VBA.ORDER_ATOMIC);
  var code = value_object_book + '.ActiveSheet';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_book_sheet'] = function(block) {
  var value_object_book = Blockly.VBA.valueToCode(block, 'OBJECT_BOOK', Blockly.VBA.ORDER_ATOMIC);
  var text_sheet_name = block.getFieldValue('SHEET_NAME');
  var code = value_object_book + '.Worksheets("' + text_sheet_name + '")';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_book_sheets'] = function(block) {
  var value_object_book = Blockly.VBA.valueToCode(block, 'OBJECT_BOOK', Blockly.VBA.ORDER_ATOMIC);
  var code = value_object_book + '.Worksheets';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_sheet_index'] = function(block) {
  var value_index = Blockly.VBA.valueToCode(block, 'INDEX', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Worksheets(' + value_index + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['sheet_book_sheet_index'] = function(block) {
  var value_object_book = Blockly.VBA.valueToCode(block, 'OBJECT_BOOK', Blockly.VBA.ORDER_ATOMIC);
  var value_index = Blockly.VBA.valueToCode(block, 'INDEX', Blockly.VBA.ORDER_ATOMIC);
  var code = value_object_book + '.Worksheets(' + value_index + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};