import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Level } from '@comp/map/level';
import { MenuBg } from '@comp/menu/menuBg'
import { OrbitControls } from '@react-three/drei'

export const RenderCanvas = () => {

    return (
        <Canvas shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
            <Physics gravity={[0, -30, 0]}>
                <Level />   
            </Physics>
        </Canvas> 
    )
}

export const RenderBg = () => {

    return (
        <Canvas shadows camera = {
            {
                fov: 45,
                position: [0, 2, -7]
            }
        } >
            <OrbitControls />
            <ambientLight intensity={3} />
            <Physics gravity={[0, -30, 0]}>
                <MenuBg />   
            </Physics>
        </Canvas> 
    )
}