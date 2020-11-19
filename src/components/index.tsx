import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
ReactDOM.render(
  <App userName="Neil" lang="TypeScript" />,
  document.getElementById("app")
);
if (module.hot) {
  module.hot.accept();
}