
Blockly.defineBlocksWithJsonArray(
  [{
    "type": "py_func_open_text",
    "message0": "テキストファイルを開く(自動クローズ) %1 ファイルパス： %2 モード： %3 %4 エンコード： %5 %6 %7",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "PATH",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "指定なし",
            "none"
          ],
          [
            "rt 読み取り用(既存データ：影響なし、位置：先頭)(既定)",
            "rt"
          ],
          [
            "wt 書き込み用(既存データ：削除する、位置：先頭)",
            "wt"
          ],
          [
            "at 書き込み用(既存データ：削除しない、位置：末尾)",
            "at"
          ],
          [
            "xt 書き込み＆新規作成(既存データ：影響なし、位置：先頭)",
            "xt"
          ],
          [
            "r+t 読み書き用(既存データ：削除しない、位置：先頭)",
            "r+t"
          ],
          [
            "w+t 読み書き用(既存データ：削除する、位置：先頭)",
            "w+t"
          ],
          [
            "a+t 読み書き用(既存データ：削除しない、位置：末尾)",
            "a+t"
          ],
          [
            "x+t 読み書き＆新規作成(既存データ：影響なし、位置：先頭)",
            "x+t"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "ENCODING",
        "options": [
          [
            "指定なし",
            "none"
          ],
          [
            "cp932",
            "cp932"
          ],
          [
            "euc_jp",
            "euc_jp"
          ],
          [
            "iso2022_jp",
            "iso2022_jp"
          ],
          [
            "shift_jis",
            "shift_jis"
          ],
          [
            "utf_8",
            "utf_8"
          ],
          [
            "utf_16",
            "utf_16"
          ],
          [
            "utf_32",
            "utf_32"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "py_func_open_read",
    "message0": "%1 変数に全行読み込む",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "all_line"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "py_func_open_readline",
    "message0": "%1 変数に1行読み込む",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "line"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "py_func_open_readlines",
    "message0": "%1 リストに全行読み込む",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "line_list"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "py_func_open_write",
    "message0": "%1 文字列(変数)を書き込む",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "py_func_open_writelines",
    "message0": "%1 リストを書き込む",
    "args0": [
      {
        "type": "field_variable",
        "name": "LIST",
        "variable": "line_list"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "py_dir",
    "message0": "%1 の属性・名前を返す",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_NAME"
      }
    ],
    "output": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  }]
  );