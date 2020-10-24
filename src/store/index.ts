import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rooReducer from './modules/rootReducer';

const store = createStore(
  rooReducer,
);

export default store;
