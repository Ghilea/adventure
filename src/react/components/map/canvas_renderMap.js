import React, {
    useEffect, 
    useState, 
    useContext, 
    useRef
} from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Level from './level';
import { Player } from '../player/Player';

const RenderMap = () => {

    return (
        <Canvas shadows>
            <ambientLight intensity={0.25} />
            <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
            <Physics gravity={[0, -30, 0]}>
                <Level />                
                <Player position = {[0, 1.5, 10]} />
            </Physics>
        </Canvas>    
    )
}

export default RenderMap;