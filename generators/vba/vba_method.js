Blockly.VBA['method_activate'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Activate\n';
  return code;
};

Blockly.VBA['method_select'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Select\n';
  return code;
};

Blockly.VBA['method_copy_paste'] = function(block) {
  var value_copy_range = Blockly.VBA.valueToCode(block, 'COPY_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var value_paste_range = Blockly.VBA.valueToCode(block, 'PASTE_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = value_paste_range + '.Value = ' + value_copy_range + '.Value\n';
  return code;
};

Blockly.VBA['method_copy'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Copy\n';
  return code;
};

Blockly.VBA['method_clearcontents'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.ClearContents\n';
  return code;
};

Blockly.VBA['method_clear'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Clear\n';
  return code;
};

Blockly.VBA['method_delete'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Delete\n';
  return code;
};

Blockly.VBA['method_close'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.Close\n';
  return code;
};

Blockly.VBA['method_book'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var code = value_target_object + dropdown_name + '\n';
  return code;
};

Blockly.VBA['method_sheet'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var code = value_target_object + dropdown_name + '\n';
  return code;
};

Blockly.VBA['method_cell'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var code = value_target_object + dropdown_name + '\n';
  return code;
};

Blockly.VBA['method_pastespecial'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);

var option_value = [];

  var dropdown_paste = block.getFieldValue('PASTE');
  if (dropdown_paste != "") option_value.push(dropdown_paste);
  var dropdown_operation = block.getFieldValue('OPERATION');
  if (dropdown_operation != "") option_value.push(dropdown_operation);
  var dropdown_skipblanks = block.getFieldValue('SKIPBLANKS');
  if (dropdown_skipblanks != "") option_value.push(dropdown_skipblanks);
  var dropdown_transpose = block.getFieldValue('TRANSPOSE');
  if (dropdown_transpose != "") option_value.push(dropdown_transpose);

  if (option_value.length > 0) {
    var code = value_target_object + '.PasteSpecial ' + option_value.join(", ") + '\n';
  } else {
    var code = value_target_object + '.PasteSpecial\n';
  }
  return code;
};

Blockly.VBA['method_copy_paste2'] = function(block) {
  var value_copy_range = Blockly.VBA.valueToCode(block, 'COPY_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var value_paste_range = Blockly.VBA.valueToCode(block, 'PASTE_RANGE', Blockly.VBA.ORDER_ATOMIC);
  var code = value_copy_range + '.Copy Destination:= ' + value_paste_range + '\n';
  return code;
};

Blockly.VBA['method_book_saveas'] = function(block) {
  var value_target_object = Blockly.VBA.valueToCode(block, 'TARGET_OBJECT', Blockly.VBA.ORDER_ATOMIC);
  var value_filename = Blockly.VBA.valueToCode(block, 'FILENAME', Blockly.VBA.ORDER_ATOMIC);
  var code = value_target_object + '.SaveAs Filename:=' + value_filename + '\n';
  return code;
};