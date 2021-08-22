Blockly.Python['pickle_dump'] = function(block) {
  var variable_target_name = Blockly.Python.nameDB_.getName(block.getFieldValue('TARGET_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_protocol = block.getFieldValue('PROTOCOL');
  if(dropdown_protocol == 'none'){
    var code = Blockly.Python.INDENT + 'pickle.dump(' + variable_target_name + ', f)\n';
  }else{
    var code = Blockly.Python.INDENT + 'pickle.dump(' + variable_target_name + ', f, ' + dropdown_protocol + ')\n';
  }
  return code;
};

Blockly.Python['pickle_load'] = function(block) {
  var variable_target_name = Blockly.Python.nameDB_.getName(block.getFieldValue('TARGET_NAME'), Blockly.Variables.NAME_TYPE);
  var code = Blockly.Python.INDENT + variable_target_name + ' = pickle.load(f)\n';
  return code;
};

Blockly.Python['pickle_open_dump'] = function(block) {
  Blockly.Python.definitions_['import_pickle'] = 'import pickle';
  var text_file_name = block.getFieldValue('FILE_NAME');
  var dropdown_mode = block.getFieldValue('MODE');
  var code = 'with open(\'' + text_file_name + '\', ' + dropdown_mode + ') as f:\n';
  return code;
};

Blockly.Python['pickle_open_load'] = function(block) {
  Blockly.Python.definitions_['import_pickle'] = 'import pickle';
  var text_file_name = block.getFieldValue('FILE_NAME');
  var dropdown_mode = block.getFieldValue('MODE');
  var code = 'with open(\'' + text_file_name + '\', ' + dropdown_mode + ') as f:\n';
  return code;
};