import React, { useState, useContext, useEffect } from 'react';
import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import groundTexture from '../../../assets/images/texture/floor.jpg';
import { StoreContext } from '../store';

export const Ground = (props) => {
    
    const [ref] = usePlane(() => ({
        args: [10, 10],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))
    
    const texture = useLoader(TextureLoader, groundTexture);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(8, 8);
    
    const [store, setStore] = useContext(StoreContext);

    const pointerMove = (event) => {

        setStore(store => ({
            ...store,
            mouse: {
                x: event.point.x,
                y: event.point.y,
                z: event.point.z
            }

        }))
    }

    return (
        <mesh ref={ref} onPointerMove={pointerMove}>
            <planeBufferGeometry attach='geometry' args = {[10, 10]} />
            <meshStandardMaterial attach='material' map={texture} />
        </mesh>
    )

}