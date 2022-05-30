import React, {useState, useEffect} from 'react';
import Interface from '@comp/interface/Interface';
import { RenderCanvas, RenderBg } from '@comp/map/canvas';
import { menu } from '@comp/store'
import { Menu } from '@comp/menu/menu';
import useSound from 'use-sound';
import { Howler } from 'howler';
import { LoadingScreen } from '@comp/menu/loadingScreen';

const Login = () => {

    const storeMenu = menu(state => state);

    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        if(!loading){
            setLoading(true);
        }
        
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        
    }, [storeMenu.loginSuccess])
        
    return (
        <>
            {
                (loading) ?
                    <LoadingScreen />
                :
                                    
                    (!storeMenu.loginSuccess) ?
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