
'use strict';

goog.provide('Blockly.VBA.variablesDynamic');

goog.require('Blockly.VBA');
goog.require('Blockly.VBA.variables');


// VBA is dynamically typed.
Blockly.VBA['variables_get_dynamic'] =
    Blockly.VBA['variables_get'];
Blockly.VBA['variables_set_dynamic'] =
    Blockly.VBA['variables_set'];
