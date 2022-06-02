import React, { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import CreateWindow from '@comp/menu/createProtagonist';
import { CharacterList } from '@comp/menu/characterList';
import { Options } from '@comp/menu/options';

export const Menu = () => {

    const storeMenu = menu(state => state);

    const handleLogin = () => {
        if (storeMenu.login) {
            storeMenu.isLogin(false)
        }else{
            storeMenu.isLogin(true);
        } 

        storeMenu.isMapEditor(false);
        storeMenu.isCreate(false);
        storeMenu.isOptions(false);
    }

    const handleCreate = () => {
        if(storeMenu.create){
            storeMenu.isCreate(false);
        }else{
            storeMenu.isCreate(true);
        }
        
        storeMenu.isMapEditor(false);
        storeMenu.isLogin(false);
        storeMenu.isOptions(false);
    }

    const handleOptions = () => {
        if(storeMenu.options){
            storeMenu.isOptions(false);
        }else{
            storeMenu.isOptions(true);
        }
        
        storeMenu.isMapEditor(false);
        storeMenu.isLogin(false);
        storeMenu.isCreate(false);
    }

    const handleMapEditor = () => {
        if (storeMenu.mapEditor) {
            storeMenu.isMapEditor(false);
        } else {
            storeMenu.isMapEditor(true);
        }

        storeMenu.isOptions(false);
        storeMenu.isLogin(false);
        storeMenu.isCreate(false);
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

                    <button type = 'button' onClick = {handleMapEditor} >
                        Map Editor
                    </button>
                    
                </div>
                
            </div>

            {   (storeMenu.create || storeMenu.login || storeMenu.options) ?
                <div className='boxMenuContainer'>
                    <div className='list'>
                    {
                        (storeMenu.create) ? <CreateWindow /> : 
                        (storeMenu.login) ? <CharacterList /> :
                        (storeMenu.options) ? <Options /> :
                        <></>
                    }
                    </div>
                </div>
                : <></>
            }
        </>
    )
}