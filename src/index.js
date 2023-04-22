import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SomeListComponent from "./components/SomeListComponent";

ReactDOM.render(
  <SomeListComponent
    items={[{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }]}
    onClick={items =>
      window.alert(`You have clicked on Item Number - ${items}`)
    }
  />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();