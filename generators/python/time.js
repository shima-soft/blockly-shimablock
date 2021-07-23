Blockly.Python['time_method_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_sec = Blockly.Python.valueToCode(block, 'SEC', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep(' + value_sec + ')\n';
  return code;
};