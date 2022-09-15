import React, { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import CreateProtagonist from '@comp/menu/MenuCreateCharacter';
import { ShowCharacterList } from '@comp/menu/MenuShowCharacters';
import { Options } from '@comp/menu/MenuOptions';
import { MenuButton } from '@comp/menu/MenuButton';
import logoImg from '@shared/assets/images/svg/celtic.svg';
import './menu.scss';

export const Menu = () => {

    const storeMenu = menu(state => state);

    const [openMenu, setOpenMenu] = useState(null);

    useEffect(() => {
        switch (storeMenu.activeMenu) {
            case 'login':
                setOpenMenu(<ShowCharacterList />)
                break;
            case 'create':
                setOpenMenu(<CreateProtagonist />)
                break;
            case 'options':
                setOpenMenu(<Options />)
                break;
            default:
                setOpenMenu(null);
                break;
        }

    }, [storeMenu.activeMenu])

    return (
        <>
            
            <div className='menuContainer'>
                
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
                <div className='list'>{openMenu}</div>
            </div>
               
        </>
    )
}