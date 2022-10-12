import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Create } from '@comp/crud';
import { player } from '@store/store';
import { PointButton } from '@features/interface/components/stats/PointButton';
import Modal from '@comp/modal';
import Button from '@comp/button/buttons';
import maleImg from '@assets/images/characters/FantasyCharacters_h_warrior_male.png';
import femaleImg from '@assets/images/characters/FantasyCharacters_h_warrior_female.png'
import './index.scss';

const Index = () => {

    const navigate = useNavigate();

    const storePlayer = player(state => state);
 
    const [character, setCharacter] = useState({
        name: null,
        avatar: null,
        gender: 'male'
    });

    const [modal, setModal] = useState({
        open: false,
        title: null,
        message: null
    });

    const [available, setAvailable] = useState(5);

    const selectAvatar = (e) => {
        setCharacter({
            ...character,
            avatar: 1
        });
    }

    const handleName = (e) => {
        console.log(e.target.value);
        setCharacter({
            ...character,
            name: e.target.value,
        });
    }

    const handleExit = () => {
        navigate('/menu');
    }

    const handleCreate = (e) => {

        if(character.name === null || character.avatar === null){
            setModal((state) => ({
                ...state,
                open: true,
                title: 'Check your condition',
                message: 'Your protagonist need to have a name and a avatar!'
            }));

            setTimeout(() => {
                setModal((state) => ({
                    ...state,
                    open: false
                }))
            }, 2000);
        }else{
            Create('createProtagonist', {
                name: character.name,
                img: character.avatar,
                gender: character.gender,
                points: storePlayer.ability.available,
                str: storePlayer.ability.strength,
                int: storePlayer.ability.intellect,
                dex: storePlayer.ability.dexterity,
                con: storePlayer.ability.constitution,
                wis: storePlayer.ability.wisdom,
                cha: storePlayer.ability.charisma
            });
        }
    }

    const availableData = (availableData) => {
        setAvailable(available + availableData)
    }

    const abilityData = (abilityData, modifierData) => {
        console.log(abilityData, modifierData)
    }

    return (
        <div className='boxMenuContainer'>
            <div className='createWindow'>
                
                <div className='avatarContainer'>
                    <div onClick={(e) => selectAvatar(e)} className={`${(character.avatar == 1) ? 'avatar chooseAvatar' : 'avatar'} `}>
                        <img src={femaleImg} alt='picture of hero avatar' />
                    </div>
                </div>

                <div className='createHeroName'>
                    <input onChange={(e) => handleName(e)} type='text' id='name' placeholder='Name of your hero' />
                </div>
                
                <div className='createHeroState'>
                    <div className='createHeroStateHP'>50 / 50</div>
                </div>

                <div className='createHeroInformation'>
                    <h2 className='createTitle'>Background story</h2>
                    <textarea spellCheck={false} placeholder='It´s optimal to write your protagonist story here...'></textarea>
                </div>
                
                <div className='abilityAvailable'>
                    <h2 className='statsTitle'>Available points</h2>
                    <div className='showPoints'>{available}</div>
                </div>

                <div className='statsContainer'>      
                    <PointButton available={available} availableFunc={availableData} abilityFunc={abilityData}>Strength</PointButton>
                    <PointButton available={available} availableFunc={availableData} abilityFunc={abilityData}>Intellect</PointButton>
                    <PointButton available={available} availableFunc={availableData} abilityFunc={abilityData}>Dexterity</PointButton>
                    <PointButton available={available} availableFunc={availableData} abilityFunc={abilityData}>Constitution</PointButton>
                    <PointButton available={available} availableFunc={availableData} abilityFunc={abilityData}>Wisdom</PointButton>
                    <PointButton available={available} availableFunc={availableData} abilityFunc={abilityData}>Charisma</PointButton>
                </div>

                <div className='buttonContainer'>
                    <button type='button' onClick={(e) => handleCreate(e)}>Create</button>

                    <Button
                        className='button'
                        onClick={() => handleExit()}>Exit</Button>
                </div>

            </div>

            <Modal open={modal.open} title={modal.title}>{modal.message}</Modal>
        </div>
       
    )
}

export default Index