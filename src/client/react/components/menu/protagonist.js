import React, { useEffect, useState } from 'react';
import { Read } from '@shared/components/Crud';
import { menu, player } from '@comp/store';
import CreateWindow from '@comp/menu/createProtagonist';
import useSound from 'use-sound';
import { fetchURL } from '@shared/global';

const Protagonist = () => {

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [characterList, setCharacterList] = useState([]);
  
    useEffect(() => {
        let url = `${fetchURL}/getAllProtagonist`;
        let list = [];

        Read(url)
            .then(items => {
                if (items.protagonist.length > 0) {
                    items.protagonist.map(item => {

                        list.push(
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
                            <p>Hp: {item.health} / {item.maxHealth} Str: {item.strength} Int: {item.intellect} Dex: {item.dexterity}</p>
                        </div>
                        )

                    });

                    setCharacterList(list);
                }
            })

    }, [storeMenu.showCreate])
    
    const handleLogin = (id) => {
        storeMenu.isLogin(true);
        storePlayer.setPlayerId(id);
    }

    const createClick = () => {
        storeMenu.createWindow(true);
    }

    const [play, {
        stop
    }] = useSound('assets/sounds/btnHover.mp3');


    return (
        <div className='protagonistContainer'>
            <img className='celticImg' src='assets/images/svg/celtic.svg' alt='logo'/>
            <h1>Äventyret</h1>
            <div className='box'>
                
                <div className='list'>
                    {
                        (storeMenu.showCreate) ? < CreateWindow />: characterList
                    }
                </div>
            </div>

            {
                (storeMenu.showCreate) ? '' : <button className='createHero' type='button' onClick = {
                    createClick
                } > Skapa hjälte </button> }
        </div>
    )
}

export default Protagonist;