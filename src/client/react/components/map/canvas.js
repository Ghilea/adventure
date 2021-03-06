import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Level } from '@comp/map/level';
import { MenuBg } from '@comp/menu/menuBg'
/*
<ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
*/
export const CanvasLevel = () => {

    return (
        <Canvas shadows>
            
            <Physics gravity={[0, -30, 0]}>
                <Level />   
            </Physics>
        </Canvas> 
    )
}

export const CanvasMenu = () => {

    return (
        <>
            <Canvas shadows camera = {
                {
                    fov: 60,
                    position: [0, 3, -7]
                }
            } >
                <Physics gravity={[0, -30, 0]}>
                    <MenuBg />
                </Physics>
            </Canvas>
        </>
    )
}