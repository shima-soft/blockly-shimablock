
Blockly.defineBlocksWithJsonArray(
  [{
    "type": "excel_calculation",
    "message0": "数式再計算を %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONF",
        "options": [
          [
            "自動",
            "xlCalculationAutomatic"
          ],
          [
            "手動",
            "xlCalculationManual"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "excel_screenupdating",
    "message0": "画面更新を %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONF",
        "options": [
          [
            "有効",
            "True"
          ],
          [
            "無効",
            "False"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "excel_displayalerts",
    "message0": "確認メッセージを %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONF",
        "options": [
          [
            "表示",
            "True"
          ],
          [
            "非表示",
            "False"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "excel_statusbar_false",
    "message0": "ステータスバーを非表示",
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "excel_debug_print",
    "message0": "%1 をイミディエイトウィンドウに出力",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_ITEM"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "excel_statusbar",
    "message0": "%1 をステータスバーに表示",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_ITEM"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "excel_start",
    "message0": "スタート",
    "inputsInline": true,
    "nextStatement": null,
    "colour": "#ffaa55",
    "tooltip": "",
    "helpUrl": ""
  }
]
);