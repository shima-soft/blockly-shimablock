
Blockly.defineBlocksWithJsonArray(
  [{
    "type": "set_name",
    "message0": "%1 の名前を %2 に設定",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": [
          "sheet",
          "range"
        ]
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#7295b8",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "set_open",
    "message0": "Excelファイルを開き、ブック変数： %1 にセット %2 ファイル名： %3 %4 アクセス設定： %5",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "wb",
        "variableTypes": ["Workbook"],
        "defaultType": "Workbook"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "FILE_NAME",
        "text": "C:\\Book1.xlsx"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "READ_ONLY",
        "options": [
          [
            "読み取り",
            "ReadOnly:=True"
          ],
          [
            "編集可能",
            "ReadOnly:=False"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#7295b8",
    "tooltip": "",
    "helpUrl": ""
  }
]
);