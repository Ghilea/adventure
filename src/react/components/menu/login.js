import React, {useState, useContext, useEffect} from 'react';
import Interface from '../interface/interface';
import Canvas from '../map/canvas';
import {StoreContext, StoreProvider} from '../store'
import Protagonist from './protagonist';
import useSound from 'use-sound';
import { Howler } from 'howler';

const Login = () => {

    const [store, setStore] = useContext(StoreContext);
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
        if (store.menu.login) {
            sound.fade(volume, 0, 1000);
            setTimeout(() => {
                stop();
                setPlaying(false);
            }, 1000);
        }
    },[store.menu.login])

    /**
     * <button type='button' className = 'music'
            onClick = {audioPlay} >
            <img src = 'assets/images/gui/button_10_s06.png' />
        </button>
     */
    return (

        <>
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
        {
            (start) ? 
            
                (!store.menu.login) ?
                    <>
                    <Protagonist />
                    </>
                :
                    <>
                    <Interface />
                    <Canvas />
                    </>
            
            :

            ''
        }
    
        
        </>
        
    )
}

export default Login;