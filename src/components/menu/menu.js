import React, { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import { MenuCreateCharacter } from '@comp/menu/MenuCreateCharacter';
import { MenuShowCharacters } from '@comp/menu/MenuShowCharacters';
import { MenuOptions } from '@comp/menu/MenuOptions';
import { MenuButton } from '@comp/menu/MenuButton';
import logoImg from '@shared/assets/images/svg/celtic.svg';
import './Menu.scss';
import { useSound } from 'use-sound';
import menuMusic from '@shared/assets/music/menu.mp3';

export const Menu = () => {

    const storeMenu = menu(state => state);

    const [openMenu, setOpenMenu] = useState(null);

    const [play, {stop}] = useSound(menuMusic);

    useEffect(() => {
        switch (storeMenu.activeMenu) {
            case 'login':
                setOpenMenu(<MenuShowCharacters />)
                break;
            case 'create':
                setOpenMenu(<MenuCreateCharacter />)
                break;
            case 'options':
                setOpenMenu(<MenuOptions />)
                break;
            default:
                setOpenMenu(null);
                break;
        }

    }, [storeMenu.activeMenu])

    return (
        <> 
            <div className='menuContainer'>
                <div className='activateSoundButton' onClick={() => {play()}}></div>
                <header>
                    <img className='logo' src={logoImg} alt='logo'/>

                    <h1>Adventure</h1> 
                </header>
                
                <div className='buttonList'>
                    <MenuButton open='login'>Login</MenuButton>

                    <MenuButton open='create'>Create Protagonist</MenuButton>

                    <MenuButton open='options'>Options</MenuButton>

                    <MenuButton open='editor'>Map Editor</MenuButton>
                </div>
                
            </div>

            <div className={`${(openMenu === null) ? 'hide' : 'boxMenuContainer'}`}>
                {openMenu}
            </div>  
        </>
    )
}