import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import Read from '../crud/read';
import { StoreContext } from './store';
import CreateWindow from './createProtagonist';
import useSound from 'use-sound';

const Protagonist = () => {

    const [protagonist, setProtagonist] = useState([]);
    const [store, setStore] = useContext(StoreContext);
   
    let characterWindow = [];

    useEffect(() => {
        let url = `http://localhost:3000/getAllProtagonist`;

        let mounted = true;

        Read(url)
            .then(items => {
                if (mounted && items.protagonist.length > 0) {
                    setProtagonist(items.protagonist)
                }
            })
        return () => mounted = false;
    }, useContext(StoreContext))
    
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

    if(protagonist.length > 0){

            protagonist.map(item => {

            characterWindow.push(
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
                <p>Hp: {item.health} Str: {item.strength} Int: {item.intellect} Dex: {item.dexterity}</p>
            </div>
            )

        });
    }

    return (
        <div className='protagonistContainer'>
            <h1 className='fadeIn'>Äventyret</h1>
            <div className='box'>
                
                <div className='list fadeIn'>
                    {
                        (store.menu.showCreate) ? < CreateWindow />: characterWindow
                    }
                </div>
            </div>

            {
                (store.menu.showCreate) ? '' : < button className='fadeIn createHero' type='button' onClick = {
                    createClick
                } > Skapa hjälte </button> }
            
            <img className='celticImg fadeIn' src='assets/images/svg/celtic.svg' alt='logo'/>
        </div>
    )
}

export default Protagonist;