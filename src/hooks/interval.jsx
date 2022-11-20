import { useState, useEffect } from 'react'
import useSound from "use-sound";
import footsteps1 from "@sounds/footsteps/footsteps-1.mp3";
import footsteps2 from "@sounds/footsteps/footsteps-2.mp3";

const Interval = () => {
    const [counter, setCounter] = useState(0);

    const [play] = useSound(audio.sound, {
        volume: 0.5,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            play()
            /* setCounter((prevCounter) => prevCounter + 1); */
        }, 1000);

        return () => clearInterval(interval);
    }, []);
}

export default Interval