import { useEffect, useState } from 'react';
import useAudio from '@hooks/useAudio';
import { menu } from '@store/store';
import soundEffect from '@assets/sounds/button.mp3';

export const MenuButton = ({children, open}) => {
    
    const store = menu(state => state);
    
    const [play, {stop}] = useAudio(soundEffect, {
        volume: 0.5,
    });

    const handleButton = () => {
        store.activeMenu === open ? store.activateMenu(null) : store.activateMenu(open);
    }

    return (
        <button type='button' onMouseEnter={() => play()} onClick={handleButton}>{children}</button>
    )
}