import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Read } from '@comp/crud';
import { menu, player } from '@store/store';
import Button from '@comp/button/buttons';
import maleImg from '@assets/images/characters/FantasyCharacters_h_warrior_male.png';
import femaleImg from '@assets/images/characters/FantasyCharacters_h_warrior_female.png'
import './index.scss';

const Index = () => {

    const navigate = useNavigate();

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [data, setData] = useState([]);
    
    const handleLogin = (id) => {
        storeMenu.activateContent('login')
        storePlayer.setPlayerId(id);
        navigate('/level');
    }

    const handleExit = () => {
        navigate('/menu');
    }

    useEffect(() => {
        Read('getAllProtagonist').then(response => setData(
      
            response.data.map((item, index) => {
                return (
                    <div className='character' onClick={() => handleLogin(item.id)} key={item.name + index}>
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
        <div className='grid gradient template-col-5 template-row-2'>
            <div className=''>
                {data}
                <Button
                    className='button'
                    onClick={() => handleExit()}>Exit</Button>
            </div>
            
        </div>    
    )
}

export default Index