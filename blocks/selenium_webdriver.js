Blockly.defineBlocksWithJsonArray(
  [{
    "type": "driver_var_set",
    "message0": "%1 %2 に %3 をセット",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"    
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "driver_NAME",
        "options": [
          [
            "Chromeドライバ",
            "Chrome"
          ],
          [
            "Edgeドライバ",
            "Edge"
          ],
          [
            "Firefoxドライバ",
            "Firefox"
          ],
          [
            "Operaドライバ",
            "Opera"
          ],
          [
            "IEドライバ",
            "Ie"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get",
    "message0": "%1 から %2 を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "URL",
            ".current_url"
          ],
          [
            "タイトル",
            ".title"
          ],
          [
            "ページソース",
            ".page_source"
          ],
          [
            "ウィンドウ位置",
            ".get_window_position()"
          ],
          [
            "ウィンドウサイズ",
            ".get_window_size()"
          ],
          [
            "ウィンドウ位置とサイズ",
            ".get_window_rect()"
          ],
          [
            "ブラウザ名",
            ".name"
          ],
          [
            "現在のウィンドウハンドル",
            ".current_window_handle"
          ],
          [
            "全てのウィンドウハンドル",
            ".window_handles"
          ]
        ]
      }
    ],
    "output": [
      "String",
      "Array"
    ],
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_cookie",
    "message0": "%1 から名前: %2 の クッキーを配列で取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "output": "Array",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_cookies",
    "message0": "%1 から全てのクッキーを配列で取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      }
    ],
    "output": "Array",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_find_element_by",
    "message0": "%1 から %2 %3 の最初の element を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "ID名:",
            "id"
          ],
          [
            "name:",
            "name"
          ],
          [
            "クラス名:",
            "class_name"
          ],
          [
            "リンク名:",
            "link_text"
          ],
          [
            "一部のリンク名:",
            "partial_link_text"
          ],
          [
            "タグ名:",
            "tag_name"
          ],
          [
            "CSSセレクタ:",
            "css_selector"
          ],
          [
            "XPath:",
            "xpath"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": "element",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_find_elements_by",
    "message0": "%1 から %2 %3 の全ての element を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "ID名:",
            "id"
          ],
          [
            "name:",
            "name"
          ],
          [
            "クラス名:",
            "class_name"
          ],
          [
            "リンク名:",
            "link_text"
          ],
          [
            "一部のリンク名:",
            "partial_link_text"
          ],
          [
            "タグ名:",
            "tag_name"
          ],
          [
            "CSSセレクタ:",
            "css_selector"
          ],
          [
            "XPath:",
            "xpath"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": [
      "elements",
      "Array"
    ],
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_screenshot_as_xxx",
    "message0": "%1 のスクリーンショットを %2 %3 で取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "png",
            ".get_screenshot_as_png()"
          ],
          [
            "base64",
            ".get_screenshot_as_base64()"
          ]
        ]
      },
      {
        "type": "input_dummy"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_switch_to_active_element",
    "message0": "%1 のアクティブな element を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      }
    ],
    "inputsInline": true,
    "output": "element",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_get_switch_to_alert",
    "message0": "%1 のアクティブなアラートを取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      }
    ],
    "inputsInline": true,
    "output": "alert",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method",
    "message0": "%1 で %2 を行う",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "戻る",
            ".back()"
          ],
          [
            "進む",
            ".forward()"
          ],
          [
            "更新",
            ".refresh()"
          ],
          [
            "最小化",
            ".minimize_window()"
          ],
          [
            "最大化",
            ".maximize_window()"
          ],
          [
            "全画面表示",
            ".fullscreen_window()"
          ],
          [
            "セッション開始",
            ".start_session()"
          ],
          [
            "閉じる",
            ".close()"
          ],
          [
            "終了",
            ".quit()"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_add_cookie",
    "message0": "%1 に名前: %2 値: %3 のクッキーを追加",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_delete_cookie",
    "message0": "%1 から名前: %2 のクッキーを削除",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_delete_all_cookies",
    "message0": "%1 の全てのクッキーを削除",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_execute_script",
    "message0": "%1 でJavaScript: %2 %3 を実行",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "JAVASCRIPT",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_get",
    "message0": "%1 でURL: %2 を開く",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_get_screenshot_as_file",
    "message0": "%1 のスクリーンショットをファイル名: %2 %3 で保存",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FILENAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_set_window_size",
    "message0": "%1 のウィンドウサイズを %2 幅: %3 高さ: %4 に設定",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "WIDTH",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "HEIGHT",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_set_window_position",
    "message0": "%1 のウィンドウ位置を %2 縦: %3 横: %4 に設定",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_set_window_rect",
    "message0": "%1 のウィンドウ位置とサイズを設定 %2 縦位置: %3 横位置: %4 幅: %5 高さ: %6",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "WIDTH",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "HEIGHT",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_set_implicitly_wait",
    "message0": "%1 の要素が見つかるまでの待機時間を %2 %3 秒に設定",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "SEC",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_set_page_load_timeout",
    "message0": "%1 のページ読み込み完了の待機時間を %2 秒に設定",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_value",
        "name": "TIMEOUT_SECOND",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_set_script_timeout",
    "message0": "%1 のスクリプト待機時間を %2 秒に設定",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver",
        "variableTypes": ["driver"],
        "defaultType": "driver"
      },
      {
        "type": "input_value",
        "name": "TIMEOUT_SECOND",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "driver_method_switch_to_frame_window",
    "message0": "%1 のフォーカスを変更 %2 指定方法： %3 %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "driver"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "フレーム",
            "frame"
          ],
          [
            "ウィンドウハンドル",
            "window"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": [
          "String",
          "Number",
          "element"
        ],
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  }]
  );