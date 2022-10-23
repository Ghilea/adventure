import React, { useMemo }from 'react';
import { usePlane } from '@react-three/cannon';

const Ground = ({position = [0,0,0], size, onPointerMove, ...props}) => {
    
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
            <meshStandardMaterial attach='material' opacity={0} transparent={true} />
        </mesh>
        </>
    )

}

export default Ground