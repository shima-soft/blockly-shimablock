Blockly.VBA['cell_cells'] = function(block) {
  var value_col = Blockly.VBA.valueToCode(block, 'COL', Blockly.VBA.ORDER_ATOMIC);
  var value_row = Blockly.VBA.valueToCode(block, 'ROW', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Cells(' + value_row + ', ' + value_col + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_range'] = function(block) {
  var text_range = block.getFieldValue('RANGE');
  var code = 'Range("' + text_range + '")';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_range_start_end'] = function(block) {
  var value_start_range = Blockly.VBA.valueToCode(block, 'START_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var value_end_range = Blockly.VBA.valueToCode(block, 'END_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Range(' + value_start_range + ',' + value_end_range + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_columns'] = function(block) {
  var value_col = Blockly.VBA.valueToCode(block, 'COL', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Columns(' + value_col + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_rows'] = function(block) {
  var value_row = Blockly.VBA.valueToCode(block, 'ROW', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Rows(' + value_row + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_sheet_cells'] = function(block) {
  var value_object_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEET', Blockly.VBA.ORDER_ATOMIC);
  var value_row = Blockly.VBA.valueToCode(block, 'ROW', Blockly.VBA.ORDER_ATOMIC);
  var value_col = Blockly.VBA.valueToCode(block, 'COL', Blockly.VBA.ORDER_ATOMIC);
  var code = value_object_sheet + '.Cells(' + value_row + ', ' + value_col + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_sheet_range'] = function(block) {
  var value_object_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEET', Blockly.VBA.ORDER_ATOMIC);
  var text_range = block.getFieldValue('RANGE');
  var code = value_object_sheet + '.Range("' + text_range + '")';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_sheet_range_start_end'] = function(block) {
  var value_object_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEET', Blockly.VBA.ORDER_ATOMIC);
  var value_start_range = Blockly.VBA.valueToCode(block, 'START_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var value_end_range = Blockly.VBA.valueToCode(block, 'END_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = value_object_sheet + '.Range(' + value_start_range + ',' + value_end_range + ')';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_selection'] = function(block) {
  var code = 'Selection';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_sheet_selection'] = function(block) {
  var value_object_sheet = Blockly.VBA.valueToCode(block, 'OBJECT_SHEET', Blockly.VBA.ORDER_ATOMIC);
  var code = value_object_sheet + '.Selection';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_rows_start_end'] = function(block) {
  var value_start_range = Blockly.VBA.valueToCode(block, 'START_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var value_end_range = Blockly.VBA.valueToCode(block, 'END_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Rows("' + value_start_range + ':' + value_end_range + '")';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['cell_columns_start_end'] = function(block) {
  var value_start_range = Blockly.VBA.valueToCode(block, 'START_RANGE', Blockly.VBA.ORDER_ATOMIC).replace(/\"/g,"");
  var value_end_range = Blockly.VBA.valueToCode(block, 'END_RANGE', Blockly.VBA.ORDER_ATOMIC).replace(/\"/g,"");
  var code = 'Columns("' + value_start_range + ':' + value_end_range + '")';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};