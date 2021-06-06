
Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "browser_find_element_by_class_name",
      "message0": "%1 からClass: %2 の要素を取得",
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
      "output": "element",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "browser_find_element_by_id",
      "message0": "%1 からid: %2 の要素を取得",
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
      "output": "element",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "browser_find_element_by_xpath",
      "message0": "%1 からxpath: %2 の要素を取得",
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
      "output": "element",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "browser_current_url",
      "message0": "%1 現在のURL",
      "args0": [
        {
          "type": "input_value",
          "name": "BROWSER_OBJECT_NAME",
          "check": "browser"
        }
      ],
      "output": "String",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "browser_title",
      "message0": "%1 現在のタイトル",
      "args0": [
        {
          "type": "input_value",
          "name": "BROWSER_OBJECT_NAME",
          "check": "browser"
        }
      ],
      "output": "String",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "browser_page_source",
      "message0": "%1 のページソース",
      "args0": [
        {
          "type": "input_value",
          "name": "BROWSER_OBJECT_NAME",
          "check": "browser"
        }
      ],
      "output": "String",
      "colour": 230,
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
              "back()"
            ],
            [
              "進む",
              "forward()"
            ],
            [
              "更新",
              "refresh()"
            ],
            [
              "最大化",
              "maximize_window()"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "element_click",
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
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "element_send_keys",
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
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "element_text",
      "message0": "%1 のテキスト",
      "args0": [
        {
          "type": "input_value",
          "name": "ELEMENT_OBJECT_NAME",
          "check": "element"
        }
      ],
      "output": "String",
      "colour": 230,
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
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "element_is_displayed",
      "message0": "%1 の表示・非表示を返す",
      "args0": [
        {
          "type": "input_value",
          "name": "ELEMENT_OBJECT_NAME",
          "check": "element"
        }
      ],
      "output": "Boolean",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "element_is_enabled",
      "message0": "%1 が有効か無効かを返す",
      "args0": [
        {
          "type": "input_value",
          "name": "ELEMENT_OBJECT_NAME",
          "check": "element"
        }
      ],
      "output": "Boolean",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "element_is_selected",
      "message0": "%1 の選択・未選択を返す",
      "args0": [
        {
          "type": "input_value",
          "name": "ELEMENT_OBJECT_NAME",
          "check": "element"
        }
      ],
      "output": "Boolean",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "browser_get",
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
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
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
      "colour": 230,
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
      "colour": 230,
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
      "colour": 230,
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
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);