import React, {useEffect, useRef, useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from './buildLevel/textures';

export const Walls = ({rotation, position, type, ...props}) => {
    const [hover, setHover] = useState(null);

    const [ref] = useBox(() => ({
        args: [8, 4, 0.5],
        rotation,
        position,
        ...props
    }))

    return (
        <mesh ref = {ref} castShadow 
            onPointerMove={(event) => {
                event.stopPropagation();
                setHover(Math.floor(event.faceIndex / 2));
            }}>
            {[...Array(6)].map((_, index) => (
                
            <meshStandardMaterial
                map = {
                    (type == 'stone') ? texture.stone() : ''
                }
                key = {
                    index
                }
                color={
                    (hover === index) ? 'grey' : ''
                }
                />
            ))}
            <boxGeometry args = {[8, 4, 0.5]} />
        </mesh>
    )

}