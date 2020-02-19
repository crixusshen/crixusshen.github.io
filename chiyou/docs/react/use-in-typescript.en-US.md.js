(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/react/use-in-typescript.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/use-in-typescript.en-US.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/use-in-typescript.en-US.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "Install and Initialization"
    ],
    [
      "p",
      "Ensure your system has installed latest version of ",
      [
        "a",
        {
          "title": null,
          "href": "https://yarnpkg.com"
        },
        "yarn"
      ],
      " or ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/"
        },
        "npm"
      ],
      "."
    ],
    [
      "p",
      "Create a new ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript"
        },
        "cra-template-typescript"
      ],
      " project named ",
      [
        "code",
        "antd-demo-ts"
      ],
      " using yarn."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn create react-app antd-demo-ts --template typescript\n\n<span class=\"token comment\" spellcheck=\"true\"># or</span>\n\nnpx create-react-app my-app --template typescript"
      },
      [
        "code",
        "$ yarn create react-app antd-demo-ts --template typescript\n\n# or\n\nnpx create-react-app my-app --template typescript"
      ]
    ],
    [
      "p",
      "If you are using npm (we will use yarn in the following instructions, it's ok to replace yarn with npm)"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ npx create-react-app antd-demo-ts --typescript"
      },
      [
        "code",
        "$ npx create-react-app antd-demo-ts --typescript"
      ]
    ],
    [
      "p",
      "Then we go inside ",
      [
        "code",
        "antd-demo-ts"
      ],
      " and start it."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">cd</span> antd-demo-ts\n$ yarn start"
      },
      [
        "code",
        "$ cd antd-demo-ts\n$ yarn start"
      ]
    ],
    [
      "p",
      "Open browser at ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:3000/"
        },
        "http://localhost:3000/"
      ],
      ", it renders a header saying \"Welcome to React\" on the page."
    ],
    [
      "h2",
      "Import antd"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add antd"
      },
      [
        "code",
        "$ yarn add antd"
      ]
    ],
    [
      "p",
      "Modify ",
      [
        "code",
        "src/App.tsx"
      ],
      ", import Button component from ",
      [
        "code",
        "antd"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/es/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./App.css'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>App<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> App<span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import React, { Component } from 'react';\nimport Button from 'antd/es/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"
      ]
    ],
    [
      "p",
      "Add ",
      [
        "code",
        "antd/dist/antd.css"
      ],
      " at the top of ",
      [
        "code",
        "src/App.css"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">'~antd/dist/antd.css'</span><span class=\"token punctuation\">;</span></span>\n\n<span class=\"token selector\"><span class=\"token class\">.App</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token number\">...</span>"
      },
      [
        "code",
        "@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."
      ]
    ],
    [
      "p",
      "Ok, reboot with ",
      [
        "code",
        "yarn start"
      ],
      ", you should now see a blue primary button displayed on the page. Next you can choose any components of ",
      [
        "code",
        "antd"
      ],
      " to develop your application. Visit other workflows of ",
      [
        "code",
        "create-react-app"
      ],
      " at its ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"
        },
        "User Guide "
      ],
      "."
    ],
    [
      "h2",
      "Advanced Guides"
    ],
    [
      "p",
      "We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo-ts. For instance, we actually import all styles of components in the project which may be a network performance issue."
    ],
    [
      "p",
      "Now we need to customize the default webpack config. We can achieve that by using ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/timarney/react-app-rewired"
        },
        "react-app-rewired"
      ],
      " which is one of create-react-app's custom config solutions."
    ],
    [
      "p",
      "Import react-app-rewired and modify the ",
      [
        "code",
        "scripts"
      ],
      " field in package.json. Due to new ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/timarney/react-app-rewired#alternatives"
        },
        "react-app-rewired@2.x"
      ],
      " issue, you shall need ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/arackaf/customize-cra"
        },
        "customize-cra"
      ],
      " along with react-app-rewired."
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "$ yarn add react<span class=\"token operator\">-</span>app<span class=\"token operator\">-</span>rewired customize<span class=\"token operator\">-</span>cra"
      },
      [
        "code",
        "$ yarn add react-app-rewired customize-cra"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "/* package.json */\n\"scripts\": {\n<span class=\"token deleted\">-   \"start\": \"react-scripts start\",</span>\n<span class=\"token inserted\">+   \"start\": \"react-app-rewired start\",</span>\n<span class=\"token deleted\">-   \"build\": \"react-scripts build\",</span>\n<span class=\"token inserted\">+   \"build\": \"react-app-rewired build\",</span>\n<span class=\"token deleted\">-   \"test\": \"react-scripts test\",</span>\n<span class=\"token inserted\">+   \"test\": \"react-app-rewired test\",</span>\n}"
      },
      [
        "code",
        "/* package.json */\n\"scripts\": {\n-   \"start\": \"react-scripts start\",\n+   \"start\": \"react-app-rewired start\",\n-   \"build\": \"react-scripts build\",\n+   \"build\": \"react-app-rewired build\",\n-   \"test\": \"react-scripts test\",\n+   \"test\": \"react-app-rewired test\",\n}"
      ]
    ],
    [
      "p",
      "Then create a ",
      [
        "code",
        "config-overrides.js"
      ],
      " at root directory of your project for further overriding."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token function\">override</span><span class=\"token punctuation\">(</span>config<span class=\"token punctuation\">,</span> env<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// do stuff with the webpack config...</span>\n  <span class=\"token keyword\">return</span> config<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"
      ]
    ],
    [
      "h3",
      "Use babel-plugin-import"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/babel-plugin-import"
        },
        "babel-plugin-import"
      ],
      " is a babel plugin for importing components on demand (",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/getting-started#Import-on-Demand"
        },
        "How does it work?"
      ],
      "). We are now trying to install it and modify ",
      [
        "code",
        "config-overrides.js"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add babel-plugin-import"
      },
      [
        "code",
        "$ yarn add babel-plugin-import"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "<span class=\"token inserted\">+ const { override, fixBabelImports } = require('customize-cra');</span>\n\n<span class=\"token deleted\">- module.exports = function override(config, env) {</span>\n<span class=\"token deleted\">-   // do stuff with the webpack config...</span>\n<span class=\"token deleted\">-   return config;</span>\n<span class=\"token deleted\">- };</span>\n<span class=\"token inserted\">+ module.exports = override(</span>\n<span class=\"token inserted\">+   fixBabelImports('import', {</span>\n<span class=\"token inserted\">+     libraryName: 'antd',</span>\n<span class=\"token inserted\">+     libraryDirectory: 'es',</span>\n<span class=\"token inserted\">+     style: 'css',</span>\n<span class=\"token inserted\">+   }),</span>\n<span class=\"token inserted\">+ );</span>"
      },
      [
        "code",
        "+ const { override, fixBabelImports } = require('customize-cra');\n\n- module.exports = function override(config, env) {\n-   // do stuff with the webpack config...\n-   return config;\n- };\n+ module.exports = override(\n+   fixBabelImports('import', {\n+     libraryName: 'antd',\n+     libraryDirectory: 'es',\n+     style: 'css',\n+   }),\n+ );"
      ]
    ],
    [
      "p",
      "Remove the ",
      [
        "code",
        "@import '~antd/dist/antd.css';"
      ],
      " statement added before because ",
      [
        "code",
        "babel-plugin-import"
      ],
      " will import styles and import components like below:"
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "  // src/App.js\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'antd/es/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"
      },
      [
        "code",
        "  // src/App.js\n  import React, { Component } from 'react';\n- import Button from 'antd/es/button';\n+ import { Button } from 'antd';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"
      ]
    ],
    [
      "p",
      "Then reboot with ",
      [
        "code",
        "yarn start"
      ],
      " and visit the demo page, you should not find any ",
      [
        "a",
        {
          "title": null,
          "href": "https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"
        },
        "warning messages"
      ],
      " in the console, which prove that the ",
      [
        "code",
        "import on demand"
      ],
      " config is working now. You will find more info about it in ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/getting-started#Import-on-Demand"
        },
        "this guide"
      ],
      "."
    ],
    [
      "h3",
      "Customize Theme"
    ],
    [
      "p",
      "According to the ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/customize-theme"
        },
        "Customize Theme documentation"
      ],
      ", to customize the theme, we need to modify ",
      [
        "code",
        "less"
      ],
      " variables with tools such as ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/webpack/less-loader"
        },
        "less-loader"
      ],
      ". We can also use ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/arackaf/customize-cra#addlessloaderloaderoptions"
        },
        "addLessLoader"
      ],
      " to achieve this. Import it and modify ",
      [
        "code",
        "config-overrides.js"
      ],
      " like below."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add <span class=\"token function\">less</span> less-loader"
      },
      [
        "code",
        "$ yarn add less less-loader"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "<span class=\"token deleted\">- const { override, fixBabelImports } = require('customize-cra');</span>\n<span class=\"token inserted\">+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');</span>\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n<span class=\"token deleted\">-   style: 'css',</span>\n<span class=\"token inserted\">+   style: true,</span>\n  }),\n<span class=\"token inserted\">+ addLessLoader({</span>\n<span class=\"token inserted\">+   javascriptEnabled: true,</span>\n<span class=\"token inserted\">+   modifyVars: { '@primary-color': '#1DA57A' },</span>\n<span class=\"token inserted\">+ }),</span>\n);"
      },
      [
        "code",
        "- const { override, fixBabelImports } = require('customize-cra');\n+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n-   style: 'css',\n+   style: true,\n  }),\n+ addLessLoader({\n+   javascriptEnabled: true,\n+   modifyVars: { '@primary-color': '#1DA57A' },\n+ }),\n);"
      ]
    ],
    [
      "p",
      "We use ",
      [
        "code",
        "modifyVars"
      ],
      " option of ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/webpack/less-loader#less-options"
        },
        "less-loader"
      ],
      " here, you can see a green button rendered on the page after rebooting the start server."
    ],
    [
      "blockquote",
      [
        "p",
        "You could also try ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/sharegate/craco"
          },
          "craco"
        ],
        " and ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/FormAPI/craco-antd"
          },
          "craco-antd"
        ],
        " to customize create-react-app webpack config same as customize-cra does."
      ]
    ],
    [
      "h2",
      "Alternative ways"
    ],
    [
      "p",
      "You can also follow instructions in ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/use-with-create-react-app.en-US.md"
        },
        "Use in create-react-app"
      ],
      ", then use to setup the TypeScript development environment by yourself."
    ],
    [
      "p",
      "And you can use ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/react-scripts-ts-antd"
        },
        "react-scripts-ts-antd"
      ],
      " which includes ts-import-plugin, react-app-rewired, scss, less and etc. You can create a new project that without any configurations by running just one command."
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
              "href": "https://github.com/SZzzzz/react-scripts-ts-antd"
            },
            "Create React apps (with Typescript and antd) with no build configuration"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "span",
            "react-app-rewire-typescript"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/Brooooooklyn/ts-import-plugin"
            },
            "ts-import-plugin"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://facebook.github.io/create-react-app/docs/adding-typescript"
            },
            "create-react-app Adding TypeScript"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"
            },
            "Migrating from create-react-app-typescript to Create React App"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 4,
    "title": "Use in TypeScript",
    "filename": "docs/react/use-in-typescript.en-US.md"
  },
  "description": [
    "section",
    [
      "p",
      "Let's create a TypeScript project by using ",
      [
        "code",
        "create-react-app"
      ],
      ", then import ",
      [
        "code",
        "antd"
      ],
      " step by step."
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Install-and-Initialization",
          "title": "Install and Initialization"
        },
        "Install and Initialization"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Import-antd",
          "title": "Import antd"
        },
        "Import antd"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Advanced-Guides",
          "title": "Advanced Guides"
        },
        "Advanced Guides"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Alternative-ways",
          "title": "Alternative ways"
        },
        "Alternative ways"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=use-in-typescript.en-US.md.js.map