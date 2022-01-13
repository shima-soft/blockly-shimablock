
'use strict';

goog.provide('Blockly.VBA.loops');

goog.require('Blockly.VBA');


Blockly.VBA['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    var repeats = Blockly.VBA.valueToCode(block, 'TIMES',
        Blockly.VBA.ORDER_NONE) || '0';
  }
  var branch = Blockly.VBA.statementToCode(block, 'DO');
  branch = Blockly.VBA.addLoopTrap(branch, block);
  var code = '';
  var loopVar = Blockly.VBA.nameDB_.getDistinctName(
      'forCount', Blockly.VARIABLE_CATEGORY_NAME);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    endVar = Blockly.VBA.nameDB_.getDistinctName(
        'repeatEnd', Blockly.VARIABLE_CATEGORY_NAME);
    code += 'Dim ' + endVar + '\n';
    code += endVar + ' = ' + repeats + '\n';
  }
  code += 'Dim ' + loopVar + '\n';
  code += 'For ' + loopVar + ' = 1 To ' + endVar + '\n' +
      branch + 'Next ' + loopVar + '\n';
  return code;
};

Blockly.VBA['controls_repeat'] =
    Blockly.VBA['controls_repeat_ext'];

Blockly.VBA['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.VBA.valueToCode(block, 'BOOL',
      until ? Blockly.VBA.ORDER_LOGICAL_NOT :
      Blockly.VBA.ORDER_NONE) || 'false';
  var branch = Blockly.VBA.statementToCode(block, 'DO');
  branch = Blockly.VBA.addLoopTrap(branch, block);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.VBA['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.VBA.valueToCode(block, 'FROM',
      Blockly.VBA.ORDER_NONE) || '0';
  var argument1 = Blockly.VBA.valueToCode(block, 'TO',
      Blockly.VBA.ORDER_NONE) || '0';
  var increment = Blockly.VBA.valueToCode(block, 'BY',
      Blockly.VBA.ORDER_NONE) || '1';
  var branch = Blockly.VBA.statementToCode(block, 'DO');
  branch = Blockly.VBA.addLoopTrap(branch, block);
  var code;
  // All arguments are simple numbers.
  var up = Number(argument0) <= Number(argument1);
  code = 'For ' + variable0 + ' = ' + argument0 + ' To ' +
      argument1 + ' Step ' + increment;
  code += '\n' + branch + 'Next ' + variable0 + '\n';
  return code;
};

Blockly.VBA['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.VBA.valueToCode(block, 'LIST',
      Blockly.VBA.ORDER_NONE) || '';
  var branch = Blockly.VBA.statementToCode(block, 'DO');
  branch = Blockly.VBA.addLoopTrap(branch, block);
  var code = '';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  var listVar = argument0;
  if (!argument0.match(/^\w+$/)) {
    listVar = Blockly.VBA.nameDB_.getDistinctName(
        variable0 + '_list', Blockly.VARIABLE_CATEGORY_NAME);
    code += 'Dim ' + listVar + '() As Variant\n';
  }
  code += 'For Each ' + variable0 + ' In ' + listVar + '\n' + branch + 'Next ' + variable0 + '\n';
  return code;
};

Blockly.VBA['controls_forEach_workbooks'] = function(block) {
  // For each loop.
  var variable0 = Blockly.VBA.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.VBA.valueToCode(block, 'LIST',
      Blockly.VBA.ORDER_NONE) || '';
  var branch = Blockly.VBA.statementToCode(block, 'DO');
  branch = Blockly.VBA.addLoopTrap(branch, block);
  var code = '';
  var listVar = argument0;
  code += 'For Each ' + variable0 + ' In ' + listVar + '\n' + branch + 'Next ' + variable0 + '\n';
  return code;
};

Blockly.VBA['controls_forEach_worksheets'] =
    Blockly.VBA['controls_forEach_workbooks'];

Blockly.VBA['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  var xfix = '';
  if (Blockly.VBA.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    xfix += Blockly.VBA.injectId(Blockly.VBA.STATEMENT_PREFIX,
        block);
  }
  if (Blockly.VBA.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the break/continue is triggered.
    xfix += Blockly.VBA.injectId(Blockly.VBA.STATEMENT_SUFFIX,
        block);
  }
  if (Blockly.VBA.STATEMENT_PREFIX) {
    var loop = Blockly.Constants.Loops
        .CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(block);
    if (loop && !loop.suppressPrefixSuffix) {
      // Inject loop's statement prefix here since the regular one at the end
      // of the loop will not get executed if 'continue' is triggered.
      // In the case of 'break', a prefix is needed due to the loop's suffix.
      xfix += Blockly.VBA.injectId(Blockly.VBA.STATEMENT_PREFIX,
          loop);
    }
  }

  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return xfix + 'break;\n';
    case 'CONTINUE':
      return xfix + 'continue;\n';
  }
  throw Error('Unknown flow statement.');
};
