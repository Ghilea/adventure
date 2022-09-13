import React, { useEffect, useState } from 'react';
import { menu } from '@comp/store';
import CreateProtagonist from '@comp/menu/createProtagonist';
import { ShowCharacterList } from '@comp/menu/ShowCharacterList';
import { Options } from '@comp/menu/options';
import { Button } from '@helper/Button';
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
                setOpenMenu(null)
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
                    <Button active='login'>Login</Button>

                    <Button active='create'>Create Protagonist</Button>

                    <Button active='options'>Options</Button>

                    <Button active='editor'>Map Editor</Button>
                </div>
                
            </div>

            <div className={`${(openMenu === null) ? 'hide' : 'boxMenuContainer'}`}>
                <div className='list'>{openMenu}</div>
            </div>
               
        </>
    )
}