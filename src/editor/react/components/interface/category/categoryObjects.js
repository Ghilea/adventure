import React from "react";
import { build, interfaceButtons } from '@devComp/store';

export const CategoryObjects = () => {
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const textureArr = [
        'rock_1'      
    ]

    const buttons = textureArr.map((item, index) => {
        return (
            <div key={item+index} className={
                `${item} 
                ${
                    (interBtn.active && interBtn.button === item) ?
                'activeBtn' : 'objectsBtn'
                }`
            } onClick={() => handleObject(item) }>
            </div>
        )
    })

    const handleObject = (setTexture) => {
        if (interBtn.active && interBtn.button === setTexture) {
            interBtn.btn(false, null)
            storeBuild.activeBuild([]);
            storeBuild.changeRaySize(1, 1)
        } else {
            interBtn.btn(true, setTexture);
            storeBuild.activeBuild('object', setTexture);
            storeBuild.changeRaySize(1, 1, false)
        }
    }

    return (
        <div className='container'>
            <h2>Boulders</h2>
            <div className = 'objects' >
                {buttons}
            </div>
        </div>
    )
}