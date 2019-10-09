import * as ActionsMap from "./mutations/index";
import { IBaseModelType, IAction, IEffect, IMutation } from "fastman/bootstrap";

type DeepReadyOnly<T> = {
  readonly [P in keyof T]: DeepReadyOnly<T[P]>;
};

/**
 * todo 用户唯一需要自己设定的类型
 * */
export interface IUserModel {
  a: string;
  b: number;
}

/** 最终的 model 整合类型 */
export type MyModel = DeepReadyOnly<IUserModel> & IBaseModelType<IUserModel>;

/** 最终的 actions 整合类型 */
export type MyActions = MutationMapToActionMap<typeof ActionsMap>;

/**  actions 的类型 */
export type Mutation<INPUT = void, OUTPUT = Partial<MyModel>> = (
  model: MyModel,
  data: INPUT,
  actions: MyActions & IAction<MyModel> & IEffect<MyModel> & IMutation<MyModel>
) => OUTPUT;

/** 将单个 Mutation 类型 转化 成 单个 action 类型 */
type MutationToAction<T> = T extends Mutation<infer INPUT, infer OUTPUT>
  ? (data: INPUT) => OUTPUT
  : never;

/** 将 整合的Mutation 转化成 Mutation的actions */
type MutationMapToActionMap<T> = {
  [P in keyof T]: MutationToAction<T[P]>;
};

/** page 的类型 */
export abstract class Page {
  protected constructor() {}
  viewFrom = "FastmanBaseView"; // 创建时 会有这个属性的校验
  abstract render(model: MyModel, actions: MyActions): any;
}
