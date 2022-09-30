import React, { useEffect, useState, useRef } from 'react';
import { player } from '@comp/store';
import './PointButton.scss';

export const PointButton = ({children}) => {

    const storeTypeRef = useRef()

    const storePlayer = player(state => state);
    
    const available = storePlayer.ability.available;
    const type = children.toLowerCase();
    const storeType = storePlayer.ability[type].points;

    const storeModifier = storePlayer.ability[type].modifier;

    storeTypeRef.current = storeType


    function increaseAttribute () {
        console.log(storeTypeRef.current, storeType)
        if (available > 0) {
            storePlayer.updateAbility(available - 1, type, storeTypeRef.current + 1);
        }

       
        storePlayer.updateModifier(type, modifierCalc());
        console.log(storePlayer.ability[type].modifier)
    }

    function decreaseAttribute () {
        if (storeTypeRef.current > 0){
            storePlayer.updateAbility(available + 1, type, storeTypeRef.current - 1);
        } 

        storePlayer.updateModifier(type, modifierCalc());
    }

    function modifierCalc() {
        /* 
            Ability of 2 or 3: -4
            Ability of 4 or 5: -3
            Ability of 6 or 7: -2
            Ability of 8 or 9: -1
            Ability of 10 or 11: +0
            Ability of 12 or 13: +1
            Ability of 14 or 15: +2
            Ability of 16 or 17: +3
            Ability of 18 or 19: +4
        */     
        return (Math.round((storeTypeRef.current / 2) - 5.5))
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