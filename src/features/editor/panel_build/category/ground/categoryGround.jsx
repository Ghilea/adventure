import React, { useEffect, useState, useRef } from "react";
import BuildButton from '@editor/build_button';
import LevelSetting from "./level_setting";
import { build } from "@store/editor";

const CategoryGround = () => {

    const store = build(state => state);
    const groundSize = build(state => state.mapSettings.groundSize);

    const groundSizeRef = useRef();

    const handleGroundSlider = () => {
        store.setGroundSize(groundSizeRef.current.value)
    }

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Level</h2>
                <LevelSetting />

                <div className='ground'>
                    <label htmlFor='gSize'>Ground size [{groundSize || 10}]</label>
                    <input ref={groundSizeRef} id='gSize' type='range' min={10} max={100} step={2} value={groundSize || 10} onChange={handleGroundSlider} />
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