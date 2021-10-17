/* This is the main file this is the entry point for the application, the index.html file will read this index.js file 
and load the entire application. This file imports different code from different librabries*/
import React from "react"; //main library for react
import ReactDOM from "react-dom"; //used to control the document object model(structure of how web pages are put together)
import App from "./App"; //when importing modules you don't need to add .js extention

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
