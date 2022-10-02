import React, { useEffect, useState, useRef } from 'react';
import { player } from '@comp/store';
import './PointButton.scss';

export const PointButton = ({children}) => {

    const store = player(state => state);
    const [abilities, setAbilities] = useState({
        Strength: {points: 0, modifier: -5},
        Intellect: {points: 0, modifier: -5},
        Dexterity: {points: 0, modifier: -5},
        Constitution: {points: 0, modifier: -5},
        Wisdom: {points: 0, modifier: -5},
        Charisma: {points: 0, modifier: -5}
    });

    const available = store.ability.available;
    
    const points = abilities[children].points;
    const modifier = abilities[children].modifier;

    const updateAbility = (points) => {

        setAbilities((state) => ({
            ...state,
            [children]: {
                    points: points,
                    modifier: Math.round((points / 2) - 5.5)
                }
        }))
    }

    console.log(available, points, modifier)
    const increaseAttribute = () => {
        console.log(modifier, points)
        if (available > 0) {
            store.updateAvailable(available - 1)
            updateAbility(points + 1);
        }
    }

    const decreaseAttribute = () => {
        if (points > 0){
            store.updateAvailable(available + 1)
            updateAbility(points - 1);
        }      
    }

    return (
        <div className='btnSection'>
            <div className='ability'>
                <p className='abilityTitle'>Modifier</p>
                <p className='abilityModifier'>{modifier}</p>
            </div>
            <div className='ability'>
                <p className='abilityTitle'>{children}</p> 
                <p className='abilityPoints'>{points}</p>
            </div>

            <div className='abilityButtonContainer'>
                <div className='abilityButton' onClick={decreaseAttribute} disabled={points <= 0 ? true : false}>-</div>

                <div className='abilityButton' onClick={increaseAttribute} disabled={available <= 0 ? true: false}>+</div>
            </div>
            
        </div>
    )
}