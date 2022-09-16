import React, { useEffect, useState } from 'react';
import { Create } from '@shared/components/Crud';
import { player } from '@comp/store';
import { PointButton } from '@comp/interface/stats/PointButton';
import maleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_male.png';
import femaleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_female.png'
import './MenuCreateCharacter.scss';

export const MenuCreateCharacter = () => {

    const storePlayer = player(state => state);
    
    const [character, setCharacter] = useState({
        name: null,
        avatar: null
    });
    
    useEffect(() => {
        storePlayer.setAvailablePoints(25);
    }, [])

    const selectAvatar = (e) => {
        console.log(e.target.id)
        setCharacter({
            ...character,
            avatar: e.target.id
        });
    }

    const handleCreate = (e) => {
        
        setCharacter({
            ...character,
            name: e.target.value,
        });

        if(character.name === null || character.avatar === null){
            console.log('Fyll i ett namn och välj en avatar');
        }else{
            /*Create('createProtagonist', {
                name: character.name,
                img: character.img,
                points: storePlayer.points,
                str: storePlayer.str,
                int: storePlayer.int,
                dex: storePlayer.dex
            });*/
        }
    }

    return (
        <div className='createWindow'>
    
            <label form='name'>Hero name</label>
            <input type='text' id='name' placeholder='Name of your hero'/>
            
            <div className='avatars'>
                <div onClick = {(e) => selectAvatar(e)} className = {
                    `${(character.avatar == 1) ? 'button chooseAvatar' : 'button'} `} >
                    <img id={1} src={femaleImg} alt='picture of hero avatar' />
                </div>

                <div onClick = {(e) => selectAvatar(e)} className = {
                    `${(character.avatar == 2) ? 'button chooseAvatar' : 'button'} `} >
                    <img id={2} src={maleImg} alt='picture of hero avatar' />
                </div>

            </div>

            <div className='statsContainer'>

                <div className='showPoints'>Available points: {storePlayer.coreStats.available}</div>
                    
                <div className='pointsContainer'>
                    <PointButton>Strength</PointButton>
                    <PointButton>Intellect</PointButton>
                    <PointButton>Dexterity</PointButton>
                    <PointButton>Constitution</PointButton>
                    <PointButton>Wisdom</PointButton>
                    <PointButton>Charisma</PointButton>
                </div>
            </div>

            <button type='button' onClick={(e) => handleCreate(e)}>Create</button>
        </div>
    )
}