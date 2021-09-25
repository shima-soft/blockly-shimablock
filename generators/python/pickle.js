var pickle_file_obj_name = new Array();

Blockly.Python['pickle_dump'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var file_obj_name = 'f';
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'pickle_open_dump')this.unplug();
    file_obj_name = pickle_file_obj_name[getSurroundParent_block.id];
  }
  var variable_target_name = Blockly.Python.nameDB_.getName(block.getFieldValue('TARGET_NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_protocol = block.getFieldValue('PROTOCOL');
  if(dropdown_protocol == 'none'){
    var code = 'pickle.dump(' + variable_target_name + ', ' + file_obj_name + ')\n';
  }else{
    var code = 'pickle.dump(' + variable_target_name + ', ' + file_obj_name + ', ' + dropdown_protocol + ')\n';
  }
  return code;
};

Blockly.Python['pickle_load'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var file_obj_name = 'f';
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'pickle_open_load')this.unplug();
    file_obj_name = pickle_file_obj_name[getSurroundParent_block.id];
  }
  var variable_target_name = Blockly.Python.nameDB_.getName(block.getFieldValue('TARGET_NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_target_name + ' = pickle.load(' + file_obj_name + ')\n';
  return code;
};

Blockly.Python['pickle_open_dump'] = function(block) {
  pickle_file_obj_name[this.id] = Blockly.Python.nameDB_.getDistinctName('f', Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  Blockly.Python.definitions_['import_pickle'] = 'import pickle';
  var text_file_name = block.getFieldValue('FILE_NAME');
  var dropdown_mode = block.getFieldValue('MODE');
  var statements_do = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
  var code = 'with open(\'' + text_file_name + '\', ' + dropdown_mode + ') as ' + pickle_file_obj_name[this.id] + ':\n';
  code += statements_do + '\n';
  return code;
};

Blockly.Python['pickle_open_load'] = function(block) {
  pickle_file_obj_name[this.id] = Blockly.Python.nameDB_.getDistinctName('f', Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  Blockly.Python.definitions_['import_pickle'] = 'import pickle';
  var text_file_name = block.getFieldValue('FILE_NAME');
  var dropdown_mode = block.getFieldValue('MODE');
  var statements_do = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
  var code = 'with open(\'' + text_file_name + '\', ' + dropdown_mode + ') as ' + pickle_file_obj_name[this.id] + ':\n';
  code += statements_do + '\n';
  return code;
};