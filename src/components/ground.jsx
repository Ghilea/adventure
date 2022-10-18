import React from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = ({position, size, ...props}) => {
    
    const [ref] = usePlane(() => ({
        args: size,
        position,
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))

    console.log(size)
    return (
        <>
        <mesh ref={ref} receiveShadow>
            <planeGeometry attach='geometry' args = {size} />
            <meshStandardMaterial attach='material' opacity={0} transparent={true} />
        </mesh>
        </>
    )

}

export default Ground