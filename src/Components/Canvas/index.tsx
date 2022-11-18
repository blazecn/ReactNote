import React from "react";
import { Component } from "react";
import WebGL2Program from "./WebGL2Program";
import vertShaderSource from "@/shaders/default/default.vert";
import fragShaderSource from "@/shaders/default/default.frag";

interface CanvasProps {
  className?: string;
}

class Canvas extends Component<CanvasProps> {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  gl: WebGL2RenderingContext;
  program: WebGL2Program;

  constructor(props: {}) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <canvas ref={this.canvasRef} className={this.props.className}></canvas>
    );
  }

  componentDidMount(): void {
    this.canvasRef.current.width = this.canvasRef.current.clientWidth;
    this.canvasRef.current.height = this.canvasRef.current.clientHeight;

    this.gl = this.canvasRef.current.getContext("webgl2");
    this.program = new WebGL2Program(
      this.gl,
      vertShaderSource,
      fragShaderSource
    );
    this.program.draw();
  }
}

export default Canvas;
