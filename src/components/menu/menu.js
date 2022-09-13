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

    const [openMenu, setOpenMenu] = useState({
        active: null,
        opened: null
    });

    useEffect(() => {
        switch (storeMenu.activeMenu) {
            case 'login':
                if(openMenu.active === storeMenu.activeMenu) {
                    setOpenMenu({active: null, opened: null})
                }else{
                    setOpenMenu({active: storeMenu.activeMenu, opened: <ShowCharacterList />})
                }
                
                break;
            case 'create':
                setOpenMenu({active: storeMenu.activeMenu, opened: <CreateProtagonist />})
                break;
            case 'options':
                setOpenMenu({active: storeMenu.activeMenu, opened: <Options />})
                break;
            default:
                setOpenMenu({active: null, opened: null})
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

            <div className={`${(openMenu.active === null) ? 'hide' : 'boxMenuContainer'}`}>
                <div className='list'>{openMenu.opened}</div>
            </div>
               
        </>
    )
}