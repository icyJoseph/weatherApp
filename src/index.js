import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

// block the right-click
//window.oncontextmenu = function(event) {
//  event.preventDefault();
//  event.stopPropagation();
//  return false;
//};

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
