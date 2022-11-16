import { useState } from "react";
import { useKey } from "rooks";

function actionByKey(key) {
  const keys = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
  };

  return keys[key];
}

export const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  const keyHandler = (e) => {
    if (e.type === "keydown" && actionByKey(e.code)) {
      setMovement((state) => ({
        ...state,
        [actionByKey(e.code)]: true,
      }));
    }

    if (e.type === "keyup" && actionByKey(e.code)) {
      setMovement((state) => ({
        ...state,
        [actionByKey(e.code)]: false,
      }));
    }
  };

  useKey(["w", "a", "s", "d", "Space"], keyHandler, {
    eventTypes: ["keydown", "keyup"],
  });

  return movement;
};
