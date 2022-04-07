import React, {useState, useContext} from 'react';
import Interface from './interface';
import Content from './content';
import {StoreContext, StoreProvider} from './store'
import Buttons from './buttons';
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
         console.log(playing);
         if (playing) {
             stop();
             setPlaying(false);
         } else {
             play();
             setPlaying(true);
         }
     }

    if (store.login) {
        sound.fade(volume, 0, 1000);
        setTimeout(() => {
            stop();
        }, 1000);
    }

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
            <img className='celticImg' src='assets/images/celtic.svg' alt='logo'/>
        </div>
        {
            (start) ? 
            
            (!store.login) ?
                <>
                <Protagonist />
                </>
            :
                <>
                <Interface />
                <Content />
                <Buttons />
                </>
            
            :

            ''
        }
    
        <button type='button' className = 'music'
            onClick = {audioPlay} >
            <img src='assets/images/music_note.svg' />
        </button>
        </>
        
    )
}

export default Login;