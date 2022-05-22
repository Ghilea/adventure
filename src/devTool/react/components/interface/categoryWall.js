import React from "react";
import { build } from '../store';

export const CategoryWall = () => {
    const store = build(state => state);
    
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
                    (store.active && store.texture === item) ?
                'activeBtn' : 'wallBtn'
                }`
            } onClick={() => handleWall(item) }>
            </div>
        )
    })

    const handleWall = (setTexture) => {

        console.log(setTexture);
        if (store.active && store.texture === setTexture) {
            store.buildBtn(false, null)
        } else {
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