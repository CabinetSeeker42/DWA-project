import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";

import * as Redux from "redux";
import { Provider } from "react-redux";
import { mainReducer } from "./redux/reducers/mainReducer";
import thunkMiddleware from "redux-thunk";

require('dotenv').config();

const logger = (store) => (next) => (action) => {
  let result = next(action);
  return result;
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  Redux.compose;

export const theStore = Redux.createStore(
  mainReducer,
  composeEnhancers(Redux.applyMiddleware(logger, thunkMiddleware))
);

const mainComponent = (
  <Provider store={theStore}>
    <App />
  </Provider>
);

ReactDOM.render(mainComponent, document.getElementById("root"));
