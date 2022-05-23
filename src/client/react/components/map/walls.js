import React, {useEffect, useRef, useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '../../../../shared/components/textures';

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
                    (type == 'stone') ? texture.stone(): (type == 'stone2') ? texture.stone2() : (type == 'stoneWindow') ? texture.stoneWindow() : ''
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