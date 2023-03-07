import P5 from "p5";

export abstract class Object {
  private sketch!: P5;

  public constructor(sketch: P5) {
    this.sketch = sketch;
  }

  public abstract draw(): void;
}
