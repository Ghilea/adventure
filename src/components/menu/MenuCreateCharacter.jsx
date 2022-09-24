import React, { useEffect, useState } from 'react';
import { Create } from '@shared/components/Crud';
import { player, menu } from '@comp/store';
import { PointButton } from '@comp/interface/stats/PointButton';
import maleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_male.png';
import femaleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_female.png'
import './MenuCreateCharacter.scss';

export const MenuCreateCharacter = () => {

    const storePlayer = player(state => state);
    const storeMenu = menu(state => state);
    
    const [character, setCharacter] = useState({
        name: null,
        avatar: null,
        gender: 'male'
    });
    
    useEffect(() => {
        storePlayer.setAvailablePoints(25);
    }, [])

    const selectAvatar = (e) => {
        setCharacter({
            ...character,
            avatar: 1
        });
    }

    const handleExit = () => {
        storeMenu.activateMenu(null)
    }

    const handleName = (e) => {
        console.log(e.target.value);
        setCharacter({
            ...character,
            name: e.target.value,
        });
    }

    const handleCreate = (e) => {

        if(character.name === null || character.avatar === null){
            console.log('Fyll i ett namn och välj en avatar');
        }else{
            Create('createProtagonist', {
                name: character.name,
                img: character.avatar,
                gender: character.gender,
                points: storePlayer.coreStats.available,
                str: storePlayer.coreStats.strength,
                int: storePlayer.coreStats.intellect,
                dex: storePlayer.coreStats.dexterity,
                con: storePlayer.coreStats.constitution,
                wis: storePlayer.coreStats.wisdom,
                cha: storePlayer.coreStats.charisma
            });
        }
    }

    return (
        <div className='createWindow'>
            
            <div onClick = {(e) => selectAvatar(e)} className = {`${(character.avatar == 1) ? 'avatar chooseAvatar' : 'avatar'} `}>
                <img src={femaleImg} alt='picture of hero avatar' />
            </div>
            
            <input className='createHeroName' onChange={(e) => handleName(e)} type='text' id='name' placeholder='Name of your hero'/>
            
            <div className='createHeroState'>
                <div className='createHeroStateHP'>50 / 50</div>
            </div>

            <div className='createHeroInformation'>
                <div className='createHeroInformation_box1'>
                    <div className='showPoints'>{storePlayer.coreStats.available} </div>
                    Available points
                </div>
            </div>
            
            <div className='statsContainer'>              
                <PointButton>Strength</PointButton>
                <PointButton>Intellect</PointButton>
                <PointButton>Dexterity</PointButton>
                <PointButton>Constitution</PointButton>
                <PointButton>Wisdom</PointButton>
                <PointButton>Charisma</PointButton>
            </div>

            <button className='createButton' type='button' onClick={(e) => handleCreate(e)}>Create</button>
            <button className='exitButton' type='button' onClick={() => handleExit()}>Exit</button>
        </div>
    )
}