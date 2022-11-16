import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/Components/NavBar/NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar title="React Note"></NavBar>
      </div>
    );
  }
}

export default Home;
