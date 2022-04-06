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
        let url = `http://localhost:1234/getAllProtagonist`;

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
            login: true,
            playerId: id
        }))
    }

    const createClick = () => {
        setStore((store) => ({
            ...store,
            showCreate: true
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
                <img src={`assets/images/fantasycharacters/${item.img}.png`} />
                <h2>
                    {item.name}
                </h2>
                <p>Hp: {item.health} Str: {item.strength} Int: {item.intellect} Dex: {item.dexterity}</p>
            </div>
            )

        });
    }

    return (
        <div className='protagonistContainer'>
            
            <div className='box'>
                <h1>Välkommen</h1>
                <div className='list'>
                    {
                        (store.showCreate) ? < CreateWindow />: characterWindow
                    }
                </div>
            </div>

            {
                (store.showCreate) ? '' : < button onClick = {
                    createClick
                } > Skapa hjälte </button> }
            
            <img className='celticImg' src='assets/images/celtic.svg' />
        </div>
    )
}

export default Protagonist;