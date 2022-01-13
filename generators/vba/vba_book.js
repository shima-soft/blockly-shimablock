Blockly.VBA['book_workbooks'] = function(block) {
  // TODO: Assemble VBA into code variable.
  var code = 'Workbooks';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_thisworkbook'] = function(block) {
  // TODO: Assemble VBA into code variable.
  var code = 'ThisWorkBook';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_thisworkbook_sheet'] = function(block) {
  var value_object_sheets_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEETS_SHEET', Blockly.VBA.ORDER_ATOMIC);
  // TODO: Assemble VBA into code variable.
  var code = 'ThisWorkBook.' + value_object_sheets_sheet;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_activeworkbook'] = function(block) {
  // TODO: Assemble VBA into code variable.
  var code = 'ActiveWorkBook';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_activeworkbook_sheet'] = function(block) {
  var value_object_sheets_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEETS_SHEET', Blockly.VBA.ORDER_ATOMIC);
  // TODO: Assemble VBA into code variable.
  var code = 'ActiveWorkBook.' + value_object_sheets_sheet;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_var_sheet'] = function(block) {
  var variable_object_book = Blockly.VBA.nameDB_.getName(block.getFieldValue('OBJECT_BOOK'), Blockly.Variables.NAME_TYPE);
  var value_object_sheets_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEETS_SHEET', Blockly.VBA.ORDER_ATOMIC);
  var code = variable_object_book + '.' + value_object_sheets_sheet;
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_var_set'] = function(block) {
  var variable_var_book = Blockly.VBA.nameDB_.getName(block.getFieldValue('VAR_BOOK'), Blockly.Variables.NAME_TYPE);
  var value_object_book = Blockly.VBA.valueToCode(block, 'OBJECT_BOOK', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Set ' + variable_var_book + ' = ' + value_object_book + '\n';
  return code;
};

Blockly.VBA['book_var_get'] = function(block) {
  var variable_object_book = Blockly.VBA.nameDB_.getName(block.getFieldValue('OBJECT_BOOK'), Blockly.Variables.NAME_TYPE);
  var code = variable_object_book;
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['book_workbook'] = function(block) {
  var value_bookname = Blockly.VBA.valueToCode(block, 'BOOKNAME', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Workbooks(' + value_bookname + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};