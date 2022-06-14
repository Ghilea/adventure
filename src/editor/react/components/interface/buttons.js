import React from 'react';
import { build, player, ground, interfaceButtons } from '@devComp/store';
import { menu } from '@comp/store';
import { Create } from '@shared/components/Crud';
import { fetchURL } from '@shared/components/global';

export const WallBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('walls');
    }

    return (
        <div onClick={handleClick} className='categoryBtn'>Walls</div>
    )

}

export const GroundBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('ground');
    }

    return (
        <div onClick={handleClick} className='categoryBtn'>Ground</div>
    )

}

export const CharactersBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('characters');
    }

    return (
        <div onClick={handleClick} className='categoryBtn'>Characters</div>
    )

}

export const ExitBtn = () => {
    
    const storeMenu = menu(state => state);

    const handleExit = () => {
        storeMenu.isMapEditor(false);
    }

    return (
        <div onClick={handleExit} className='categoryBtn'>Exit</div>
    )

}

export const SaveLevelBtn = () => {
    
    const storeBuild = build(state => state);
    const storePlayer = player(state => state);
    const storeGround = ground(state => state);

    const handleSave = () => {
        console.log({
            'walls': storeBuild.walls,
            'ground': [storeGround.x, storeGround.y, storeGround.texture],
            'player': storePlayer.playerMark
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
        <div onClick={handleSave} className='categoryBtn'>Save</div>
    )

}