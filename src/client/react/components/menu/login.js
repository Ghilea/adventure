import React, {useState, useEffect} from 'react';
import Interface from '@comp/interface/Interface';
import { RenderCanvas, RenderBg } from '@comp/map/canvas';
import { menu } from '@comp/store'
import { Menu } from '@comp/menu/menu';
import useSound from 'use-sound';
import { Howler } from 'howler';

const Login = () => {

    const storeMenu = menu(state => state);

    const [start, setStart] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);
    const [play, {
        sound, 
        stop
    }] = useSound('assets/music/menu.mp3', {
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

    /**
     * <button type='button' className = 'music'
            onClick = {audioPlay} >
            <img src = 'assets/images/gui/button_10_s06.png' />
        </button>

        <div className = {
            `loadingScreen ${(start) ? 'hide' : ''}`
        }
        onClick = {
            audioPlay
        } >
            <h1>Äventyret</h1>
            <p>Klicka för att starta...</p>
            <img className='celticImg' src='assets/images/svg/celtic.svg' alt='logo'/>
        </div>
     */
    return (
        <>
            {
                
                (!storeMenu.login) ?
                    <>
                        <RenderBg />
                        <Menu />
                    </>
                :
                    <>
                        <Interface />
                        <RenderCanvas />
                    </>
            }
        </>        
    )
}

export default Login;