(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/react/practical-projects.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/practical-projects.en-US.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/practical-projects.en-US.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "In real project development, you might need a data flow solution like Redux or MobX. Ant Design React is a UI library that can be used with any data flow solution and application framework within the React ecosystem. We have launched dva based on Redux, as well as a pluggable enterprise application framework umi, which is recommended for use in your projects."
    ],
    [
      "p",
      "Dva is a lightweight data flow solution based on Redux. The concept comes from elm. It supports side effects, hot module replacement, dynamic loading, react-native, SSR, etc. It has been widely used in production."
    ],
    [
      "p",
      "And ",
      [
        "a",
        {
          "title": null,
          "href": "http://umijs.org/"
        },
        "umi"
      ],
      " is a routing-based framework that supports ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html"
        },
        "next.js-like conventional routing"
      ],
      " and various advanced routing functions, such as ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/en/plugin/umi-plugin-react.html#dynamicimport"
        },
        "routing-level on-demand loading"
      ],
      ". With a complete ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/plugin/"
        },
        "plugin system"
      ],
      " that covers every life cycle from source code to build product, umi is able to support various functional extensions and business needs; meanwhile ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/umi-ui.html"
        },
        "Umi UI"
      ],
      " is provided to enhance the development experience and development efficiency through Visual Aided Programming (VAP)."
    ],
    [
      "blockquote",
      [
        "p",
        "You may also be interested in ",
        [
          "a",
          {
            "title": null,
            "href": "https://pro.ant.design/"
          },
          "Ant Design Pro"
        ],
        ", an Out-of-box UI solution for enterprise applications based on umi, dva and ant design."
      ]
    ],
    [
      "p",
      "This article will guide you to create a simple application from zero using Umi UI, dva and antd."
    ],
    [
      "h2",
      "Install Umi UI"
    ],
    [
      "p",
      "It is recommended to use yarn to create an application and execute the following command."
    ],
    [
      "blockquote",
      [
        "p",
        "If you are using npm, execute ",
        [
          "code",
          "npm install umi -g"
        ],
        " and the effect will be the same."
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn global add umi\n$ umi -v\n2.10.4"
      },
      [
        "code",
        "$ yarn global add umi\n$ umi -v\n2.10.4"
      ]
    ],
    [
      "p",
      "Make sure the umi version is above 2.10.0."
    ],
    [
      "h2",
      "Create New App"
    ],
    [
      "p",
      "Start the app,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ umi ui\n\n🚀 Starting Umi UI using umi@2.10.4<span class=\"token punctuation\">..</span>.\n🧨  Ready on http://localhost:3000/"
      },
      [
        "code",
        "$ umi ui\n\n🚀 Starting Umi UI using umi@2.10.4...\n🧨  Ready on http://localhost:3000/"
      ]
    ],
    [
      "p",
      "After starting, Umi UI will automatically open the browser, then click ",
      [
        "code",
        "Create Project"
      ],
      ", select the path and enter ",
      [
        "code",
        "App name"
      ],
      ", as shown below."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/kQSR2zWDQ6/26543f59-07de-44b7-8b1d-b34e1266de8b.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "Click ",
      [
        "code",
        "Next"
      ],
      ", select ",
      [
        "code",
        "Basic Template"
      ],
      ", select ",
      [
        "code",
        "antd"
      ],
      " and ",
      [
        "code",
        "dva"
      ],
      " on the technology stack, then click ",
      [
        "code",
        "Finish"
      ],
      "."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/Pz9ayQpkWw/3c8a0190-ac32-444f-812e-3d1eff422507.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "In the project creation process, wait a few minutes."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/UtFy3fYg9n/bb7ef7c0-2fdb-403e-9b5a-d4ba02390483.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "After creating, go to ",
      [
        "code",
        "Overview"
      ],
      " and click on the shortcut entry ",
      [
        "code",
        "Run Dev"
      ],
      "."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/sZj2WeXiqc/44ddbc70-386c-4c8a-8deb-6a4a93a3afb2.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "In the task page, click ",
      [
        "code",
        "Start"
      ],
      ","
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/%24ot6F6Bj2L/a4c49cda-4ff8-409f-8054-9281199b6270.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "When prompted, open ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000"
        },
        "http://localhost:8000"
      ],
      " in your browser, you will see the welcome page of umi."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/2Bm%24zoeBpz/ba708131-c7ac-41f0-92a0-c86007291b6a.png",
          "width": "718"
        }
      ]
    ],
    [
      "h2",
      "Integrate antd"
    ],
    [
      "p",
      "After selecting ",
      [
        "code",
        "antd"
      ],
      " earlier, antd's dependencies are automatically handled and loaded on demand. You can check the ",
      [
        "code",
        "Configuration"
      ],
      " to make sure antd is turned on."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/0EFiWipONe/7aea9287-09ff-4396-bb20-d8da28483c2c.png",
          "width": "718"
        }
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "And if you want to use a fixed version of antd, you can install additional antd dependency in your project, and the antd dependencies declared in package.json will be used first."
      ]
    ],
    [
      "h2",
      "Create Routes"
    ],
    [
      "p",
      "We need to write an application displaying the list of products. The first step is to create a route."
    ],
    [
      "p",
      "If you don't have npx, you need to install it first to execute the commands under node_modules."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn global add npx"
      },
      [
        "code",
        "$ yarn global add npx"
      ]
    ],
    [
      "p",
      "Then create a ",
      [
        "code",
        "/products"
      ],
      " route,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ npx umi g page products\n\n   create src/pages/products.js\n   create src/pages/products.css\n✔  success"
      },
      [
        "code",
        "$ npx umi g page products\n\n   create src/pages/products.js\n   create src/pages/products.css\n✔  success"
      ]
    ],
    [
      "p",
      "Then open ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000/products"
        },
        "http://localhost:8000/products"
      ],
      " in your browser and you should see the corresponding page."
    ],
    [
      "h2",
      "Write UI Components"
    ],
    [
      "p",
      "As your application grows and you notice you are sharing UI elements between multiple pages (or using them multiple times on the same page), in umi it's called reusable components."
    ],
    [
      "p",
      "Let's create a ",
      [
        "code",
        "ProductList"
      ],
      " component that we can use in multiple places to show a list of products."
    ],
    [
      "p",
      "Click ",
      [
        "code",
        "Open in editor"
      ],
      ","
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/yXRYDK88RS/2252c0f6-747f-422c-aeb6-dc518d74c8ea.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "Create ",
      [
        "code",
        "src/components/ProductList.js"
      ],
      " by typing:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ProductList <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onDelete<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Actions'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Delete?\"</span> onConfirm<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>Table dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span> columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> ProductList<span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Table, Popconfirm, Button } from 'antd';\n\nconst ProductList = ({ onDelete, products }) => {\n  const columns = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n    },\n    {\n      title: 'Actions',\n      render: (text, record) => {\n        return (\n          <Popconfirm title=\"Delete?\" onConfirm={() => onDelete(record.id)}>\n            <Button>Delete</Button>\n          </Popconfirm>\n        );\n      },\n    },\n  ];\n  return <Table dataSource={products} columns={columns} />;\n};\n\nexport default ProductList;"
      ]
    ],
    [
      "h2",
      "Define dva Model"
    ],
    [
      "p",
      "After completing the UI, we will begin processing the data and logic."
    ],
    [
      "p",
      "dva manages the domain model with ",
      [
        "code",
        "model"
      ],
      ", with reducers for synchronous state updates, effects for async logic, and subscriptions for data source subscribe."
    ],
    [
      "p",
      "Let's create a model ",
      [
        "code",
        "src/models/products.js"
      ],
      " by typing,"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'products'</span><span class=\"token punctuation\">,</span>\n  state<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  reducers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">delete</span><span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> payload<span class=\"token punctuation\">:</span> id <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> state<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>id <span class=\"token operator\">!==</span> id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  namespace: 'products',\n  state: [],\n  reducers: {\n    delete(state, { payload: id }) {\n      return state.filter(item => item.id !== id);\n    },\n  },\n};"
      ]
    ],
    [
      "p",
      "In this model:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "namespace"
          ],
          " represents the key on global state"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "state"
          ],
          " is the initial value, here it is an empty array"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "reducers"
          ],
          " is equivalent to a reducer in redux, accepting an action, and update state simultaneously"
        ]
      ]
    ],
    [
      "p",
      "In umi, the model files under ",
      [
        "code",
        "src/models"
      ],
      " will be automatically injected, you don't need to inject manually."
    ],
    [
      "h2",
      "Connect"
    ],
    [
      "p",
      "So far, we have completed a separate model and component. How do we connect them together?"
    ],
    [
      "p",
      "dva provides a ",
      [
        "code",
        "connect"
      ],
      " method. If you are familiar with redux, this connect is from react-redux."
    ],
    [
      "p",
      "Edit ",
      [
        "code",
        "src/pages/products.js"
      ],
      " and replace it with the following,"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> connect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ProductList <span class=\"token keyword\">from</span> <span class=\"token string\">'../components/ProductList'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">function</span> <span class=\"token function\">handleDelete</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'products/delete'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> id<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>ProductList onDelete<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>handleDelete<span class=\"token punctuation\">}</span> products<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  products<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Products<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { connect } from 'dva';\nimport ProductList from '../components/ProductList';\n\nconst Products = ({ dispatch, products }) => {\n  function handleDelete(id) {\n    dispatch({\n      type: 'products/delete',\n      payload: id,\n    });\n  }\n  return (\n    <div>\n      <h2>List of Products</h2>\n      <ProductList onDelete={handleDelete} products={products} />\n    </div>\n  );\n};\n\nexport default connect(({ products }) => ({\n  products,\n}))(Products);"
      ]
    ],
    [
      "p",
      "Finally, we need some initial data to make the application run together. Edit ",
      [
        "code",
        "src/app.js"
      ],
      ","
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> dva <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">onError</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      err<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">.</span>message<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    initialState<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      products<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">,</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export const dva = {\n  config: {\n    onError(err) {\n      err.preventDefault();\n      console.error(err.message);\n    },\n    initialState: {\n      products: [{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }],\n    },\n  },\n};"
      ]
    ],
    [
      "p",
      "Refresh your browser, you should see the following result:"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"
        }
      ]
    ],
    [
      "h2",
      "Build"
    ],
    [
      "p",
      "Now that we've written our application and verified that it works in development, it's time to get it ready for deployment to our users. To do so, click ",
      [
        "code",
        "build"
      ],
      " in Task page."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/antfincdn/P31ZGMwzGe/d5365860-f7c6-4abe-98c0-36d6b1b3a65a.png",
          "width": "718"
        }
      ]
    ],
    [
      "p",
      "The ",
      [
        "code",
        "build"
      ],
      " command packages up all of the assets that make up your application —— JavaScript, templates, CSS, web fonts, images, and more. Then you can find these files in the ",
      [
        "code",
        "dist/"
      ],
      " directory."
    ],
    [
      "h2",
      "What's Next"
    ],
    [
      "p",
      "We have completed a simple application, but you may still have lots of questions, such as:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "How to handle onError globally and locally?"
        ]
      ],
      [
        "li",
        [
          "p",
          "How to handle routes?"
        ]
      ],
      [
        "li",
        [
          "p",
          "How to mock data?"
        ]
      ],
      [
        "li",
        [
          "p",
          "How to deploy?"
        ]
      ],
      [
        "li",
        [
          "p",
          "ant so on..."
        ]
      ]
    ],
    [
      "p",
      "You can:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Visit ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/"
            },
            "umi official website"
          ],
          " and ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/"
            },
            "dva official website"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Know ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/zh/guide/router.html"
            },
            "the umi routes"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Know ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/zh/guide/deploy.html"
            },
            "how to deploy umi application"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Checkout ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/knowledgemap/"
            },
            "dva knowledge"
          ],
          ", including all the basic knowledge with ES6, React, dva"
        ]
      ],
      [
        "li",
        [
          "p",
          "Be familiar with the ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/guide/concepts.html"
            },
            "8 Concepts of dva"
          ],
          ", and understand how they are connected together"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 2,
    "title": "Real project with umi and dva",
    "filename": "docs/react/practical-projects.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Install-Umi-UI",
          "title": "Install Umi UI"
        },
        "Install Umi UI"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Create-New-App",
          "title": "Create New App"
        },
        "Create New App"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Integrate-antd",
          "title": "Integrate antd"
        },
        "Integrate antd"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Create-Routes",
          "title": "Create Routes"
        },
        "Create Routes"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Write-UI-Components",
          "title": "Write UI Components"
        },
        "Write UI Components"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Define-dva-Model",
          "title": "Define dva Model"
        },
        "Define dva Model"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Connect",
          "title": "Connect"
        },
        "Connect"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Build",
          "title": "Build"
        },
        "Build"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#What's-Next",
          "title": "What's Next"
        },
        "What's Next"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=practical-projects.en-US.md.js.map