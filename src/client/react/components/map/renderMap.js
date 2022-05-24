import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Level from './level';

const RenderMap = () => {
        
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

export default RenderMap;