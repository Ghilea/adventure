import React, { useEffect, useState } from 'react';
import { Create } from '@shared/components/Crud';
import { player, menu } from '@comp/store';
import { Points } from '@comp/interface/Points';

const Protagonist = () => {

    const storePlayer = player(state => state);
    const storeMenu = menu(state => state);
    
    const [character, setCharacter] = useState({
        name: null,
        img: null
    });
    
    useEffect(() => {
        storePlayer.setPoints(5);
    }, [])

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
        storeMenu.createWindow(false);
    }

    const handleCreate = () => {
        const url = `http://localhost:3000/createProtagonist`;
        
        if(character.name === null || character.img === null){
            console.log('Fyll i ett namn och välj en avatar');
        }else{
            Create(url, {
                name: character.name,
                img: character.img,
                points: storePlayer.points,
                str: storePlayer.str,
                int: storePlayer.int,
                dex: storePlayer.dex
            });
            storeMenu.createWindow(false);
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
                <div className='showPoints'>Poäng: {storePlayer.points}</div>
                <Points />
            </div>

            <button onClick={handleCreate}>Skapa</button>
        </div>
    )
}

export default Protagonist;