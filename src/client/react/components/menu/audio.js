import React, {useState, useEffect} from 'react';
import { menu } from '@comp/store'
import useSound from 'use-sound';
import { Howler } from 'howler';

export const Sound = () => {

    const storeMenu = menu(state => state);

    const [start, setStart] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);
    
    const [play, {sound, stop}] = useSound('assets/music/menu.mp3', {
        volume: volume
    });

     const audioPlay = () => {
         if(!start){
           setStart(true);
         }

         if (playing) {
             stop();
             setPlaying(false);
         } else {
             play();
             setPlaying(true);
         }
     }

    useEffect(()=>{
        if (storeMenu.login) {
            sound.fade(volume, 0, 1000);
            setTimeout(() => {
                stop();
                setPlaying(false);
            }, 1000);
        }
    },[storeMenu.login])

}