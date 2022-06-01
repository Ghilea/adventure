import React from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '@shared/components/textures';

export const Walls = ({position, rotation, type, ...props}) => {

    const [ref] = useBox(() => ({
        args: [4, 2, 1],
        position,
        rotation,
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
            <boxGeometry args = {[4, 2, 1]} />
        </mesh>
    )

}