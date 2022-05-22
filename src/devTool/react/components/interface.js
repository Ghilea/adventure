import React, { useState, useContext, useEffect, useRef } from 'react';
import { build, ground } from './store';
import { Create } from './Crud';

export const Interface = () => {

    const buildCheck = build(state => state);
    const storeGround = ground(state => state);
    const buildBtn = build(state => state.buildBtn);
    const saveLevel = build(state => state.saveLevel);

    const handleWall = (setTexture) => {
        
        console.log(setTexture);
        if (buildCheck.active && buildCheck.texture === setTexture) {
            buildBtn(false, null)
        }else{
            buildBtn(true, setTexture)
        }
    }

    const handleMouseClick = (event) => {
        
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }

    }

    const handleSave = () => {
        saveLevel(buildCheck.walls)
        /*const url = `http://localhost:3000/createLevel`;

        console.log(buildCheck.walls);

        Create(url, {
            content: JSON.stringify(buildCheck.walls)
        });*/
    }

    const handleSlider = (e) => {
        storeGround.changeGround(e.target.value, e.target.value, 'stone')
        console.log(storeGround.x);
    }

    return (
        <div className="interface" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <div className='container'>
                <h2>Ground</h2>
                <div className='ground'>
                    <input type='range' min={10} max={1000} onChange={handleSlider}/>
                    <select>
                        <option>
                            Choose Texture
                        </option>
                        <option>
                            Stone
                        </option>
                        <option>
                            Wood
                        </option>
                    </select>
                </div>
            </div>
            <div className='container'>
                <h2>Walls</h2>
                <div className = 'walls' >
                    
                    <div className={`stone ${
                        (buildCheck.active && buildCheck.texture === 'stone') ?
                        'activeBtn' : 'wallBtn'}`
                        } onClick={() => handleWall('stone') }>
                    </div>

                    <div className={`stone2 ${
                        (buildCheck.active && buildCheck.texture === 'stone2') ?
                        'activeBtn' : 'wallBtn'}`
                        } onClick={() => handleWall('stone2') }>
                    </div>

                    <div className={`stoneWindow ${
                        (buildCheck.active && buildCheck.texture === 'stoneWindow') ?
                        'activeBtn' : 'wallBtn'}`
                        } onClick={() => handleWall('stoneWindow') }>
                    </div>
                </div>
            </div>
            <div className='container'>
                <button onClick={handleSave}>Save level</button>
            </div>
            
        </div>
    )
}