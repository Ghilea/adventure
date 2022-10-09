import React from 'react';
import { useNavigate } from 'react-router-dom';
import { build, ground, interfaceButtons } from '@store/editor';
import { menu } from '@store/store';
import { Create } from '@comp/crud';

//images
import saveButton from '@assets/images/svg/save_icon.svg';
import exitButton from '@assets/images/svg/exit_icon.svg';
import wallButton from '@assets/images/icons/walls.png';
import groundButton from '@assets/images/icons/ground.png';
import objectButton from '@assets/images/icons/objects.png';
import characterButton from '@assets/images/icons/characters.png';
import eraserButton from '@assets/images/svg/eraser_icon.svg';
import rotateButton from '@assets/images/svg/side_rotate_icon.svg';
import settingsButton from '@assets/images/svg/settings.svg';

export const ObjectsBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('objects');
    }

    return (
        <div onClick={handleClick} className='categoryBtn' data-tooltip='Objects'>
            <img src={objectButton} alt='Show objects button' />
        </div>
    )

}

export const WallBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('walls');
    }

    return (
        <div onClick={handleClick} className='categoryBtn' data-tooltip='Walls'>
            <img src={wallButton} alt='Show walls button' />
        </div>
    )

}

export const GroundBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('ground');
    }

    return (
        <div onClick={handleClick} className='categoryBtn' data-tooltip='Ground'>
            <img src={groundButton} alt='Show ground button' />
        </div>
    )

}

export const CharactersBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('characters');
    }

    return (
        <div onClick={handleClick} className='categoryBtn' data-tooltip='Characters'>
            <img src={characterButton} alt='Show characters button' />
        </div>
    )

}

export const RemoveObjectBtn = () => {
    
    const store = interfaceButtons(state => state);
    const storeBuild = build(state => state);

    const handleClick = () => {
        store.isRemove(true);
        console.log('selected: ', storeBuild.selected)
        storeBuild.removeObject(storeBuild.selected)
        storeBuild.selectedObject(null)
    }

    return (
        <div onClick={handleClick} className='topBtn'>
            <img src={eraserButton} alt='Eraser button' title='Eraser button'/>
        </div>
    )

}

export const RotateObjectBtn = () => {
    
    const storeBuild = build(state => state);

    const handleRotateLeft = () => {
        console.log('selected: ', storeBuild.object)
        storeBuild.updateRotationObject(storeBuild.selected, -155)
    }

    return (
        <>
            <div onClick={handleRotateLeft} className='topBtn'>
                <img className='rotateLeftBtn' src={rotateButton} alt='Rotate left button' title='Rotate left'/>
                
            </div>
            <div onClick={handleRotateLeft} className='topBtn'>
                <img src={rotateButton} alt='Rotate right button' title='Rotate right'/>
            </div>
        </>
        
    )

}

export const Settings = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('settings');
    }

    return (
        <div onClick={handleClick} className='categoryBtn settingsPanelBtn' data-tooltip='Settings'>
            <img src={settingsButton} alt='Show settings button' />
        </div>
    )

}

export const ExitBtn = () => {
    
    const navigate = useNavigate();
    //const storeMenu = menu(state => state);

    const handleExit = () => {
        navigate('/menu');
    }

    return (
        <div onClick={handleExit} className='topBtn'>
            <img src={exitButton} alt='Exit button' title='Exit button' />
        </div>
    )

}

export const SaveLevelBtn = () => {
    
    const storeBuild = build(state => state);
    const storeGround = ground(state => state);

    const handleSave = () => {
        console.log({
            'walls': storeBuild.object,
            'ground': [storeGround.x, storeGround.y, storeGround.texture],
            'player': storeBuild.object
        })
        
        /*const url = 'createLevel';

        Create(url, {
            content: JSON.stringify({
                'walls': storeBuild.walls,
                'ground': [storeGround.x, storeGround.y, storeGround.texture],
                'player': storePlayer.playerMark
            })
        });*/
    }

    return (
        <div onClick={handleSave} className='topBtn'>
            <img src={saveButton} alt='Save button' title='Save button'/>
        </div>
    )

}