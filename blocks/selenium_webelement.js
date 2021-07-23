Blockly.defineBlocksWithJsonArray(
  [{
    "type": "element_var_set",
    "message0": "%1 %2 に %3 をセット",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
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
        "name": "OBJECT_NAME",
        "variable": "element"
      }
    ],
    "output": "element",
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "element_get",
    "message0": "%1 から %2 %3 の値を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "属性:",
            ".get_attribute"
          ],
          [
            "HTML属性:",
            ".get_dom_attribute"
          ],
          [
            "HTMLプロパティ:",
            ".get_property"
          ],
          [
            "CSSプロパティ:",
            ".value_of_css_property"
          ]
        ]
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
    "type": "element_get_arg0",
    "message0": "%1 から %2 を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
      },
      {
        "type": "field_dropdown",
        "name": "PROPERTY",
        "options": [
          [
            "テキスト",
            ".text"
          ],
          [
            "タグ名",
            ".tag_name"
          ],
          [
            "サイズと場所",
            ".rect"
          ],
          [
            "サイズ",
            ".size"
          ],
          [
            "ID",
            ".id"
          ],
          [
            "場所",
            ".location"
          ],
          [
            "参照元(WebDriver)",
            ".parent"
          ],
          [
            "場所までスクロールした表示画面",
            ".location_once_scrolled_into_view"
          ],
          [
            "スクリーンショットをBase64でエンコードした文字列",
            ".screenshot_as_base64"
          ],
          [
            "スクリーンショットのバイナリデータ",
            ".screenshot_as_png"
          ],
          [
            "ARIALavel",
            ".accessible_name"
          ],
          [
            "ARIArole",
            ".aria_role"
          ]
        ]
      }
    ],
    "output": [
      "Number",
      "Boolean",
      "String",
      "browser"
    ],
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "element_get_find_element_by",
    "message0": "%1 から %2 %3 の最初の要素を取得",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
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
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
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
    "type": "element_is",
    "message0": "%1 の %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
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
  },
  {
    "type": "element_method",
    "message0": "%1 を %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
      },
      {
        "type": "field_dropdown",
        "name": "METHOD",
        "options": [
          [
            "クリック",
            ".click()"
          ],
          [
            "フォーム送信",
            ".submit()"
          ],
          [
            "クリア",
            ".clear()"
          ]
        ]
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
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
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
    "type": "element_method_screenshot",
    "message0": "%1 のスクリーンショットを %2 にPNG画像ファイルで保存",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_NAME",
        "variable": "element"
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
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  }]
);