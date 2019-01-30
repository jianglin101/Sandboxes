import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function AppDemo() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
=======
import App from "./App";
function AppDemo() {
  return <App />;
>>>>>>> 8fbf78535f553d3b2456b4e42672cbde38af183b
}

ReactDOM.render(<AppDemo />, document.querySelector("#app"));
