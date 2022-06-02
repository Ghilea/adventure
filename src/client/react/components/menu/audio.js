import React, {useState, useEffect} from 'react';
import { menu } from '@comp/store'
import useSound from 'use-sound';
import { Howler } from 'howler';
import music from '@shared/assets/music/menu.mp3'

export const Sound = () => {
    
    const storeMenu = menu(state => state);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);
    
    const [play, {sound, stop}] = useSound(music, {
        volume: volume
    });

    const handleClick = () => {
        if(!storeMenu.startGame){
            storeMenu.isStartGame(true);
        }

        if (playing) {
            stop();
            setPlaying(false);
        } else {
            play();
            setPlaying(true);
        }
    }
 
    /*useEffect(()=>{
        if (storeMenu.login) {
            sound.fade(volume, 0, 1000);
            setTimeout(() => {
                stop();
                setPlaying(false);
            }, 1000);
        }
    },[storeMenu.login])*/

    return (
        <div className='startGame'>   
            <button onClick={handleClick}>Start</button>
        </div>
    )

}