import React from "react";
import { player, interfaceButtons, build } from '../store';

export const CategoryPlayer = () => {
    
    const store = player(state => state);
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const handleButton = (setBtn) => {
        if (interBtn.active && interBtn.button === setBtn) {
            interBtn.btn(false, null)
            store.changePlayer(false)
        } else {
            interBtn.btn(true, setBtn)
            storeBuild.buildBtn(false, null)
            store.changePlayer(true)
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