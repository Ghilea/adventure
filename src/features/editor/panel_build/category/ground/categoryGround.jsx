import React, { useEffect, useState } from "react";
import BuildButton from '@editor/build_button';
import LevelSetting from "./level_setting";

const CategoryGround = ({ setMap }) => {

    const [size, setSize] = useState(10);

    const handleGroundSlider = (e) => {
        setMap((state) => ({
            ...state,
            groundSize: [e.target.value, e.target.value]
        }))
        setSize(e.target.value)
    }

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Level</h2>
                <LevelSetting />
                
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