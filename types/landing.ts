type NumberRange = readonly [number, number];

export type BodyStage = {
  index: number;
  asset:
    | "TS_hand.png"
    | "TS_optics.png"
    | "TS_left.png"
    | "TS_right.png"
    | "TS_lens.png"
    | "TS_core.png"
    | "TS_disp.png"
    | "TS_base.png"
    | "TS_foot.png"
    | "TS_comp.png";
  reveal: NumberRange;
  hold: NumberRange;
  entry: {
    xVw?: number;
    yVh?: number;
    opacity?: NumberRange;
    scale?: NumberRange;
    rotateDeg?: NumberRange;
  };
  direction: string;
  crossResolve?: NumberRange;
};
