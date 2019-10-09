import { Mutation } from "../myType";
import When from "fastman/whenman";

export const promiseAction: Mutation<string, Promise<string>> = (
  model,
  data: string,
  actions
) => {
  return new When((resolve, reject) => {
    // resolve(1); // 不报错 由于When 的类型声明不完整 需要将 When 设置成 Promise 的别名
    /* whenman.d.ts
        export default Promise;
    * */
    setTimeout(() => resolve(data), 1000);
  }) as Promise<string>;
};

export const testAsyncAction: Mutation<string, Promise<void>> = (
  model,
  data: string,
  actions
) => {
  return Promise.resolve(actions.promiseAction(String(Math.random())))
    .then(str => {
      actions.updateModel({ a: str });
    })
    .catch(console.error);
};
