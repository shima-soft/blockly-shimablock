Blockly.VBA['get_name'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Name';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['get_end_row'] = function(block) {
  var value_col = Blockly.VBA.valueToCode(block, 'COL', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Cells(Rows.Count, ' + value_col + ').End(xlUp).Row';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['get_end_col'] = function(block) {
  var value_row = Blockly.VBA.valueToCode(block, 'ROW', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Cells(' + value_row + ', Columns.Count).End(xlToLeft).Column';
  return [code, Blockly.VBA.ORDER_ATOMIC];
};