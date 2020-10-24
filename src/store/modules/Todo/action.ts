import { ITodo, TodoActionsType } from "./types";

export function addTodoRequest(todo: ITodo) {
  return {
    type: TodoActionsType.addTodoRequest,
    payload: {
      todo,
    },
  };
};

export function addTodoSuccess(todo: ITodo) {
  return {
    type: TodoActionsType.addTodoSuccess,
    payload: {
      todo,
    },
  };
};

export function addTodoFailure(todoId: number) {
  return {
    type: TodoActionsType.addTodoFailure,
    payload: {
      todoId,
    },
  };
};
