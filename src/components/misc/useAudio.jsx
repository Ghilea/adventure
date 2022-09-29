import { useEffect, useState } from "react"

const useAudio = (src, props) => {

    const [sound, setSound] = useState(null);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        
        if(props !== undefined){
            Object.keys(props).map((item, index) => {
                setOptions(state => ({
                    ...state,
                    [item]: props[item]
                }))
            })
        }
        
    }, [])

    const play = () => {
        
        const audio = new Audio(src);

        setSound(audio);

        if(options.volume !== undefined) audio.volume = options.volume;
        if(options.loop !== undefined) audio.loop = options.loop;
       
        audio.play();
    };

    const stop = () => {
        /*if (!sound.paused) {
            sound.pause();
            sound.currentTime = 0;
        }*/
    }

    /*const change = (src) => {
        setAudio(new Audio(src))
    }*/

    return [play, {stop}]
}

export default useAudio;