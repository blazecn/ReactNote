import React from "react";
import { Component } from "react";
import WebGL2Program from "./WebGL2Program";
import vertShaderSource from "@/shaders/default/default.vert";
import fragShaderSource from "@/shaders/default/default.frag";

class Canvas extends Component {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  gl: WebGL2RenderingContext;
  program: WebGL2Program;

  constructor(props: {}) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return <canvas ref={this.canvasRef}></canvas>;
  }

  componentDidMount(): void {
    this.gl = this.canvasRef.current.getContext("webgl2");
    this.program = new WebGL2Program(
      this.gl,
      vertShaderSource,
      fragShaderSource
    );
  }
}

export default Canvas;
