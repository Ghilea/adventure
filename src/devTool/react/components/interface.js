import React, { useState, useContext } from 'react';

export const Interface = () => {

    const [wall, setWall] = useState({
        wall: false,
        texture: 'stone'
    })

    const handleWall = (event, setTexture) => {
        
        console.log(event, setTexture);
        setWall((state) => ({
            ...state,
            wall: true,
            texture: setTexture
        }))
    } 

    return (
        <div className="interface">
            <div>
                <h2>Walls</h2>
                <div className = 'walls' >
                    
                    <div className='wallBtn stone' onClick={ (event) => handleWall(event, 'stone') }></div>
                    <div className='wallBtn stone2' onClick={ (event) => handleWall(event, 'stone2') }></div>
                    <div className='wallBtn stoneWindow' onClick={ (event) => handleWall(event, 'stoneWindow') }></div>
                </div>
            </div>
            
        </div>
    )
}