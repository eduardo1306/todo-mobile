export enum TodoActionsType {
  addTodoRequest = 'ADD_TODO_REQUEST',
  addTodoSuccess = 'ADD_TODO_SUCCESS',
  addTodoFailure = 'ADD_TODO_FAILURE'
}

export interface ITodo {
  id: number;
  title: string;
  subtitle: string;
  hashtags: Array<{
    id: number;
    title: string;
  }>;
  hour: string;
  hasFinished: boolean;
  available: boolean;
}
export interface ITodos {
  todos: ITodo[];
  failedStockCheck: number[];
}
