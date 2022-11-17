class WebGL2Program {
  gl: WebGL2RenderingContext;
  program: WebGLProgram;

  vertexShaderSource: string;
  vertexShader: WebGLShader;

  fragmentShaderSource: string;
  fragmentShader: WebGLShader;

  vertexShaderLoaded: boolean;
  fragmentShaderLoaded: boolean;
  constructor(
    gl: WebGL2RenderingContext,
    vertexShaderSource: string,
    fragmentShaderSource: string
  ) {
    this.gl = gl;
    this.program = gl.createProgram();

    this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    this.vertexShaderSource = vertexShaderSource;
    this.vertexShaderLoaded = this.loadShader(
      this.vertexShader,
      this.vertexShaderSource
    );
    this.fragmentShaderSource = fragmentShaderSource;
    this.fragmentShaderLoaded = this.loadShader(
      this.fragmentShader,
      this.fragmentShaderSource
    );

    if (this.vertexShaderLoaded && this.fragmentShaderLoaded) {
      gl.linkProgram(this.program);
    }

    gl.useProgram(this.program);
    this.clearSecene();
  }

  clearSecene() {
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  private loadShader(shader: WebGLShader, source: string): boolean {
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(
        "An error occurred compiling the shaders: " +
          this.gl.getShaderInfoLog(shader)
      );
      this.gl.deleteShader(shader);
      return false;
    }
    this.gl.attachShader(this.program, shader);
    return true;
  }
}

export default WebGL2Program;
