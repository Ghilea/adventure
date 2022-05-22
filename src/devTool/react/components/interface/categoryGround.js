import React from "react";
import { ground } from '../store';

export const CategoryGround = () => {
    
    const store = ground(state => state);

    const handleSlider = (e) => {
        store.changeGround(e.target.value, e.target.value, 'stone')
        console.log(store.x);
    }

    const optionArr = [
        'Choose Texture',
        'Stone'
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
                <input type='range' min={10} max={500} value={store.x} onChange={handleSlider}/>
                <select>
                    {selectOptions}
                </select>
            </div>
        </div>
    )
}