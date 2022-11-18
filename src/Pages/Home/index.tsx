import React from "react";
import { Component } from "react";
import NavBar from "@/Components/NavBar";
import Canvas from "@/Components/Canvas";
import CSS from "./style.module.css";

class Home extends Component {
  render() {
    return (
      <div className={CSS.home}>
        <NavBar title="React Note"></NavBar>
        <Canvas className={CSS.canvas} />
      </div>
    );
  }
}

export default Home;
