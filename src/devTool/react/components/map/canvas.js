import React, { useState, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { Player } from '../player/Player';
import { Ground } from './Ground';
import { Walls } from './walls';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'

const Render = () => {

    return (
        <Canvas camera = {
            {
                fov: 70,
                position: [0, 0, 3]
            }
        } >
            <OrbitControls />
            <ambientLight intensity={1} />
            <Physics gravity = {
                [0, -30, 0]
            } >
                <Ground position = {[0, 0, 0]} />             
                <Player position = {[0, 1.5, 10]} />
            </Physics>
        </Canvas>    
    )
}

export default Render;