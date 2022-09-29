import { useEffect, useState } from "react"
import { menu } from '@comp/store';

const useAudio = async ({src, type}) => {

    const store = menu(state => state);

    const [audio, setAudio] = useState(new Audio(src));

    const [options, setOptions] = useState({
        enabled: null,
        volume: null,
        loop: null
    });

    useEffect(() => {

        switch (type) {
            case 'sound':
                setOptions(state => ({
                    ...state,
                    volume: store.options.sound.volume
                }))
                break;
            case 'music':
                setOptions(state => ({
                    ...state,
                    volume: store.options.music.volume,
                    loop: store.options.music.loop
                }))
                break;
        }
    }, [])

    const play = async () => {
        
        audio.volume = options.volume;
        if(options.loop !== null){
            audio.loop = options.loop;
        }
        console.log(audio.play())
        await audio.play();
    };

    const stop = () => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    const change = (src) => {
        setAudio(new Audio(src))
    }

    return [play, stop, change]
}

export default useAudio;