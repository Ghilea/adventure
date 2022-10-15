import React from "react";
import { interfaceButtons, build } from '@store/editor';

const CategoryCreatures = () => {
    
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const handleButton = (setBtn) => {
        if (interBtn.active && interBtn.button === setBtn) {
            interBtn.btn(false, null)
            storeBuild.resetActiveBuild();
            storeBuild.changeRaySize(1, 1)  
            storeBuild.changeActivateBuild(false);
        } else {
            
            interBtn.btn(true, setBtn)
            storeBuild.activeBuild('player', 'player');
            storeBuild.changeRaySize(1, 1)
            storeBuild.changeActivateBuild(true);
        }
    }

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Player</h2>
                <div className='player'>
                    <div className={
                        `img
                ${(interBtn.active && interBtn.button === 'player') ?
                            'activeBtn' : 'playerBtn'
                        }`
                    } onClick={() => handleButton('player')}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCreatures