import React, { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import CreateWindow from '@comp/menu/createProtagonist';
import { CharacterList } from './characterList';

export const Menu = () => {

    const storeMenu = menu(state => state);

    const handleLogin = () => {
        storeMenu.isLogin(true)
    }

    const handleCreate = () => {
        storeMenu.isCreate(true);
    }

    const handleOptions = () => {
        storeMenu.isOptions(true);
    }

    return (
        <>
            <div className='menuContainer'>
                
                <header>
                    <img className='logo' src='assets/images/svg/celtic.svg' alt='logo'/>

                    <h1>Adventure</h1> 
                </header>
                
                <div className='buttonList'>
                    <button type='button' onClick = {handleLogin}>
                        Login
                    </button>

                    <button type='button' onClick = {handleCreate}>
                        Create Protagonist
                    </button>

                    <button type='button' onClick={handleOptions}>
                        Options
                    </button>
                </div>
                
            </div>

            <div className='boxMenuContainer'>
                <div className='list'>
                {
                    (storeMenu.create) ? 
                    <CreateWindow /> : 
                    (storeMenu.login) ?  <CharacterList /> :
                    (storeMenu.options) ?
                    <Options /> :
                    <></>
                }
                </div>
            </div>
        </>
    )
}