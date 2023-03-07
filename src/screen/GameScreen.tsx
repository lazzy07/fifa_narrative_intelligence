import P5 from "p5";
import { createRef, useEffect } from "react";
import Draw from "../lib/main/Draw";
import { Player } from "../lib/objects/Player";

export default function GameScreen() {
  const ref = createRef<HTMLDivElement>();

  const draw = (sketch: P5) => {
    const draw = new Draw(sketch);

    sketch.draw = () => {
      draw.draw();
    };

    sketch.setup = () => {
      draw.setup();
    };
  };

  useEffect(() => {
    new P5(draw, ref.current!);
  }, []);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
}
