import React, { useState, useContext, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ground } from './Ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import { StoreContext } from '../store';
import { Interface } from '../interface';
import { Walls } from './walls';

const Render = () => {

    const [store, setStore] = useContext(StoreContext);
    const [wall, setWall] = useState([]);
    const [index, setIndex] = useState(0);
    const [pointer, setPointer] = useState({
        x: null,
        y: null,
        z: 0
    })
    
    const handleMouseClick = (event) => {
        event.preventDefault();

        if (event.type === 'click') {
            console.log(event);
            console.log('left click up');
            if(store.build.isWall.active){
                setWall((state)=>([
                    ...state,
                    <Walls key = {
                        index
                    }
                    position = {
                        [
                            pointer.x,
                            (4 / 2) + pointer.z,
                            pointer.y
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
                            store.build.isWall.texture
                        ]
                    }
                    />
                ]))

                setIndex(index + 1);
            }
        } else if (event.type === 'mousedown' && event.button === 2) {
            console.log('right click down');
        } else if (event.type === 'contextmenu') {
            console.log('right click up');
        }

    }

    const pointerMove = (event) => {
        setPointer(state => ({
            ...state,
            x: ((event.clientX / innerWidth) * 2 - 1),
            y: ((event.clientY / innerHeight) * 2 + 1)

        }))

        console.log(pointer)

    }

    return (
        <>
            <Interface />
            <Canvas 
            onPointerMove = {
                pointerMove
            }
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
                    <Ground position = {[0, 0, 0]} />
                    {wall}       
                </Physics>
            </Canvas>
        </>    
    )
}

export default Render;