import React from "react";
import { ground } from '@devComp/store';

export const CategoryGround = () => {
    
    const storeGround = ground(state => state);

    const handleGroundSlider = (e) => {
        storeGround.groundSize(e.target.value, e.target.value)
    }

    const handleTextureSlider = (e) => {
        storeGround.changeTextureSize(e.target.value, e.target.value)
    }

    const handleTexture = (e) => {
        storeGround.groundTexture(e.target.value)
    }

    const optionArr = ['stone', 'floor'];

    const selectOptions = optionArr.map((item, index) => {
        return (
            <option key={'ground'+item+index}>
                {item}
            </option>
        )
    })

    return (
        <div className='container'>
            <h2>Ground</h2>
            <div className='ground'>
                <label htmlFor='gSize'>Ground size</label>
                <input id='gSize' type='range' min={10} max={500} step={2} value={storeGround.x} onChange={handleGroundSlider}/>
                <label htmlFor='tSize'>Texture size</label>
                <input id='tSize' type='range' min={10} max={500} step={2} value={storeGround.textureSizeX} onChange={handleTextureSlider}/>
                <select onChange={handleTexture} value={storeGround.texture}>
                    {selectOptions}
                </select>
            </div>
        </div>
    )
}