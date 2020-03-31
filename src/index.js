import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer/Reducer";

const store = createStore(rootReducer, compose(composeWithDevTools()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
