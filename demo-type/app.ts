/*
 * @Author: shenzhiwei
 * @Date: 2019-08-01 14:16:12
 * @Company: orientsec.com.cn
 * @Description: Bootstrap Application
 */
import { Bootstrap } from "fastman/bootstrap";
import { IUserModel } from "./myType";

export default class App extends Bootstrap<IUserModel> {
  protected setViews() {
    return {
      "/": $views.home
    };
  }

  protected setModel() {
    return {
      a: "World",
      b: 1
    };
  }

  protected setRedies() {
    return [
      (model, actions, error) => {
        console.log("readies .");
      }
    ];
  }

  protected setHooks() {
    return {
      onPageInit: (e, pageId, $page, actions, model) => {
        console.log("onPageInit");
      },
      onPageWillAppear: (e, pageId, $page, actions, model) => {
        console.log("onPageWillAppear");
      }
    };
  }
}

new App().start($mutations);
