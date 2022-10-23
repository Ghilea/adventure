import React from 'react';
import { useBox } from '@react-three/cannon';
//import * as texture from '@comp/textures';

export const Walls = ({position, rotation, type, ...props}) => {

    const [ref] = useBox(() => ({
        args: [5, 2, 1],
        position,
        rotation,
        ...props
    }))

    return (
        <mesh ref = {ref} castShadow receiveShadow>
            <meshStandardMaterial />
            
            <boxGeometry args = {[5, 2, 1]} />
        </mesh>
    )

}