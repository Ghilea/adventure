import { useEffect, useState } from 'react';
import useAudio from '@comp/misc/useAudio';
import { menu } from '@comp/store';
import soundEffect from '@shared/assets/sounds/button.mp3';

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