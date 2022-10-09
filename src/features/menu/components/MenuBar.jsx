import { useEffect, useState } from 'react';
import useAudio from '@hooks/useAudio';
import { MenuButton } from './MenuButton';
import logoImg from '@assets/images/svg/celtic.svg';
import menuMusic from '@assets/music/menu.mp3';

export const MenuBar = () => {

    const [play] = useAudio(menuMusic, {
        volume: 0.4
    });

    const [active, setActive] = useState(false);

    useEffect(() => {
        if(!active){
            setActive(true)
            play();
        }
        
    }, [])

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