import React from "react";
import { build, interfaceButtons } from '@devComp/store';

export const CategoryWall = () => {
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const textureArr = [
        'wall_1'      
    ]

    const buttons = textureArr.map((item, index) => {
        return (
            <div key={item+index} className={
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
            storeBuild.buildBtn(false, null)
            storeBuild.changeRaySize(1, 1)
        } else {
            interBtn.btn(true, setTexture);
            storeBuild.buildBtn(true, setTexture);
            storeBuild.changeRaySize(5, 1, false)
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