import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import Read from '../crud/read';
import Create from '../crud/create';
import { StoreContext } from './store';
import Points from './points';

const Protagonist = () => {

    const [character, setCharacter] = useState({
        name: null,
        img: null
    });

    const [store, setStore] = useContext(StoreContext);
       
    const handleInput = (event) => {
        setCharacter({
            ...character,
            name: event.target.value,
        });
        
    }; 

    const handleImg = (event) => {
        setCharacter({
            ...character,
            img: event.target.id
        });
    }

    const handleBack = () => {
        setStore((store) => ({
            ...store,
            menu: {
                ...store.menu,
                showCreate: false
            }
        }));
    }

    const handleCreate = () => {
        const url = `http://localhost:3000/createProtagonist`;
        
        if(character.name === null || character.img === null){
            console.log('Fyll i ett namn och välj en avatar');
        }else{
            Create(url, {
                name: character.name,
                img: character.img,
                points: attribute.points,
                str: attribute.strength,
                int: attribute.intellect,
                dex: attribute.dexterity
            });
            setStore((store) => ({
                ...store,
                menu: {
                    ...store.menu,
                    showCreate: false
                }
            }))
        }
    }

    return (
        <div className='createWindow'>
            <button onClick={handleBack} title='Tillbaka' className='goBack_characterWindow'></button>

            <label form='name'>Namn</label>
            <input onChange={handleInput} type='text' id='name' placeholder='Din hjälte'/>
            
            <div className='avatars'>
                <div onClick = {
                    handleImg
                }
                className = {
                    `button ${(character.img === 'FantasyCharacters_h_warrior_female') ?
                    'chooseAvatar' : ''} `
                } >
                    <img id='FantasyCharacters_h_warrior_female' src='assets/images/characters/FantasyCharacters_h_warrior_female.png'/>
                </div>

                <div onClick = {
                    handleImg
                }
                className = {
                    `button ${(character.img === 'FantasyCharacters_h_warrior_male') ?
                    'chooseAvatar' : ''} `
                } >
                    <img id='FantasyCharacters_h_warrior_male' src='assets/images/characters/FantasyCharacters_h_warrior_male.png'/>
                </div>

            </div>

            <div className='stats'>
                <div className='showPoints'>Poäng: {attribute.points}</div>
                <Points />
            </div>

            <button onClick={handleCreate}>Skapa</button>
        </div>
    )
}

export default Protagonist;