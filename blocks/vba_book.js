
Blockly.defineBlocksWithJsonArray(
[
  {
    "type": "book_workbooks",
    "message0": "すべてのブック",
    "output": [
      "books",
      "Array"
    ],
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_thisworkbook",
    "message0": "このブック",
    "output": "book",
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_thisworkbook_sheet",
    "message0": "このブックの %1",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_SHEETS_SHEET",
        "check": [
          "sheets",
          "sheet"
        ]
      }
    ],
    "output": [
      "sheets",
      "sheet",
      "range"
    ],
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_activeworkbook",
    "message0": "アクティブブック",
    "output": "book",
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_activeworkbook_sheet",
    "message0": "アクティブブックの %1",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_SHEETS_SHEET",
        "check": [
          "sheets",
          "sheet"
        ]
      }
    ],
    "output": [
      "sheets",
      "sheet",
      "range"
    ],
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_var_sheet",
    "message0": "%1 の %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_BOOK",
        "variable": "wb",
        "variableTypes": ["Workbook"],
        "defaultType": "Workbook"  
      },
      {
        "type": "input_value",
        "name": "OBJECT_SHEETS_SHEET",
        "check": [
          "sheets",
          "sheet"
        ]
      }
    ],
    "output": [
      "sheets",
      "sheet",
      "range"
    ],
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_var_set",
    "message0": "%1 に %2 をセット",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR_BOOK",
        "variable": "wb",
        "variableTypes": ["Workbook"],
        "defaultType": "Workbook"  
      },
      {
        "type": "input_value",
        "name": "OBJECT_BOOK",
        "check": "book"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_var_get",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT_BOOK",
        "variable": "wb",
        "variableTypes": ["Workbook"],
        "defaultType": "Workbook"  
      }
    ],
    "output": "book",
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "book_workbook",
    "message0": "ブック名： %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOKNAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": "book",
    "colour": "#478d47",
    "tooltip": "",
    "helpUrl": ""
  }
]);