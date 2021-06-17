Blockly.defineBlocksWithJsonArray(
[{
  "type": "browser_var_set",
  "message0": "%1 %2 に %3 をセット",
  "args0": [
    {
      "type": "field_variable",
      "name": "BROWSER_OBJECT_NAME",
      "variable": "browser",
      "variableTypes": ["browser"],
      "defaultType": "browser"  

    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "BROWSER_NAME",
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
  "type": "browser_var_get",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "BROWSER_OBJECT_NAME",
      "variable": "browser",
      "variableTypes": ["browser"],
      "defaultType": "browser"
    }
  ],
  "output": "browser",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_var_set",
  "message0": "%1 %2 に %3 をセット",
  "args0": [
    {
      "type": "field_variable",
      "name": "ELEMENT_OBJECT_NAME",
      "variable": "element",
      "variableTypes": ["element"],
      "defaultType": "element"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "element"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_var_get",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "ELEMENT_OBJECT_NAME",
      "variable": "element",
      "variableTypes": ["element"],
      "defaultType": "element"
    }
  ],
  "output": "element",
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "browser_get",
  "message0": "%1 の %2",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
    },
    {
      "type": "field_dropdown",
      "name": "PROPERTY",
      "options": [
        [
          "URLを取得",
          ".current_url"
        ],
        [
          "タイトルを取得",
          ".title"
        ],
        [
          "ページソースを取得",
          ".page_source"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "browser_get_find_element_by",
  "message0": "%1 から %2 %3 の最初の要素を取得",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
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
  "type": "browser_get_find_elements_by",
  "message0": "%1 から %2 %3 の全ての要素を取得",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
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
  "type": "browser_method",
  "message0": "%1 を %2",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
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
          "閉じる",
          ".close()"
        ],
        [
          "セッション開始",
          ".start_client()"
        ],
        [
          "セッション終了",
          ".stop_client( )"
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
  "type": "browser_method_get",
  "message0": "%1 でURL: %2 を開く",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
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
  "type": "browser_set_window_size",
  "message0": "ウィンドウサイズを設定する %1 ブラウザ型変数: %2 幅: %3 高さ: %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser",
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
  "type": "browser_set_window_position",
  "message0": "ウィンドウ位置を設定する %1 ブラウザ型変数: %2 縦位置: %3 横位置: %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser",
      "align": "RIGHT"
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
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "browser_set_script_timeout",
  "message0": "%1 の スクリプト待機時間を %2 秒に設定する",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
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
  "type": "browser_set_page_load_timeout",
  "message0": "%1 の ページ読み込み完了の待機時間を %2 秒に設定する",
  "args0": [
    {
      "type": "input_value",
      "name": "BROWSER_OBJECT_NAME",
      "check": "browser"
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
  "type": "element_get_find_element_by",
  "message0": "%1 から %2 %3 の最初の要素を取得",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
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
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_get_find_elements_by",
  "message0": "%1 から %2 %3 の全ての要素を取得",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
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
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_get_text",
  "message0": "%1 の テキストを取得",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
    }
  ],
  "output": "String",
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_get_attribute",
  "message0": "%1 の属性: %2 の値を取得",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
    },
    {
      "type": "input_value",
      "name": "ATTRIBUTE_VALUE",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_method_click",
  "message0": "%1 をクリック",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_method_send_keys",
  "message0": "%1 に %2 を入力",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
    },
    {
      "type": "input_value",
      "name": "INPUT_TEXT",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "element_is",
  "message0": "%1 の %2",
  "args0": [
    {
      "type": "input_value",
      "name": "ELEMENT_OBJECT_NAME",
      "check": "element"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "表示・非表示を返す",
          ".is_displayed()"
        ],
        [
          "有効・無効を返す",
          ".is_enabled()"
        ],
        [
          "選択・未選択を返す",
          ".is_selected()"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
}]
);