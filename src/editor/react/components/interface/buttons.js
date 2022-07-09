import React from 'react';
import { build, ground, interfaceButtons } from '@devComp/store';
import { menu } from '@comp/store';
import { Create } from '@shared/components/Crud';
import { fetchURL } from '@shared/components/global';

export const ObjectsBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('objects');
    }

    return (
        <div onClick={handleClick} className='categoryBtn' data-tooltip='Objects'>
            <img src='./assets/images/icons/objects.png' alt='Show objects button' />
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
            <img src='./assets/images/icons/walls.png' alt='Show walls button' />
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
            <img src='./assets/images/icons/ground.png' alt='Show ground button' />
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
            <img src='./assets/images/icons/characters.png' alt='Show characters button' />
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
            <img src='./assets/images/svg/eraser_icon.svg' alt='Eraser button' title='Eraser button'/>
        </div>
    )

}

export const ExitBtn = () => {
    
    const storeMenu = menu(state => state);

    const handleExit = () => {
        storeMenu.isMapEditor(false);
    }

    return (
        <div onClick={handleExit} className='topBtn'>
            <img src='./assets/images/svg/exit_icon.svg' alt='Exit button' title='Exit button' />
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
        
        /*const url = `${fetchURL}/createLevel`;

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
            <img src='./assets/images/svg/save_icon.svg' alt='Save button' title='Save button'/>
        </div>
    )

}