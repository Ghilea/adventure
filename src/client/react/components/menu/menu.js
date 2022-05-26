import React, { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import CreateWindow from '@comp/menu/createProtagonist';
import { CharacterList } from './characterList';

export const Menu = () => {

    const storeMenu = menu(state => state);

    const createClick = () => {
        storeMenu.createWindow(true);
    }

    return (
        <div className='menuContainer'>
            <img className='logo' src='assets/images/svg/celtic.svg' alt='logo'/>
            <h1>Adventure</h1>
            
            <div className='boxMenuContainer'>
                <div className='list'>
                {
                    (storeMenu.showCreate) ? < CreateWindow /> : <CharacterList />
                }
                </div>
            </div>
            

            {
                (storeMenu.showCreate) ? '' : <button className='createHero' type='button' onClick = {
                    createClick
                } >New Game</button> }
        </div>
    )
}