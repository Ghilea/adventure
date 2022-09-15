import React, { useEffect, useState } from 'react';
import { Read } from '@shared/components/Crud';
import { menu, player } from '@comp/store';
import { fetchURL } from '@shared/components/global';
import useSound from 'use-sound';
import buttonHover from '@shared/assets/sounds/btnHover.mp3';

export const ShowCharacterList = () => {

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [data, setData] = useState([]);

    const [play, {stop}] = useSound(buttonHover);
  
    const url = `${fetchURL}/getAllProtagonist`;

    const handleLogin = (id) => {
        storeMenu.isLoadingDone(false);
        storeMenu.isLoginSuccess(true);
        storePlayer.setPlayerId(id);
    }

    useEffect(() => {
        Read(url).then(response => setData(
      
            response.data.map((item, index) => {
                return (
                    <div className='character' onClick={() => handleLogin(item.id)} onMouseEnter={() => play()} onMouseLeave={() => stop()} key={item.name + index}>
                        <img src={`assets/images/characters/${item.img}.png`} />
                        <h2>
                            {item.name} (<span className='levelTitle'>level {item.level}</span>)
                        </h2>
                        <p>Hp: {item.health} / {item.maxHealth} </p>
                        <p>
                            Str: {item.strength} Int: {item.intellect} Dex: {item.dexterity}
                        </p>
                    </div>
                );
            })
            
        ));
    }, [])

    return (    
        <>
            {data}
        </>    
    )
}