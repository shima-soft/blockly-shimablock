
Blockly.defineBlocksWithJsonArray(
  [
  {
  "type": "cell_cells",
  "message0": "行 %1 列 %2 のセル",
  "args0": [
    {
      "type": "input_value",
      "name": "ROW",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "COL",
      "check": [
        "Number",
        "String"
      ]
    }
  ],
  "inputsInline": true,
  "output": [
    "range",
    "String",
    "Number"
  ],
  "colour": "#72b872",
  "tooltip": "",
  "helpUrl": ""
  },
  {
    "type": "cell_range",
    "message0": "%1 のセル",
    "args0": [
      {
        "type": "field_input",
        "name": "RANGE",
        "text": "A1"
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "Number",
      "String"
    ],
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_range_start_end",
    "message0": "%1 から %2 までのセル",
    "args0": [
      {
        "type": "input_value",
        "name": "START_RANGE",
        "check": [
          "range",
          "String"
        ]
      },
      {
        "type": "input_value",
        "name": "END_RANGE",
        "check": [
          "range",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "String",
      "Number"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_columns",
    "message0": "%1 列目のセル",
    "args0": [
      {
        "type": "input_value",
        "name": "COL",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "columns"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_rows",
    "message0": "%1 行目のセル",
    "args0": [
      {
        "type": "input_value",
        "name": "ROW"
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "rows"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_sheet_cells",
    "message0": "%1 の 行 %2 列 %3 のセル",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_SHEET",
        "check": "sheet"
      },
      {
        "type": "input_value",
        "name": "ROW",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "COL",
        "check": [
          "Number",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "String",
      "Number"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_sheet_range",
    "message0": "%1 の %2 のセル",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_SHEET",
        "check": "sheet"
      },
      {
        "type": "field_input",
        "name": "RANGE",
        "text": "A1"
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "Number",
      "String"
    ],
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_sheet_range_start_end",
    "message0": "%1 の %2 から %3 までのセル",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_SHEET"
      },
      {
        "type": "input_value",
        "name": "START_RANGE",
        "check": [
          "range",
          "String"
        ]
      },
      {
        "type": "input_value",
        "name": "END_RANGE",
        "check": [
          "range",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "String",
      "Number"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_selection",
    "message0": "選択セル",
    "inputsInline": true,
    "output": "range",
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_sheet_selection",
    "message0": "%1 の 選択セル",
    "args0": [
      {
        "type": "input_value",
        "name": "OBJECT_SHEET",
        "check": "sheet"
      }
    ],
    "inputsInline": true,
    "output": "range",
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_rows_start_end",
    "message0": "%1 から %2 行までのセル",
    "args0": [
      {
        "type": "input_value",
        "name": "START_RANGE",
        "check": [
          "range",
          "Number"
        ]
      },
      {
        "type": "input_value",
        "name": "END_RANGE",
        "check": [
          "range",
          "Number"
        ]
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "rows"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cell_columns_start_end",
    "message0": "%1 から %2 列までのセル",
    "args0": [
      {
        "type": "input_value",
        "name": "START_RANGE",
        "check": [
          "range",
          "Number",
          "String"
        ]
      },
      {
        "type": "input_value",
        "name": "END_RANGE",
        "check": [
          "range",
          "Number",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "output": [
      "range",
      "columns"
    ],
    "colour": "#72b872",
    "tooltip": "",
    "helpUrl": ""
  }
]
);