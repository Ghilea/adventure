import { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import menuMusic from '@shared/assets/sounds/button.mp3';

export const MenuButton = ({children, open}) => {
    
    const store = menu(state => state);
    
    const [audio, SetAudio] = useState(new Audio(menuMusic));

    const handleEnter = () => {
        audio.volume = 0.50;
        audio.play();
    };

    const handleLeave = () => {
        if(!audio.paused){
            audio.pause();
            audio.currentTime = 0;
        }
    }

    const handleButton = () => {
        store.activeMenu === open ? store.activateMenu(null) : store.activateMenu(open);
    }

    return (
        <button type='button' onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleButton}>{children}</button>
    )
}