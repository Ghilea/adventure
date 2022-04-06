import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import Read from '../crud/read';
import Create from '../crud/create';
import { StoreContext } from './store';

const Protagonist = () => {

    const [attribute, setAttribute] = useState({
        strength: 0,
        intellect: 0,
        dexterity: 0
    });

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

    const handleAttribute = (event) => {

        let str = attribute.strength,
            int = attribute.intellect,
            dex = attribute.dexterity;

        switch (event.target.id) {
            case 'strMin':
                str -= 1;
                break;
            case 'strMax':
                str += 1;
                break;
            case 'intMin':
                int -= 1;
                break;
            case 'intMax':
                int += 1;
                break;
            case 'dexMin':
                dex -= 1;
                break;
            case 'dexMax':
                dex += 1;
                break;
        }

        setAttribute(attribute => ({
            ...attribute,
            strength: str,
            intellect: int,
            dexterity: dex
        })) 
    }

    const handleImg = (event) => {
        setCharacter({
            ...character,
            img: event.target.id
        });
    }

    const handleBack = () => {
        setStore((store) => ({
            ...store,
            showCreate: false
        }));
    }

    const handleCreate = () => {
        const url = `http://localhost:1234/createProtagonist`;
        
        if(character.name === null || character.img === null){
            console.log('Fyll i ett namn och välj en avatar');
        }else{
            Create(url, {
                name: character.name,
                img: character.img,
                str: attribute.strength,
                int: attribute.intellect,
                dex: attribute.dexterity
            });
            setStore((store) => ({
                ...store,
                showCreate: false
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
                    <img id='FantasyCharacters_h_warrior_female' src='assets/images/fantasycharacters/FantasyCharacters_h_warrior_female.png'/>
                </div>

                <div onClick = {
                    handleImg
                }
                className = {
                    `button ${(character.img === 'FantasyCharacters_h_warrior_male') ?
                    'chooseAvatar' : ''} `
                } >
                    <img id='FantasyCharacters_h_warrior_male' src='assets/images/fantasycharacters/FantasyCharacters_h_warrior_male.png'/>
                </div>

            </div>

            <div className='stats'>
                <div className='btnSection'>
                    <button onClick={handleAttribute} id='strMin' className='gainBtn'>-</button>
                    <p className='str'>Str: {attribute.strength}</p>
                    <button onClick={handleAttribute} id='strMax' className='gainBtn'>+</button>
                </div>
                
                <div className='btnSection'>
                    <button onClick={handleAttribute} id='intMin' className='gainBtn'>-</button>
                    <p className='int'>Int: {attribute.intellect}</p>
                    <button onClick={handleAttribute} id='intMax' className='gainBtn'>+</button>
                </div>

                <div className='btnSection'>
                    <button onClick={handleAttribute} id='dexMin' className='gainBtn'>-</button>
                    <p className='dex'>Dex: {attribute.dexterity}</p>
                    <button onClick={handleAttribute} id='dexMax' className='gainBtn'>+</button>
                </div>
            </div>

            <button onClick={handleCreate}>Skapa</button>
        </div>
    )
}

export default Protagonist;