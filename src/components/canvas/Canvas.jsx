import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Level } from '@comp/level/Level';
import { MenuBg } from '@comp/menu/MenuBackground';
import { Menu } from '@comp/menu/Menu';
//import { OrbitControls } from '@react-three/drei';

/*
<OrbitControls />
<ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
*/

/*
renderer.dispose()
renderer.forceContextLoss()
*/
export const CanvasLevel = () => {

    return (
        <Canvas shadows><ambientLight intensity={0.5} />
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
                    position: [-3.5, 1, -5.8]
                }
            } >
                
                <Physics gravity={[0, -30, 0]}>
                    <MenuBg />
                </Physics>
            </Canvas>
            <Menu />
        </>
    )
}