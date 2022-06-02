import React from 'react';
import { menu } from '@comp/store';

export const Exit = () => {
    
    const storeMenu = menu(state => state);

    const handleExit = () => {
        storeMenu.isMapEditor(false);
    }

    return (
        <button onClick={handleExit}>Exit</button>
    )

}