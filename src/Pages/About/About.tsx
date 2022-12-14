import React from "react";
import { Component } from "react";
import Chart from "@/Components/Chart";
import NavBar from "@/Components/NavBar";

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

class About extends Component {
  render() {
    return (
      <div>
        <NavBar title="React Note"></NavBar>
        <Chart data={initialData}></Chart>
      </div>
    );
  }
}

export default About;
