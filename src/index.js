import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import One from "./One";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <One name="Krish" />
  </StrictMode>,
  rootElement
);
