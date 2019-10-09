const { h } = require("fastman/coreman");

import { Page, MyModel, MyActions } from "../myType";
import Text from "../component/Text";
import * as _ from "lodash-es";

export default class extends Page {
  render(model: MyModel, actions: MyActions) {
    return (
      <div class="page" id="mainPage">
        <input
          type="text"
          value={model.a}
          onInput={e => {
            /**
             * 这里的 e 是 any 类型
             * */
            actions.updateModel({ a: e.target.value });
          }}
        />
        <h1 onclick={actions.testAction}>
          Hello {model.a} {"!".repeat(model.b)}
        </h1>

        <button class="ui-btn-s" onclick={actions.testAction}>
          sync
        </button>
        <button class="ui-btn-s" onclick={actions.testAsyncAction}>
          async
        </button>

        <Text text={"一些内容"} />
        {/*<Text text={1234} />  // error */}
      </div>
    );
  }
}
