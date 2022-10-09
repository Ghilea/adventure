import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Read } from '@comp/crud';
import { menu, player } from '@store/store';
import ExitButton from '@comp/button/ExitButton';
import useAudio from '@hooks/useAudio';
import buttonHover from '@assets/sounds/btnHover.mp3';
import maleImg from '@assets/images/characters/FantasyCharacters_h_warrior_male.png';
import femaleImg from '@assets/images/characters/FantasyCharacters_h_warrior_female.png'
import './index.scss';

const Index = () => {

    const navigate = useNavigate();

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [data, setData] = useState([]);

    const [play] = useAudio(buttonHover)
    
    const handleLogin = (id) => {
        storeMenu.activateContent('login')
        //storeMenu.isLoadingDone(false);
        storePlayer.setPlayerId(id);
        navigate('/level');
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
        <div className='boxMenuContainer'>
            {data}
            <ExitButton>Exit</ExitButton>
        </div>    
    )
}

export default Index