(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/date-picker/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/date-picker/index.en-US.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/date-picker/index.en-US.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "To select or input a date."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "By clicking the input box, you can select a date from a popup calendar."
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Entry",
    "title": "DatePicker",
    "filename": "components/date-picker/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#When-To-Use",
          "title": "When To Use"
        },
        "When To Use"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#FAQ",
          "title": "FAQ"
        },
        "FAQ"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "p",
      "There are four kinds of picker:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "DatePicker"
        ]
      ],
      [
        "li",
        [
          "p",
          "MonthPicker"
        ]
      ],
      [
        "li",
        [
          "p",
          "RangePicker"
        ]
      ],
      [
        "li",
        [
          "p",
          "WeekPicker"
        ]
      ]
    ],
    [
      "h3",
      "Localization"
    ],
    [
      "p",
      "The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/config-provider/"
        },
        "ConfigProvider"
      ],
      "."
    ],
    [
      "p",
      "If there are special needs (only modifying single component language), Please use the property: local. Example: ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"
        },
        "default"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> locale <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/es/date-picker/locale/zh_CN'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">locale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>locale<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import locale from 'antd/es/date-picker/locale/zh_CN';\n\n<DatePicker locale={locale} />;"
      ]
    ],
    [
      "p",
      [
        "strong",
        "Note:"
      ],
      " Part of locale of DatePicker, MonthPicker, RangePicker, WeekPicker is read from value. So, please set the locale of moment correctly."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'moment/locale/zh-cn'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-01-01'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />;"
      ]
    ],
    [
      "h3",
      "Common API"
    ],
    [
      "p",
      "The following APIs are shared by DatePicker, MonthPicker, RangePicker, WeekPicker."
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "allowClear"
          ],
          [
            "td",
            "Whether to show clear button"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "autoFocus"
          ],
          [
            "td",
            "get focus when component mounted"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "picker className"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "''"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "dateRender"
          ],
          [
            "td",
            "custom rendering function for date cells"
          ],
          [
            "td",
            "function(currentDate: moment, today: moment) => React.ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabled"
          ],
          [
            "td",
            "determine whether the DatePicker is disabled"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabledDate"
          ],
          [
            "td",
            "specify the date that cannot be selected"
          ],
          [
            "td",
            "(currentDate: moment) => boolean"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "dropdownClassName"
          ],
          [
            "td",
            "to customize the className of the popup calendar"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.3.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getCalendarContainer"
          ],
          [
            "td",
            "to set the container of the floating layer, while the default is to create a ",
            [
              "code",
              "div"
            ],
            " element in ",
            [
              "code",
              "body"
            ]
          ],
          [
            "td",
            "function(trigger)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "locale"
          ],
          [
            "td",
            "localization configuration"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"
              },
              "default"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mode"
          ],
          [
            "td",
            "picker panel mode（",
            [
              "a",
              {
                "title": null,
                "href": "/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?"
              },
              "Cannot select year or month anymore?"
            ]
          ],
          [
            "td",
            [
              "code",
              "time|date|month|year|decade"
            ]
          ],
          [
            "td",
            "'date'"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "open"
          ],
          [
            "td",
            "open state of picker"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "placeholder"
          ],
          [
            "td",
            "placeholder of date input"
          ],
          [
            "td",
            "string",
            "|",
            "RangePicker",
            "[",
            "]"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "popupStyle"
          ],
          [
            "td",
            "to customize the style of the popup calendar"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "{}"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "size"
          ],
          [
            "td",
            "determine the size of the input box, the height of ",
            [
              "code",
              "large"
            ],
            " and ",
            [
              "code",
              "small"
            ],
            ", are 40px and 24px respectively, while default size is 32px"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "suffixIcon"
          ],
          [
            "td",
            "The custom suffix icon"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "to customize the style of the input box"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "{}"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onOpenChange"
          ],
          [
            "td",
            "a callback function, can be executed whether the popup calendar is popped up or closed"
          ],
          [
            "td",
            "function(status)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onPanelChange"
          ],
          [
            "td",
            "callback when picker panel mode is changed"
          ],
          [
            "td",
            "function(value, mode)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.5.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Common Methods"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Name"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "blur()"
          ],
          [
            "td",
            "remove focus"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "focus()"
          ],
          [
            "td",
            "get focus"
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h3",
      "DatePicker"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "defaultValue"
          ],
          [
            "td",
            "to set default date, if start time or end time is null or undefined, the date range will be an open interval"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultPickerValue"
          ],
          [
            "td",
            "to set default picker date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.8"
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabledTime"
          ],
          [
            "td",
            "to specify the time that cannot be selected"
          ],
          [
            "td",
            "function(date)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "format"
          ],
          [
            "td",
            "to set the date format, refer to ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment.js"
            ],
            ". When an array is provided, all values are used for parsing and first value is used for formatting."
          ],
          [
            "td",
            "string ",
            "|",
            " string[]"
          ],
          [
            "td",
            "\"YYYY-MM-DD\""
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "renderExtraFooter"
          ],
          [
            "td",
            "render extra footer in panel"
          ],
          [
            "td",
            "(mode) => React.ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showTime"
          ],
          [
            "td",
            "to provide an additional time selection"
          ],
          [
            "td",
            "object",
            "|",
            "boolean"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "/components/time-picker/#API"
              },
              "TimePicker Options"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showTime.defaultValue"
          ],
          [
            "td",
            "to set default time of selected date, ",
            [
              "a",
              {
                "title": null,
                "href": "#components-date-picker-demo-disabled-date"
              },
              "demo"
            ]
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "moment()"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showToday"
          ],
          [
            "td",
            "whether to show \"Today\" button"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "value"
          ],
          [
            "td",
            "to set date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "a callback function, can be executed when the selected time is changing"
          ],
          [
            "td",
            "function(date: moment, dateString: string)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onOk"
          ],
          [
            "td",
            "callback when click ok button"
          ],
          [
            "td",
            "function()"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onPanelChange"
          ],
          [
            "td",
            "Callback function for panel changing"
          ],
          [
            "td",
            "function(value, mode)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.19.8"
          ]
        ]
      ]
    ],
    [
      "h3",
      "MonthPicker"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "defaultValue"
          ],
          [
            "td",
            "to set default date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultPickerValue"
          ],
          [
            "td",
            "to set default picker date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.8"
          ]
        ],
        [
          "tr",
          [
            "td",
            "format"
          ],
          [
            "td",
            "to set the date format, refer to ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment.js"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "\"YYYY-MM\""
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "monthCellContentRender"
          ],
          [
            "td",
            "Custom month cell content render method"
          ],
          [
            "td",
            "function(date, locale): ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "renderExtraFooter"
          ],
          [
            "td",
            "render extra footer in panel"
          ],
          [
            "td",
            "() => React.ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "value"
          ],
          [
            "td",
            "to set date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "a callback function, can be executed when the selected time is changing"
          ],
          [
            "td",
            "function(date: moment, dateString: string)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h3",
      "WeekPicker"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "defaultValue"
          ],
          [
            "td",
            "to set default date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultPickerValue"
          ],
          [
            "td",
            "to set default picker date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.8"
          ]
        ],
        [
          "tr",
          [
            "td",
            "format"
          ],
          [
            "td",
            "to set the date format, refer to ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment.js"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "\"YYYY-wo\""
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "value"
          ],
          [
            "td",
            "to set date"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "a callback function, can be executed when the selected time is changing"
          ],
          [
            "td",
            "function(date: moment, dateString: string)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "renderExtraFooter"
          ],
          [
            "td",
            "render extra footer in panel"
          ],
          [
            "td",
            "(mode) => React.ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.12.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "RangePicker"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "defaultValue"
          ],
          [
            "td",
            "to set default date"
          ],
          [
            "td",
            "[",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            ", ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "]"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultPickerValue"
          ],
          [
            "td",
            "to set default picker date"
          ],
          [
            "td",
            "[",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            ", ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "]"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.8"
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabledTime"
          ],
          [
            "td",
            "to specify the time that cannot be selected"
          ],
          [
            "td",
            "function(dates: ",
            "[",
            "moment, moment], partial: ",
            [
              "code",
              "'start'|'end'"
            ],
            ")"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "format"
          ],
          [
            "td",
            "to set the date format, refer to ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment.js"
            ],
            ". When an array is provided, all values are used for parsing and first value is used for formatting."
          ],
          [
            "td",
            "string ",
            "|",
            " string[]"
          ],
          [
            "td",
            "\"YYYY-MM-DD HH:mm:ss\""
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "ranges"
          ],
          [
            "td",
            "preseted ranges for quick selection"
          ],
          [
            "td",
            "{ ",
            "[",
            "range: string]: ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "[",
            "] } ",
            "|",
            " { ",
            "[",
            "range: string]: () => ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "[",
            "] }"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "renderExtraFooter"
          ],
          [
            "td",
            "render extra footer in panel"
          ],
          [
            "td",
            "() => React.ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "separator"
          ],
          [
            "td",
            "set separator between inputs"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'~'"
          ],
          [
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showTime"
          ],
          [
            "td",
            "to provide an additional time selection"
          ],
          [
            "td",
            "object",
            "|",
            "boolean"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "/components/time-picker/#API"
              },
              "TimePicker Options"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showTime.defaultValue"
          ],
          [
            "td",
            "to set default time of selected date, ",
            [
              "a",
              {
                "title": null,
                "href": "#components-date-picker-demo-disabled-date"
              },
              "demo"
            ]
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "[",
            "]"
          ],
          [
            "td",
            "[",
            "moment(), moment()]"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "value"
          ],
          [
            "td",
            "to set date"
          ],
          [
            "td",
            "[",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            ", ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "]"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onCalendarChange"
          ],
          [
            "td",
            "a callback function, can be executed when the start time or the end time of the range is changing"
          ],
          [
            "td",
            "function(dates: ",
            "[",
            "moment, moment], dateStrings: ",
            "[",
            "string, string])"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.9"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "a callback function, can be executed when the selected time is changing"
          ],
          [
            "td",
            "function(dates: ",
            "[",
            "moment, moment], dateStrings: ",
            "[",
            "string, string])"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onOk"
          ],
          [
            "td",
            "callback when click ok button"
          ],
          [
            "td",
            "function(dates: ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ],
            "[",
            "])"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "style",
      "\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"
    ],
    [
      "h2",
      "FAQ"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?"
            },
            "When set mode to DatePicker/RangePicker, cannot select year or month anymore?"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map