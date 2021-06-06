Blockly.defineBlocksWithJsonArray([
  {
    "type": "controls_forEach_workbooks",
    "message0": "%2 の各ブック %1 について",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "wb",
        "variableTypes": ["Workbook"],
        "defaultType": "Workbook"  
      },
      {
        "type": "input_value",
        "name": "LIST",
        "check": "books"
      }
    ],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "tooltip": "すべてのブックの各ブックについて、そのブックを変数として、指定した処理を実行します。",
    "helpUrl": "%{BKY_CONTROLS_FOREACH_HELPURL}"
  },
  {
    "type": "controls_forEach_worksheets",
    "message0": "%2 の各シート %1 について",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "ws",
        "variableTypes": ["Worksheet"],
        "defaultType": "Worksheet"  
      },
      {
        "type": "input_value",
        "name": "LIST",
        "check": "sheets"
      }
    ],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "tooltip": "すべてのシートの各シートについて、そのシートを変数として、指定した処理を実行します。",
    "helpUrl": ""
  },
]);