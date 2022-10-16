import React from 'react';
import { usePlane } from '@react-three/cannon';
import GroundCheck from '@editor/groundCheck';
import { build } from '@store/editor';

export const Ground = () => {

    const store = build(state => state);
    const groundSize = build(state => state.mapSettings.groundSize);
    
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0,0,0]
    }))
       
    const pointerMove = (e) => {
        store.setMousePosition(e.point.x, e.point.y, e.point.z)
    }

    return (
        <>
        <mesh ref={ref} onPointerMove={pointerMove}>
                <planeGeometry attach='geometry' args={[groundSize]} />
                <meshStandardMaterial attach='material' opacity={0} transparent={true} />
        </mesh>
            <GroundCheck />
        </>
    )

}