import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./componenets/header/Header";
import Home from "./componenets/home/Home";
import Project from "./componenets/project/Project";
import Skills from "./componenets/skill/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Project></Project>
        <Skills></Skills>
      </div>
    </Router>
  );
}

export default App;
