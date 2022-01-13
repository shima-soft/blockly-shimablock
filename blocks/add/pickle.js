Blockly.defineBlocksWithJsonArray(
  [{
    "type": "pickle_dump",
    "lastDummyAlign0": "RIGHT",
    "message0": "pickleファイルに %1 を保存 %2 プロトコル： %3",
    "args0": [
      {
        "type": "field_variable",
        "name": "TARGET_NAME",
        "variable": "data"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "PROTOCOL",
        "options": [
          [
            "指定なし",
            "none"
          ],
          [
            "デフォルトバージョン",
            "pickle.DEFAULT_PROTOCOL"
          ],
          [
            "0",
            "protocol=0"
          ],
          [
            "1",
            "protocol=1"
          ],
          [
            "2",
            "protocol=2"
          ],
          [
            "3",
            "protocol=3"
          ],
          [
            "4",
            "protocol=4"
          ],
          [
            "最高バージョン",
            "pickle.HIGHEST_PROTOCOL"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "previousStatement": "pickle_dump",
    "nextStatement": "pickle_dump",
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pickle_load",
    "message0": "pickleファイルから %1 に読み込む",
    "args0": [
      {
        "type": "field_variable",
        "name": "TARGET_NAME",
        "variable": "data"
      }
    ],
    "previousStatement": "pickle_load",
    "nextStatement": "pickle_load",
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pickle_open_dump",
    "message0": "pickleファイルを開く(オブジェクト保存用) %1 ファイル名: %2 %3 モード: %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "FILE_NAME",
        "text": "data.pickle"
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "バイナリ",
            "'wb'"
          ],
          [
            "テキスト",
            "'wt'"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "DO",
        "check": "pickle_dump"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pickle_open_load",
    "message0": "pickleファイルを開く(オブジェクト読み込み用) %1 ファイル名: %2 %3 モード: %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "FILE_NAME",
        "text": "data.pickle"
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "バイナリ",
            "'rb'"
          ],
          [
            "テキスト",
            "'r'"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "DO",
        "check": "pickle_load"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  }]
  );