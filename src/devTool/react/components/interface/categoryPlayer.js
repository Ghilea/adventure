import React from "react";
import { player, interfaceButtons } from '../store';

export const CategoryPlayer = () => {
    
    const store = player(state => state);
    const interBtn = interfaceButtons(state => state);

    const handleButton = (setBtn) => {

        console.log(setBtn);
        if (interBtn.active && interBtn.button === setBtn) {
            interBtn.btn(false, null)
        } else {
            interBtn.btn(true, setBtn)
        }
    }

    return (
        <div className='container'>
            <h2>Player</h2>
            <div className='player'>
                <div className={
                `img
                ${
                    (interBtn.active && interBtn.button === 'player') ?
                'activeBtn' : 'playerBtn'
                }`
                } onClick={() => handleButton('player') }>
                </div>
            </div>
        </div>
    )
}