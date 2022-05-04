import React, {useRef} from 'react';
import { useBox } from '@react-three/cannon';
import { useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import wallTexture from '../../../assets/images/texture/wall.jpg';

export const Walls = (props) => {
    const [ref] = useBox(() => ({
        args: [8, 8, 0.5],
        ...props
    }))

    const texture = useLoader(TextureLoader, wallTexture);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    //wallRef.geometry.computeBoundingBox();

    //var max = wallRef.geometry.boundingBox.max;
    //var min = wallRef.geometry.boundingBox.min;
    //var height = max.y - min.y;
    //var width = max.x - min.x;

    //texture.repeat.set(8 / 894, 0.5 / 894);

    return (
        <mesh ref = {ref} castShadow>
            <boxGeometry args = {[8, 8, 0.5]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )

}