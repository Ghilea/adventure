import React from 'react';
import { useSphere } from '@react-three/cannon';

export const Player = ({position, ...props}) => {

    const [ref] = useSphere(() => ({
        position: position,
        ...props
    }))

    return (
        <mesh ref = {ref} castShadow> 
            <meshStandardMaterial color={'red'} />
            <boxGeometry args = {[0.5, 2, 0.5]} />
        </mesh>
    )

}