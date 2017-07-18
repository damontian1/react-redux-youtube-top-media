import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxPromise from "redux-promise";

const createStoreWithReduxPromise = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithReduxPromise(rootReducer)}>
    <App/>
  </Provider>,
  document.getElementById("root")
)