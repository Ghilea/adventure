import React, { useEffect, useState } from 'react';
import { Read } from '@shared/components/Crud';
import { menu, player } from '@comp/store';
import { fetchURL } from '@shared/global';
import useSound from 'use-sound';

export const CharacterList = () => {

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [characterList, setCharacterList] = useState([]);

    const [play, {stop}] = useSound('assets/sounds/btnHover.mp3');
  
    useEffect(() => {
        const url = `${fetchURL}/getAllProtagonist`;

        Read(url)
            .then(items => {
                if (items.protagonist.length > 0) {
                    items.protagonist.map(item => {
                        setCharacterList((state) => ([
                            ...state,
                            <div onClick = {() =>
                                handleLogin(item.id)
                            }
                            onMouseEnter = {
                                play
                            }
                            onMouseLeave = {
                                stop
                            }
                            key = {
                                item.name
                            }
                            className = 'character' >
                                <img src={`assets/images/characters/${item.img}.png`} />
                                <h2>
                                    {item.name} (<span className='levelTitle'>level {item.level}</span>)
                                </h2>
                                <p>Hp: {item.health} / {item.maxHealth} </p>
                                <p>
                                    Str: {item.strength} Int: {item.intellect} Dex: {item.dexterity}
                                </p>
                            </div>
                        ]))
                    });

                }
            })

    }, [])
    
    const handleLogin = (id) => {
        storeMenu.isLogin(true);
        storePlayer.setPlayerId(id);
    }

    return (     
        <div className='list'>
            {characterList}
        </div>
    )
}