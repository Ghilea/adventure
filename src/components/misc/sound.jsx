import { useEffect, useState } from "react"
import { menu } from '@comp/store';

/*export const Music = (src) => {

    const store = menu(state => state);

    const [audio, SetAudio] = useState(new Audio(src));
    
    const play = () => {
        audio.volume = store.options.music.volume;
        audio.loop = store.options.music.loop;
        audio.play();
    };
    const stop = () => {

        audio.pause();
    };
    useEffect(() => {
        if(store.options.music.enable){
            play();
        }else{
            stop();
        }
        
    }, [store.options.music]);

    return {play, stop}
}*/

const useAudio = ({src, type}) => {

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

    const play = () => {
        
        audio.volume = options.volume;
        if(options.loop !== null){
            audio.loop = options.loop;
        }
        audio.play();
    };

    const stop = () => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    return [play, stop]
}

export default useAudio;