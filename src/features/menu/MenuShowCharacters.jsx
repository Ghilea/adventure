import { useEffect, useState } from 'react';
import { Read } from '@shared/components/Crud';
import { menu, player } from '@comp/store';
import { ExitButton } from '@comp/menu/button/ExitButton';
import useAudio from '@comp/misc/useAudio';
import buttonHover from '@shared/assets/sounds/btnHover.mp3';
import maleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_male.png';
import femaleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_female.png'
import './MenuShowCharacters.scss';

export const MenuShowCharacters = () => {

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [data, setData] = useState([]);

    const [play] = useAudio(buttonHover)
    
    const handleLogin = (id) => {
        storeMenu.activateContent('login')
        //storeMenu.isLoadingDone(false);
        storePlayer.setPlayerId(id);
    }

    useEffect(() => {
        Read('getAllProtagonist').then(response => setData(
      
            response.data.map((item, index) => {
                return (
                    <div className='character' onClick={() => handleLogin(item.id)} onMouseEnter={() => play()} key={item.name + index}>
                        <img src = {(item.gender === 'Male') ? maleImg : femaleImg} />
                        <h2>{item.name} (<span className='levelTitle'>level {item.level}</span>)</h2>
                        <p>Hp: {item.health} / {item.maxHealth}</p>
                        <p>Str: {item.strength} Int: {item.intellect} Dex: {item.dexterity}</p>
                    </div>
                );
            })
            
        ));
    }, [])

    return (    
        <>
            {data}
            <ExitButton>Exit</ExitButton>
        </>    
    )
}