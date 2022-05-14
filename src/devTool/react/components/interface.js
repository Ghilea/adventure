import React, { useState, useContext, useEffect } from 'react';
import { build } from './store';

export const Interface = () => {

    const buildCheck = build(state => state);
    const buildBtn = build(state => state.buildBtn);

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

    return (
        <div className="interface" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <div>
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
            
        </div>
    )
}