import React, { useState, useContext, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Ground } from './Ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import { Interface } from '../interface';
import { Walls } from './walls';
import { build, mousePosition } from '../store';

const Render = () => {

    const buildCheck = build(state => state);
    const addWall = build(state => state.addWall);
    const position = mousePosition(state => state)

    const [wall, setWall] = useState([]);
    const [index, setIndex] = useState(0);
    
    const handleMouseClick = (event) => {
        event.preventDefault();

        if (event.type === 'click') {
            if (buildCheck.active) {
                addWall(position.x, position.y, position.z, 0, 0, 0, buildCheck.texture)
                setWall((state)=>([
                    ...state,
                    <Walls key = {
                        index
                    }
                    position = {
                        [
                            position.x,
                            (4 / 2) + position.y,
                            position.z
                        ]
                    }
                    rotation = {
                        [
                            0,
                            0,
                            0
                        ]
                    }
                    type = {
                        [ 
                            buildCheck.texture
                        ]
                    }
                    />
                ]))

                setIndex(index + 1);
            }
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
        }

    }

    return (
        <>
            <Interface />
            <Canvas 
            onClick = {
                handleMouseClick
            }
            camera = {
                {
                    fov: 45,
                    position: [0, 2, -10]
                }
            } >
                <OrbitControls />
                <ambientLight intensity={1} />
                <Physics gravity = {
                    [0, -30, 0]
                } >
                    <Ground position = {
                        [0, 0, 0]
                    }
                    />
                    {wall}       
                </Physics>
                <gridHelper args={[8, 8]}/>
            </Canvas>
        </>    
    )
}

export default Render;