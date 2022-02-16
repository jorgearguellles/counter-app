import React from "react";
import ReactDom from "react-dom";
import './index.css';
// import { CounterApp } from "./CounterApp";
import { App } from "./App.js";

const root = document.querySelector("#root");

// ReactDom.render(<CounterApp value={10}/>,root);
ReactDom.render(<App title="Title Here"/>,root);
  