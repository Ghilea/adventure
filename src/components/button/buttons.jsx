import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Create } from '@comp/crud';

const Button = ({type, img, className, onClick}) => {

    return (
        <button className={className} onClick={onClick} data-tooltip={type}>
            <img  src={img} alt={`Show ${type} button`} />
        </button>
    )
}

export default Button

/* export const ObjectsBtn = () => {
    
    const store = interfaceButtons(state => state);

    const handleClick = () => {
        store.changeCategoryBtn('objects');
    }

    return (
        <div onClick={handleClick} className='categoryBtn' data-tooltip='Objects'>
            <img src={objectButton} alt='Show objects button' />
        </div>
    )

} */


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