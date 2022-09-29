import { useEffect, useState } from 'react';
import useAudio from '@comp/misc/useAudio';
import { menu } from '@comp/store';
import soundEffect from '@shared/assets/sounds/button.mp3';

export const MenuButton = ({children, open}) => {
    
    const store = menu(state => state);
    
    const [play, stop] = useAudio({
        src: soundEffect,
        type: 'sound' 
    });

    const handleButton = () => {
        store.activeMenu === open ? store.activateMenu(null) : store.activateMenu(open);
    }

    return (
        <button type='button' onMouseEnter={() => play()} onMouseLeave={() => stop()} onClick={handleButton}>{children}</button>
    )
}