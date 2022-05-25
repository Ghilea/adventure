import React from 'react';
import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import wallTexture from '@shared/assets/images/texture/floor.jpg';

export const Ground = (props) => {
    const [ref] = usePlane(() => ({
        args: [10, 10],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))

    const texture = useLoader(TextureLoader, wallTexture);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(8, 8);

    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry args = {[10, 10]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )

}