import React from "react";
import ReactDom from "react-dom";
import {CounterApp} from "./CounterApp.js";
import './index.css';

const root = document.querySelector("#root");

ReactDom.render(<CounterApp />,root);
  