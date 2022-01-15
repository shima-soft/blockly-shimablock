
Blockly.defineBlocksWithJsonArray(
[
  {
    "type": "sheet_sheets",
    "message0": "すべてのシート",
    "output": "sheets",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_activesheet",
    "message0": "アクティブシート",
    "output": [
      "Array",
      "sheet"
    ],
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_activesheet_cell",
    "message0": "アクティブシートの %1",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_RANGE",
        "check": "range"
      }
    ],
    "output":"range",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_sheet",
    "message0": "シート名： %1",
    "args0": [
      {
        "type": "field_input",
        "name": "SHEET_NAME",
        "text": "Sheet1"
      }
    ],
    "output": "sheet",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_sheet_cell",
    "message0": "シート名： %1 の %2",
    "args0": [
      {
        "type": "field_input",
        "name": "SHEET_NAME",
        "text": "Sheet1"
      },
      {
        "type": "input_value",
        "name": "OBJECT_RANGE",
        "check": "range"
      }
    ],
    "output": [
      "range"
    ],
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_var_cell",
    "message0": "%1 の %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR_SHEET",
        "variable": "ws",
        "variableTypes": ["Worksheet"],
        "defaultType": "Worksheet"  
      },
      {
        "type": "input_value",
        "name": "OBJECT_RANGE",
        "check": "range"
      }
    ],
    "inputsInline": false,
    "output": [
      "range"
    ],
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_var_set",
    "message0": "%1 に %2 をセット",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR_SHEET",
        "variable": "ws",
        "variableTypes": ["Worksheet"],
        "defaultType": "Worksheet"  
      },
      {
        "type": "input_value",
        "name": "OBJECT_SHEET",
        "check": "sheet"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_var_get",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR_SHEET",
        "variable": "ws",
        "variableTypes": ["Worksheet"],
        "defaultType": "Worksheet"  

      }
    ],
    "inputsInline": false,
    "output": "sheet",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_book_activesheet",
    "message0": "%1 の アクティブシート",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_BOOK",
        "check": "book"
      }
    ],
    "output": "sheet",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_book_sheet",
    "message0": "%1 の シート名： %2",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_BOOK",
        "check": "book"
      },
      {
        "type": "field_input",
        "name": "SHEET_NAME",
        "text": "Sheet1"
      }
    ],
    "output": "sheet",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_book_sheets",
    "message0": "%1 の すべてのシート",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_BOOK",
        "check": "book"
      }
    ],
    "output": [
      "Array",
      "sheets"
    ],
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_sheet_index",
    "message0": "%1 番目のシート",
    "args0": [
      {
        "type": "input_value",
        "name": "INDEX",
        "check": "Number"
      }
    ],
    "output": "sheet",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sheet_book_sheet_index",
    "message0": "%1 の %2 番目のシート",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_BOOK",
        "check": "book"
      },
      {
        "type": "input_value",
        "name": "INDEX",
        "check": "Number"
      }
    ],
    "output": "sheet",
    "colour": "#55aa55",
    "tooltip": "",
    "helpUrl": ""
  }
]);