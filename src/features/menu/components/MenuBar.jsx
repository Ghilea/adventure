import React from 'react';
import { MenuButton } from './MenuButton';
import logoImg from '@assets/images/svg/celtic.svg';

const MenuBar = () => {

    return (
        <div className='menuContainer'>
            
            <header>
                <img className='logo' src={logoImg} alt='logo'/>

                <h1>Adventure</h1> 
            </header>
            
            <div className='buttonList'>
                <MenuButton open='view'>Login</MenuButton>

                <MenuButton open='create'>Create Protagonist</MenuButton>

                <MenuButton open='options'>Options</MenuButton>

                <MenuButton open='editor'>Map Editor</MenuButton>

                <MenuButton open='exit'>Exit Game</MenuButton>
            </div>
            
        </div>
    )
}

export default MenuBar