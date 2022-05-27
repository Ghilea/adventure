import React from "react";
import { ground } from '@comp/store';

export const CategoryGround = () => {
    
    const storeGround = ground(state => state);

    const handleSlider = (e) => {
        storeGround.groundSize(e.target.value, e.target.value)
    }

    const handleTexture = (e) => {
        storeGround.groundTexture(e.target.value)
    }

    const optionArr = [
        'Choose Texture',
        'stone',
        'floor'
    ];

    const selectOptions = optionArr.map((item, index) => {
        return (
            <option key={'ground'+item+index}>{item}</option>
        )
    })

    return (
        <div className='container'>
            <h2>Ground</h2>
            <div className='ground'>
                <input type='range' min={10} max={500} value={storeGround.x} onChange={handleSlider}/>
                <select onChange={handleTexture}>
                    {selectOptions}
                </select>
            </div>
        </div>
    )
}