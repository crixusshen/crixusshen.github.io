import { Mutation, MyModel } from "../myType";

export const testAction: Mutation<void> = (model, count, actions) => {
  // actions.testAction("some string"); // error
  // actions.unknownActions // error
  // return { a: 1234 }; // error

  // actions.testAction();
  return { b: model.b + 1 };
};

export const updateModel: Mutation<Partial<MyModel>> = (_, data) => data;
