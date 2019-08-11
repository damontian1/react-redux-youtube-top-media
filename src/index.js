import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import rootReducer from "./reducers";

const createStoreWithReduxPromise = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithReduxPromise(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);