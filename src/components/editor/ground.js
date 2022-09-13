import React from 'react';
import { usePlane } from '@react-three/cannon';
import * as texture from '@shared/components/textures';
import { ground, mousePosition } from '@editor/store';
import { GroundCheck } from '@helper/groundCheck';

export const Ground = (props) => {
    const storeGround = ground(state => state);
    const storePosition = mousePosition(state => state);

    const [ref] = usePlane(() => ({
        args: [storeGround.x, storeGround.y],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))
       
    const pointerMove = (event) => {
        storePosition.editPosition(
            event.point.x, 
            event.point.y, 
            event.point.z
        )       
    }

    return (
        <>
        <mesh ref={ref} onPointerMove={pointerMove}>
            <planeGeometry attach='geometry' args = {[storeGround.x, storeGround.y]} />
            <meshStandardMaterial attach='material' map={
                (storeGround.texture == 'stone') ? texture.stone(): (storeGround.texture == 'floor') ? texture.floor() : ''
            } />
        </mesh>
        <GroundCheck />
        </>
    )

}