import React from 'react';
import { usePlane } from '@react-three/cannon';
import * as texture from '@shared/components/textures';

export const Ground = ({position, groundTexture, size, ...props}) => {
    const [ref] = usePlane(() => ({
        args: size,
        position,
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))

    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry args = {size} />
            <meshStandardMaterial map={
                (groundTexture == 'stone') ? texture.stone(): (groundTexture == 'floor') ? texture.floor() : ''
            } />
        </mesh>
    )

}