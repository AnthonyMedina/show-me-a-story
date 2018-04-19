import posed, { PoseGroup } from "react-pose";
import React from "react";

import { spring } from "popmotion";

const poseProps = {
  draggable: true,
  dragBounds: { left: -100, right: 800 },
  dragEnd: { transition: spring },
  left: { x: "1000px", delay: 1000, staggerChildren: 1000 },
  right: { x: "100px", delay: 1000, staggerChildren: 1000 }
};

const Character = posed.div(poseProps);

export default Character;
