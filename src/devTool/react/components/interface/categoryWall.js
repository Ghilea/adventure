import React from "react";
import { build, interfaceButtons } from '../store';

export const CategoryWall = () => {
    const store = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const textureArr = [
        'stone',
        'stone2',
        'stoneWindow'        
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
            store.buildBtn(false, null)
        } else {
            interBtn.btn(true, setTexture)
            store.buildBtn(true, setTexture)
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