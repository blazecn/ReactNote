import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "@/Components/NavBar/NavBar";

class About extends Component {
  render() {
    return (
      <div>
        <NavBar title="About"></NavBar>
      </div>
    );
  }
}

export default About;
