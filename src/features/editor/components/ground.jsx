import React from 'react';
import { usePlane } from '@react-three/cannon';
import GroundCheck from '@editor/groundCheck';

export const Ground = ({mousePosition, setMousePosition, groundTexture, args}) => {

    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0,0,0]
    }))
       
    const pointerMove = (event) => {
        setMousePosition({
            x: event.point.x,
            y: event.point.y,
            z: event.point.z
        })
    }

    return (
        <>
        <mesh ref={ref} onPointerMove={pointerMove}>
            <planeGeometry attach='geometry' args={args} />
                <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
            <GroundCheck mousePosition={mousePosition}/>
        </>
    )

}