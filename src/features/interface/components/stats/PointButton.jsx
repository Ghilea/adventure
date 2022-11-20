import React, { useEffect, useState } from 'react';
import './PointButton.scss';

export const PointButton = ({ available, availableFunc, abilityFunc, children }) => {

    const [abilityPoints, setAbilityPoints] = useState(0);
    const [modifier, setModifier] = useState(-5);

    useEffect(() => {
        setModifier(Math.round(((abilityPoints) / 2) - 5.5));
        abilityFunc(abilityPoints, modifier)
    }, [abilityPoints])

    useEffect(() => {

    }, [modifier])

    const increaseAttribute = () => {
        if (available > 0) {
            setAbilityPoints(abilityPoints + 1);
            availableFunc(-1);
        }
    }

    const decreaseAttribute = () => {
        if (abilityPoints > 0) {
            setAbilityPoints(abilityPoints - 1);
            availableFunc(1);
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
                <p className='abilityPoints'>{abilityPoints}</p>
            </div>

            <div className='abilityButtonContainer'>
                <div className='abilityButton' onClick={decreaseAttribute} disabled={abilityPoints <= 0 ? true : false}>-</div>

                <div className='abilityButton' onClick={increaseAttribute} disabled={available <= 0 ? true : false}>+</div>
            </div>

        </div>
    )
}