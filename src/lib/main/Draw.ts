import P5 from "p5";

export default class Draw {
  sketch!: P5;

  public constructor(sketch: P5) {
    this.sketch = sketch;
  }

  public setup() {
    console.log("Setup initiated...");
    this.sketch.createCanvas(300, 300);
  }

  public draw() {
    console.log("Drawing on the canvas...");
    this.sketch.background(0);
    this.sketch.circle(20, 20, 10);
  }
}
