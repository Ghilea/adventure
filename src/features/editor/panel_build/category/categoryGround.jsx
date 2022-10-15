import React, { useEffect, useState } from "react";
import { ground } from '@store/editor';
import BuildButton from '@editor/build_button';

const CategoryGround = () => {
    
    const storeGround = ground(state => state);

    const handleGroundSlider = (e) => {
        storeGround.groundSize(e.target.value, e.target.value)
        storeGround.changeTextureSize(e.target.value / 10, e.target.value / 10)
    }

    const handleTextureSlider = (e) => {
        storeGround.changeTextureSize(e.target.value, e.target.value)
    }

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Map size</h2>
                <div className='ground'>
                    <label htmlFor='gSize'>Ground size [{storeGround.x}]</label>
                    <input id='gSize' type='range' min={10} max={500} step={2} value={storeGround.x} onChange={handleGroundSlider} />
                    <label htmlFor='tSize'>Texture size [{storeGround.textureSizeX}]</label>
                    <input id='tSize' type='range' min={(storeGround.x / 10)} max={(storeGround.x / 2)} value={storeGround.textureSizeX} onChange={handleTextureSlider} />
                </div>
            </div>
            <div className='container'>
                <h2>Grounds</h2>
                <div className='buildPanelButton' >
                    <BuildButton type='floor_1' />
                </div>
            </div>
        </div>
    )
}

export default CategoryGround