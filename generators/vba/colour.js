
'use strict';

goog.provide('Blockly.VBA.colour');

goog.require('Blockly.VBA');


Blockly.VBA['colour_picker'] = function(block) {
  // Colour picker.
  var code = Blockly.VBA.quote_(block.getFieldValue('COLOUR'));
  return [code, Blockly.VBA.ORDER_ATOMIC];
};

Blockly.VBA['colour_random'] = function(block) {
  // Generate a random colour.
  var functionName = Blockly.VBA.provideFunction_(
      'colourRandom',
      ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ + '() {',
        '  var num = Math.floor(Math.random() * Math.pow(2, 24));',
        '  return \'#\' + (\'00000\' + num.toString(16)).substr(-6);',
        '}']);
  var code = functionName + '()';
  return [code, Blockly.VBA.ORDER_FUNCTION_CALL];
};

Blockly.VBA['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var red = Blockly.VBA.valueToCode(block, 'RED',
      Blockly.VBA.ORDER_NONE) || 0;
  var green = Blockly.VBA.valueToCode(block, 'GREEN',
      Blockly.VBA.ORDER_NONE) || 0;
  var blue = Blockly.VBA.valueToCode(block, 'BLUE',
      Blockly.VBA.ORDER_NONE) || 0;
  var functionName = Blockly.VBA.provideFunction_(
      'colourRgb',
      ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
          '(r, g, b) {',
       '  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;',
       '  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;',
       '  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;',
       '  r = (\'0\' + (Math.round(r) || 0).toString(16)).slice(-2);',
       '  g = (\'0\' + (Math.round(g) || 0).toString(16)).slice(-2);',
       '  b = (\'0\' + (Math.round(b) || 0).toString(16)).slice(-2);',
       '  return \'#\' + r + g + b;',
       '}']);
  var code = functionName + '(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.VBA.ORDER_FUNCTION_CALL];
};

Blockly.VBA['colour_blend'] = function(block) {
  // Blend two colours together.
  var c1 = Blockly.VBA.valueToCode(block, 'COLOUR1',
      Blockly.VBA.ORDER_NONE) || '\'#000000\'';
  var c2 = Blockly.VBA.valueToCode(block, 'COLOUR2',
      Blockly.VBA.ORDER_NONE) || '\'#000000\'';
  var ratio = Blockly.VBA.valueToCode(block, 'RATIO',
      Blockly.VBA.ORDER_NONE) || 0.5;
  var functionName = Blockly.VBA.provideFunction_(
      'colourBlend',
      ['function ' + Blockly.VBA.FUNCTION_NAME_PLACEHOLDER_ +
          '(c1, c2, ratio) {',
       '  ratio = Math.max(Math.min(Number(ratio), 1), 0);',
       '  var r1 = parseInt(c1.substring(1, 3), 16);',
       '  var g1 = parseInt(c1.substring(3, 5), 16);',
       '  var b1 = parseInt(c1.substring(5, 7), 16);',
       '  var r2 = parseInt(c2.substring(1, 3), 16);',
       '  var g2 = parseInt(c2.substring(3, 5), 16);',
       '  var b2 = parseInt(c2.substring(5, 7), 16);',
       '  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);',
       '  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);',
       '  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);',
       '  r = (\'0\' + (r || 0).toString(16)).slice(-2);',
       '  g = (\'0\' + (g || 0).toString(16)).slice(-2);',
       '  b = (\'0\' + (b || 0).toString(16)).slice(-2);',
       '  return \'#\' + r + g + b;',
       '}']);
  var code = functionName + '(' + c1 + ', ' + c2 + ', ' + ratio + ')';
  return [code, Blockly.VBA.ORDER_FUNCTION_CALL];
};
