import { Reducer } from 'redux';
import produce from 'immer';

import { ITodos } from './types';

const INITIAL_STATE: ITodos = {
  todos: [],
  failedStockCheck: [],
};

const todo: Reducer<ITodos> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_TODO_SUCCESS':
        break;
      default:
        break;
    }
  });
}

export default todo;
