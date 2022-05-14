import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from './store';

export const Interface = () => {

    const [store, setStore] = useContext(StoreContext);

    const handleWall = (setTexture) => {
        
        console.log(setTexture);
        if(store.build.isWall.active && store.build.isWall.texture === setTexture){
            setStore(store => ({
                ...store,
                build: {
                    ...store.build,
                    isWall: {
                        active: false,
                        texture: null
                    }
                }
            }))
        }else{
            console.log('true');
            setStore(store => ({
                ...store,
                build: {
                    ...store.build,
                    isWall: {
                        active: true,
                        texture: setTexture
                    }
                }
            })) 
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
                        (store.build.isWall.active && store.build.isWall.texture === 'stone') ? 
                        'activeBtn' : 'wallBtn'}`
                        } onClick={() => handleWall('stone') }>
                    </div>

                    <div className={`stone2 ${
                        (store.build.isWall.active && store.build.isWall.texture ==='stone2') ? 
                        'activeBtn' : 'wallBtn'}`
                        } onClick={() => handleWall('stone2') }>
                    </div>

                    <div className={`stoneWindow ${
                        (store.build.isWall.active && store.build.isWall.texture === 'stoneWindow') ? 
                        'activeBtn' : 'wallBtn'}`
                        } onClick={() => handleWall('stoneWindow') }>
                    </div>
                </div>
            </div>
            
        </div>
    )
}