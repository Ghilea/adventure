import React from "react";
import { interfaceButtons, build } from '@editor/store';

export const CategoryPlayer = () => {
    
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const handleButton = (setBtn) => {
        if (interBtn.active && interBtn.button === setBtn) {
            interBtn.btn(false, null)
            storeBuild.changeRaySize(1, 1)
            storeBuild.activeBuild([]);
        } else {
            interBtn.btn(true, setBtn)
            storeBuild.activeBuild('player', null);
            storeBuild.changeRaySize(1, 1)
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