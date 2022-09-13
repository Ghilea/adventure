import React from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '@shared/components/textures';

export const Walls = ({position, rotation, type, ...props}) => {

    const [ref] = useBox(() => ({
        args: [5, 2, 1],
        position,
        rotation,
        ...props
    }))

    return (
        <mesh ref = {ref} castShadow receiveShadow>
            <meshStandardMaterial
                map = {
                    (type == 'stone') ? texture.stone(): (type == 'stone2') ? texture.stone2() : (type == 'stoneWindow') ? texture.stoneWindow() : ''
                }
                />
            
            <boxGeometry args = {[5, 2, 1]} />
        </mesh>
    )

}