import React from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = ({position, size, ...props}) => {
    
    const [ref] = usePlane(() => ({
        args: size,
        position,
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))

    return (
        <>
        <mesh ref={ref} receiveShadow>
            <planeGeometry args = {size} />
            <meshStandardMaterial />
        </mesh>
        </>
    )

}

export default Ground