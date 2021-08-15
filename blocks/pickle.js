Blockly.defineBlocksWithJsonArray(
  [{
    "type": "pickle_dump",
    "lastDummyAlign0": "RIGHT",
    "message0": "変数をpickle化し、ファイル保存 %1 ファイル名: %2 %3 変数: %4 %5 モード: %6 %7 プロトコル： %8",
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
        "type": "field_variable",
        "name": "TARGET_NAME",
        "variable": "data"
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
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pickle_load",
    "lastDummyAlign0": "RIGHT",
    "message0": "pickleファイルを読み込む %1 ファイル名: %2 %3 変数: %4 %5 モード: %6",
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
        "type": "field_variable",
        "name": "TARGET_NAME",
        "variable": "data"
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