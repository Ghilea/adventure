import React, { useEffect, useState, useRef } from 'react';
import { player } from '@comp/store';
import './PointButton.scss';

export const PointButton = ({children}) => {

    const storePlayer = player(state => state);
    
    const available = storePlayer.ability.available;
    const type = children.toLowerCase();
    const storeType = storePlayer.ability[type].points;

    const storeModifier = storePlayer.ability[type].modifier;

    function increaseAttribute () {
        console.log(storeModifier, storeType)
        if (available > 0) {
            storePlayer.updateAbility(available - 1, type, storeType + 1);
        }
    }

    function decreaseAttribute () {
        if (storeType > 0){
            storePlayer.updateAbility(available + 1, type, storeType - 1);
        } 

        
    }

    return (
        <div className='btnSection'>
            <div className='ability'>
                <p className='abilityTitle'>Modifier</p>
                <p className='abilityModifier'>{storeModifier}</p>
            </div>
            <div className='ability'>
                <p className='abilityTitle'>{children}</p> 
                <p className='abilityPoints'>{storeType}</p>
            </div>

            <div className='abilityButtonContainer'>
                <div className='abilityButton' onClick={decreaseAttribute} disabled={storeType == 0 ? true : false}>-</div>

                <div className='abilityButton' onClick={increaseAttribute} disabled={available == 0 ? true: false}>+</div>
            </div>
            
        </div>
    )
}