import React from 'react';
import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import groundTexture from '../../../../shared/assets/images/texture/floor.jpg';
import { ground, mousePosition} from '../store';

export const Ground = (props) => {
    const storeGround = ground(state => state);

    const [ref] = usePlane(() => ({
        args: [storeGround.x, storeGround.y],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))
    
    const texture = useLoader(TextureLoader, groundTexture);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(8, 8);
    
    const editPosition = mousePosition(state => state.editPosition)

    const pointerMove = (event) => {
        editPosition(event.point.x, event.point.y, event.point.z)
    }

    return (
        <mesh ref={ref} onPointerMove={pointerMove}>
            <planeBufferGeometry attach='geometry' args = {[storeGround.x, storeGround.y]} />
            <meshStandardMaterial attach='material' map={texture} />
        </mesh>
    )

}