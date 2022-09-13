import React from 'react';
import { menu } from '@comp/store';

export const Button = ({children, active}) => {
    
    const storeMenu = menu(state => state);
    
    const handleButton = () => {
        storeMenu.activateMenu(active);
        
        console.log(storeMenu.activeMenu)
    }

    return (
        <button type='button' onClick={handleButton}>{children}</button>
    )
}