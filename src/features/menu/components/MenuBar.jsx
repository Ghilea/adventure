import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAudio from '@hooks/useAudio';
import { menu } from '@store/store';
import { MenuCreateCharacter } from './createCharacters/menuCreateCharacter';
import { MenuShowCharacters } from './viewCharacters/menuShowCharacters';
import { MenuOptions } from './options/MenuOptions';
import { MenuButton } from './button/MenuButton';
import logoImg from '@assets/images/svg/celtic.svg';
import menuMusic from '@assets/music/menu.mp3';

export const MenuBar = () => {

    const navigate = useNavigate();

    const storeMenu = menu(state => state);

    const [openMenu, setOpenMenu] = useState(null);

    const [play] = useAudio(menuMusic, {
        volume: 0.4
    });

    useEffect(() => {
        play();
    }, [])

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
            case 'exit':
                window.opener = null;
                window.open("", "_self");
                window.close();
                break;
            case 'editor':
                //storeMenu.activateContent('editor');
                navigate('/editor');
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

                    <MenuButton open='exit'>Exit Game</MenuButton>
                </div>
                
            </div>

            <div className={`${(openMenu === null) ? 'hide' : 'boxMenuContainer'}`}>
                {openMenu}
            </div>  
        </>
    )
}