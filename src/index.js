import React from "react";
import ReactDom from "react-dom";
import './index.css';
import { CounterApp } from "./CounterApp";

const root = document.querySelector("#root");
ReactDom.render(<CounterApp value={10}/>,root);
  