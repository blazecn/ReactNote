import { mat4 } from "gl-matrix";
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
  }

  attribLocation(name: string): number {
    return this.gl.getAttribLocation(this.program, name);
  }

  uniformLocation(name: string): WebGLUniformLocation {
    return this.gl.getUniformLocation(this.program, name);
  }

  createBuffer(data: Float32Array): WebGLBuffer {
    const buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
    return buffer;
  }

  draw() {
    console.log("draw");
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clearDepth(1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    {
      const positions = new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]);
      const numberComponents = 2;
      const type = this.gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      const buffer = this.createBuffer(positions);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
      const aVertexPosition = this.attribLocation("aVertexPosition");
      this.gl.vertexAttribPointer(
        aVertexPosition,
        numberComponents,
        type,
        normalize,
        stride,
        offset
      );
      this.gl.enableVertexAttribArray(aVertexPosition);
    }

    this.gl.useProgram(this.program);

    const projectionMatrix = mat4.create();
    const fieldOfView = (45 * Math.PI) / 180;
    const aspect = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
    const uProjectionMatrix = this.uniformLocation("uProjectionMatrix");
    this.gl.uniformMatrix4fv(uProjectionMatrix, false, projectionMatrix);

    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);
    const uModelViewMatrix = this.uniformLocation("uModelViewMatrix");
    this.gl.uniformMatrix4fv(uModelViewMatrix, false, modelViewMatrix);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
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
