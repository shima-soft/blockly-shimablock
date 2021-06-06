
Blockly.defineBlocksWithJsonArray(
  [{
    "type": "method_activate",
    "message0": "%1 をアクティブ",
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
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_select",
    "message0": "%1 を選択",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": [
          "sheet",
          "range"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_copy_paste",
    "message0": "セルの値をコピー %1 コピー元： %2 貼り付け先： %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "COPY_RANGE",
        "check": "range",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "PASTE_RANGE",
        "check": "range",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_copy",
    "message0": "%1 をコピー",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": [
          "sheet",
          "range"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_clearcontents",
    "message0": "%1 をクリア(値のみ)",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "range"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_clear",
    "message0": "%1 をクリア(全て)",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "range"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_delete",
    "message0": "%1 を削除",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": [
          "sheet",
          "range"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_name",
    "message0": "%1 の名前を %2 に設定",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": [
          "book",
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
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_open",
    "message0": "%1 を %2 %3 で開いて、 %4 にセット",
    "args0": [
      {
        "type": "field_input",
        "name": "FILE_NAME",
        "text": "ファイル名(フルパス)"
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
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "ブック型オブジェクト"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_close",
    "message0": "%1 を閉じる",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "book"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_book",
    "message0": "%1 を %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "book"
      },
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "アクティブ",
            ".Activate"
          ],
          [
            "保存",
            ".Save"
          ],  
          [
            "閉じる",
            ".Close"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_sheet",
    "message0": "%1 を %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "sheet"
      },
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "アクティブ",
            ".Activate"
          ],
          [
            "選択",
            ".Select"
          ],
          [
            "コピー",
            ".Copy"
          ],
          [
            "貼り付け",
            ".Paste"
          ],
          [
            "削除",
            ".Delete"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_cell",
    "message0": "%1 を %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "range"
      },
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "アクティブ",
            ".Activate"
          ],
          [
            "選択",
            ".Select"
          ],
          [
            "コピー",
            ".Copy"
          ],
          [
            "クリア(値のみ)",
            ".ClearContents"
          ],
          [
            "クリア(全て)",
            ".Clear"
          ],
          [
            "削除",
            ".Delete"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_pastespecial",
    "message0": "形式を選択して貼り付け %1 貼り付け先セル： %2 貼り付け対象： %3 %4 演算方法： %5 %6 空白セル： %7 %8 行/列の入れ替え： %9",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "range",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "PASTE",
        "options": [
          [
            "指定なし",
            ""
          ],
          [
            "すべて(既定)",
            "Paste:=xlPasteAll"
          ],
          [
            "数式",
            "Paste:=xlPasteFormulas"
          ],
          [
            "値",
            "Paste:=xlPasteValues"
          ],
          [
            "書式",
            "Paste:=xlPasteFormats"
          ],
          [
            "コメント",
            "Paste:=xlPasteComments"
          ],
          [
            "入力規則",
            "Paste:=xlPasteValidation"
          ],
          [
            "罫線を除く全て",
            "Paste:=xlPasteAllExceptBorders"
          ],
          [
            "列幅",
            "Paste:=xlPasteColumnWidths"
          ],
          [
            "数式と数値の書式\t",
            "Paste:=xlPasteFormulasAndNumberFormats"
          ],
          [
            "値と数値の書式\t",
            "Paste:=xlPasteValuesAndNumberFormats"
          ],
          [
            "コピー元のテーマを使用してすべて貼り付け",
            "Paste:=xlPasteAllUsingSourceTheme"
          ],
          [
            "すべての結合されている条件付き書式\t",
            "Paste:=xlPasteAllMergingConditionalFormats"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "OPERATION",
        "options": [
          [
            "指定なし",
            ""
          ],
          [
            "しない(既定)",
            "Operation:=xlPasteSpecialOperationNone"
          ],
          [
            "加算",
            "Operation:=xlPasteSpecialOperationAdd"
          ],
          [
            "減算",
            "Operation:=xlPasteSpecialOperationSubtract"
          ],
          [
            "乗算",
            "Operation:=xlPasteSpecialOperationMultiply"
          ],
          [
            "除算",
            "Operation:=xlPasteSpecialOperationDivide"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "SKIPBLANKS",
        "options": [
          [
            "指定なし",
            ""
          ],
          [
            "無視する",
            "SkipBlanks:=True"
          ],
          [
            "無視しない(既定)",
            "SkipBlanks:=False"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "TRANSPOSE",
        "options": [
          [
            "指定なし",
            ""
          ],
          [
            "入れ替える",
            "Transpose:=True"
          ],
          [
            "入れ替えない(既定)",
            "Transpose:=False"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_copy_paste2",
    "message0": "セルをコピー %1 コピー元： %2 貼り付け先： %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "COPY_RANGE",
        "check": "range",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "PASTE_RANGE",
        "check": "range",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "method_book_saveas",
    "message0": "名前を付けて保存 %1 保存対象ブック： %2 ファイル名： %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TARGET_OBJECT",
        "check": "book",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "FILENAME",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5580aa",
    "tooltip": "",
    "helpUrl": ""
  }
]
);