import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UseStateHook from "./UseStateHook";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <UseStateHook />
  </StrictMode>,
  rootElement
);
