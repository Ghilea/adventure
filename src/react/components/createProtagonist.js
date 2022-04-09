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
        dexterity: 0,
        points: 5
    });

    const [disabled, setDisabled] = useState([{
        strMin: false,
        strMax: false,
        intMin: false,
        intMax: false,
        dexMin: false,
        dexMax: false
    }]);

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
            dex = attribute.dexterity,
            p = attribute.points;

        switch (event.target.id) {
            case 'strMin':
                p += 1
                str -= 1;
                break;
            case 'strMax':
                p -= 1
                str += 1;
                break;
            case 'intMin':
                p += 1
                int -= 1;
                break;
            case 'intMax':
                p -= 1
                int += 1;
                break;
            case 'dexMin':
                p += 1
                dex -= 1;
                break;
            case 'dexMax':
                p -= 1
                dex += 1;
                break;
        }
    
        setAttribute(attribute => ({
            ...attribute,
            points: p,
            strength: str,
            intellect: int,
            dexterity: dex
        })) 

    }

    useEffect(() => {
        //min
        if (attribute.strength <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: true
            }));
        } else if (attribute.strength >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: false
            }));
        }

        if (attribute.intellect <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: true
            }));
        } else if (attribute.intellect >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: false
            }));
        }

        if (attribute.dexterity <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: true
            }));
        } else if (attribute.dexterity >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: false
            }));
        }

        //max
        if (attribute.points <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: true,
                intMax: true,
                dexMax: true
            }));
        } else if (attribute.points >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: false,
                intMax: false,
                dexMax: false
            }));
        }

    }, [attribute])

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
                points: attribute.points,
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
                <div className='btnSection'>
                    <button onClick={handleAttribute} id='strMin' className='gainBtn' disabled={disabled.strMin}>-</button>
                    <p className='str'>Str: {attribute.strength}</p>
                    <button onClick={handleAttribute} id='strMax' className='gainBtn' disabled={disabled.strMax}>+</button>
                </div>
                
                <div className='btnSection'>
                    <button onClick={handleAttribute} id='intMin' className='gainBtn' disabled={disabled.intMin}>-</button>
                    <p className='int'>Int: {attribute.intellect}</p>
                    <button onClick={handleAttribute} id='intMax' className='gainBtn' disabled={disabled.intMax}>+</button>
                </div>

                <div className='btnSection'>
                    <button onClick={handleAttribute} id='dexMin' className='gainBtn' disabled={disabled.dexMin}>-</button>
                    <p className='dex'>Dex: {attribute.dexterity}</p>
                    <button onClick={handleAttribute} id='dexMax' className='gainBtn' disabled={disabled.dexMax}>+</button>
                </div>
            </div>

            <button onClick={handleCreate}>Skapa</button>
        </div>
    )
}

export default Protagonist;