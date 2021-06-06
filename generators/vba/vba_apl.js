Blockly.VBA['excel_calculation'] = function(block) {
  var dropdown_conf = block.getFieldValue('CONF');
  var code = 'Application.Calculation = ' + dropdown_conf + '\n';
  return code;
};

Blockly.VBA['excel_screenupdating'] = function(block) {
  var dropdown_conf = block.getFieldValue('CONF');
  var code = 'Application.ScreenUpdating = ' + dropdown_conf + '\n';
  return code;
};

Blockly.VBA['excel_displayalerts'] = function(block) {
  var dropdown_conf = block.getFieldValue('CONF');
  var code = 'Application.DisplayAlerts = ' + dropdown_conf + '\n';
  return code;
};

Blockly.VBA['excel_statusbar_false'] = function(block) {
  var code = 'Application.StatusBar = False\n';
  return code;
};

Blockly.VBA['excel_debug_print'] = function(block) {
  var value_target_item = Blockly.VBA.valueToCode(block, 'TARGET_ITEM', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Debug.Print ' + value_target_item + '\n';
  return code;
};

Blockly.VBA['excel_statusbar'] = function(block) {
  var value_target_item = Blockly.VBA.valueToCode(block, 'TARGET_ITEM', Blockly.VBA.ORDER_ATOMIC);
  var code = 'Application.StatusBar = ' + value_target_item + '\n';
  return code;
};

Blockly.VBA['excel_start'] = function(block) {
  var code = '';
  return code;
};