import React from 'react';
import { menu } from '@comp/store';

export const MenuButton = ({children, open}) => {
    
    const store = menu(state => state);
    
    const handleButton = () => {
        store.activeMenu === open ? store.activateMenu(null) : store.activateMenu(open);
    }

    return (
        <button type='button' onClick={handleButton}>{children}</button>
    )
}