var file_object_name = new Array();

Blockly.Python['py_func_open_text'] = function(block) {
  file_object_name[this.id] = Blockly.Python.nameDB_.getDistinctName('f', Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var value_path = Blockly.Python.valueToCode(block, 'PATH', Blockly.Python.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('MODE');
  var dropdown_encoding = block.getFieldValue('ENCODING');
  var statements_do = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
  var arg_array = new Array();
  arg_array.push(value_path);
  if(dropdown_mode != 'none'){
    arg_array.push(' mode=\'' + dropdown_mode + '\'')
  }
  if(dropdown_encoding != 'none'){
    arg_array.push(' encoding=\'' + dropdown_encoding +'\'')
  }
  var code = 'with open(' + arg_array.join(',') + ') as ' + file_object_name[this.id] + ':\n';
  code += statements_do + '\n';
  return code;
};

Blockly.Python['py_func_open_read'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'py_func_open_text')this.unplug();
    var code = variable_name + ' = ' + file_object_name[getSurroundParent_block.id] + '.read()\n';
  }else{
    this.unplug();
    var code = variable_name + ' = ' + 'f.read()\n';
  }
  return code;
};

Blockly.Python['py_func_open_readline'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'py_func_open_text')this.unplug();
    var code = variable_name + ' = ' + file_object_name[getSurroundParent_block.id] + '.readline()\n';
  }else{
    this.unplug();
    var code = variable_name + ' = ' + 'f.readline()\n';
  }
  return code;
};

Blockly.Python['py_func_open_readlines'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'py_func_open_text')this.unplug();
    var code = variable_name + ' = ' + file_object_name[getSurroundParent_block.id] + '.readlines()\n';
  }else{
    this.unplug();
    var code = variable_name + ' = ' + 'f.readlines()\n';
  }
  return code;
};

Blockly.Python['py_func_open_write'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'py_func_open_text')this.unplug();
    var code = file_object_name[getSurroundParent_block.id] + '.write(' + value_text + ')\n';
  }else{
    this.unplug();
    var code = 'f.write(' + value_text + ')\n';
  }
  return code;
};

Blockly.Python['py_func_open_writelines'] = function(block) {
  var getSurroundParent_block = this.getSurroundParent();
  var variable_list = Blockly.Python.nameDB_.getName(block.getFieldValue('LIST'), Blockly.Variables.NAME_TYPE);
  if(getSurroundParent_block){
    if(getSurroundParent_block.type != 'py_func_open_text')this.unplug();
    var code = file_object_name[getSurroundParent_block.id] + '.writelines(' + variable_list + ')\n';
  }else{
    this.unplug();
    var code = 'f.writelines(' + variable_list + ')\n';
  }
  return code;
};