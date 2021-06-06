
Blockly.defineBlocksWithJsonArray(
  [{
    "type": "get_name",
    "message0": "%1 の名前を取得",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": [
          "book",
          "sheet",
          "range"
        ]
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": "#8daac7",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_end_row",
    "message0": "%1 列目の値がある最終行数",
    "args0": [
      {
        "type": "input_value",
        "name": "COL",
        "check": [
          "String",
          "Number",
          "range"
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#8daac7",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_end_col",
    "message0": "%1 行目の値がある最終列数",
    "args0": [
      {
        "type": "input_value",
        "name": "ROW",
        "check": [
          "Number",
          "range"
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#8daac7",
    "tooltip": "",
    "helpUrl": ""
  }]
);