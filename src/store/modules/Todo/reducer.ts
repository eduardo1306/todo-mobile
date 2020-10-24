import { Reducer } from 'redux';
import produce from 'immer';

import { ITodos, TodoActionsType } from './types';

const INITIAL_STATE: ITodos = {
  todos: [],
  failedStockCheck: [],
};

const todo: Reducer<ITodos> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case TodoActionsType.addTodoSuccess:
        const { todo } = action.payload;

        draft.todos.push(todo);
        break;

      case TodoActionsType.addTodoFailure:

      draft.failedStockCheck.push(action.payload.todoId);
      break;

      default:
        return draft;
    }
  });
}

export default todo;
