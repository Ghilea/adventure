import React, { useEffect, useState } from "react";
import BuildButton from '@editor/build_button';

const CategoryGround = ({ setGroundSize }) => {

    const [size, setSize] = useState(10);

    const handleGroundSlider = (e) => {
        setGroundSize([e.target.value, e.target.value])
        setSize(e.target.value)
        //storeGround.changeTextureSize(e.target.value / 10, e.target.value / 10)
    }

    /* const handleTextureSlider = (e) => {
        storeGround.changeTextureSize(e.target.value, e.target.value)
    } */

    /*
    <label htmlFor='tSize'>Texture size [{storeGround.textureSizeX}]</label>
                    <input id='tSize' type='range' min={(storeGround.x / 10)} max={(storeGround.x / 2)} value={storeGround.textureSizeX} onChange={handleTextureSlider} />
    */

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Map size</h2>
                <div className='ground'>
                    <label htmlFor='gSize'>Ground size [{size}]</label>
                    <input id='gSize' type='range' min={10} max={250} step={2} value={size} onChange={handleGroundSlider} />
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