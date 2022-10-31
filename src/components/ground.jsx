import React from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = ({position = [0,0,0], size, onPointerMove, transparent = true, opacity = 0, color, ...props}) => {
    
    const [ref] = usePlane(() => ({
        args: size,
        position: position,
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))

    return (
        <>
        <mesh ref={ref} receiveShadow onPointerMove={onPointerMove}>
            <planeGeometry attach='geometry' args = {[size, size]} />
            <meshStandardMaterial attach='material' opacity={opacity} transparent={transparent} color={color} />
        </mesh>
        </>
    )

}

export default Ground