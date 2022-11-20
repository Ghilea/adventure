import { useState, useEffect, useRef } from "react";
import { useKey } from "rooks";
import useSound from "use-sound";
import footsteps1 from "@sounds/footsteps/footsteps.mp3";

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

  const timer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, {stop}] = useSound(footsteps1, {
    volume: 0.4,
    spriteMap: {
      footsteps1: [0, 758],
      footsteps2: [801, 1585],
    },
  });

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

      if (!isPlaying) {
        timer.current = setInterval(() => {
          play();
        }, 500);

        setIsPlaying(true);
      }
    }

    if (e.type === "keyup" && actionByKey(e.code)) {
      setMovement((state) => ({
        ...state,
        [actionByKey(e.code)]: false,
      }));

      if (isPlaying) {
        clearInterval(timer.current);

        setIsPlaying(false);
      }
    }

    if (!e.type === 'keydown') {
      console.log('stop')
      stop();
    }
  };

  useKey(["w", "a", "s", "d", "Space"], keyHandler, {
    eventTypes: ["keydown", "keyup"],
  });

  return movement;
};
