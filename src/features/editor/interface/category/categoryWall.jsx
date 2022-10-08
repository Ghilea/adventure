import React from "react";
import { build, interfaceButtons } from '@editor/store';

export const CategoryWall = () => {
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const textureArr = [
        'wall_1'      
    ]

    const buttons = textureArr.map((item, index) => {
        return (
            <div 
            key={item+index} 
            className={
                `${item} 
                ${
                    (interBtn.active && interBtn.button === item) ?
                'activeBtn' : 'wallBtn'
                }`
            } onClick={() => handleWall(item) }>
            </div>
        )
    })

    const handleWall = (setTexture) => {
        if (interBtn.active && interBtn.button === setTexture) {
            interBtn.btn(false, null)
            storeBuild.resetActiveBuild();
            storeBuild.changeRaySize(1, 1)
            storeBuild.changeActivateBuild(false);
        } else {
            interBtn.btn(true, setTexture);
            storeBuild.activeBuild('wall', setTexture);
            storeBuild.changeRaySize(5, 1, false)
            storeBuild.changeActivateBuild(true);
        }
    }

    return (
        <div className='container'>
            <h2>Walls</h2>
            <div className = 'walls' >
                {buttons}
            </div>
        </div>
    )
}