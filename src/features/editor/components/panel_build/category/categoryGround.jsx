import React, { useEffect, useState } from "react";
import { ground } from '@store/editor';
import '../panel_build.scss';

const CategoryGround = () => {
    
    const storeGround = ground(state => state);
    
    const handleGroundSlider = (e) => {
        storeGround.groundSize(e.target.value, e.target.value)
        storeGround.changeTextureSize(e.target.value / 10, e.target.value / 10)
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
        <div className='buildPanel'>
            <div className='container'>
                <h2>Ground</h2>
                <div className='ground'>
                    <label htmlFor='gSize'>Ground size [{storeGround.x}]</label>
                    <input id='gSize' type='range' min={10} max={500} step={2} value={storeGround.x} onChange={handleGroundSlider} />
                    <label htmlFor='tSize'>Texture size [{storeGround.textureSizeX}]</label>
                    <input id='tSize' type='range' min={(storeGround.x / 10)} max={(storeGround.x / 2)} value={storeGround.textureSizeX} onChange={handleTextureSlider} />
                    <select onChange={handleTexture} value={storeGround.texture}>
                        {selectOptions}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CategoryGround