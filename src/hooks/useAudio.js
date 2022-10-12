import { useEffect, useState } from "react"

const useAudio = (src, props) => {

    const [sound, setSound] = useState(new Audio(src));

    const [options, setOptions] = useState([]);

    useEffect(() => {

        if(props !== undefined){
            Object.keys(props).map((item) => {
                setOptions(state => ({
                    ...state,
                    [item]: props[item]
                }))
            })
        }
        
    }, [])

    useEffect(() => {
        if (options.volume !== undefined) sound.volume = options.volume;
        if (options.loop !== undefined) sound.loop = options.loop;
    },[options])

    const play = () => {
            sound.currentTime = 0;
            sound.play();        
    };

    const stop = () => {
        if (!sound.paused) {
            sound.currentTime = 0;
            sound.pause();
        }
    }

    return [play, {stop}]
}

export default useAudio;