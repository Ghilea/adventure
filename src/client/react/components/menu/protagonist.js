import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import { Read } from '../Crud';
import { StoreContext } from '../store';
import CreateWindow from './createProtagonist';
import useSound from 'use-sound';

const Protagonist = () => {

    const [store, setStore] = useContext(StoreContext);
    const [characterList, setCharacterList] = useState([]);
  
    useEffect(() => {
        let url = `http://localhost:3000/getAllProtagonist`;
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

    }, [store.menu.showCreate])
    
    const handleLogin = (id) => {
        setStore((store) => ({
            ...store,
            menu: {
                ...store.menu,
                login: true
            },
            player: {
                ...store.player,
                playerId: id
            }
        }))
    }

    const createClick = () => {
        setStore((store) => ({
            ...store,
            menu: {
                ...store.menu,
                showCreate: true
            }
        }))
    }

    const [play, {
        stop
    }] = useSound('assets/effects/btnHover.mp3');


    return (
        <div className='protagonistContainer'>
            <h1 className='fadeIn'>Äventyret</h1>
            <div className='box'>
                
                <div className='list fadeIn'>
                    {
                        (store.menu.showCreate) ? < CreateWindow />: characterList
                    }
                </div>
            </div>

            {
                (store.menu.showCreate) ? '' : <button className='fadeIn createHero' type='button' onClick = {
                    createClick
                } > Skapa hjälte </button> }
            
            <img className='celticImg fadeIn' src='assets/images/svg/celtic.svg' alt='logo'/>
        </div>
    )
}

export default Protagonist;