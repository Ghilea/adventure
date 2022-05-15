import React, {useEffect, useRef, useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from './buildLevel/textures';

export const Walls = ({rotation, position, type, ...props}) => {

    const [ref] = useBox(() => ({
        args: [8, 4, 0.5],
        rotation,
        position,
        ...props
    }))

    return (
        <mesh ref = {ref} castShadow>
            {[...Array(6)].map((_, index) => (
                
            <meshStandardMaterial
                map = {
                    (type == 'stone') ? texture.stone() : ''
                }
                key = {
                    index
                }
                />
            ))}
            <boxGeometry args = {[8, 4, 0.5]} />
        </mesh>
    )

}