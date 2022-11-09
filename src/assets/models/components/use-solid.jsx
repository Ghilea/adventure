import React from 'react'
import { useBox } from '@react-three/cannon';

const UseSolid = ({position, size}) => {

    const [solid] = useBox(() => ({
        position: position,
        rotation: [0, Math.PI * (0/360), 0] // 0 = left, 180 = down, -180 = up, 360 = right
    }));

  return (
    <mesh ref = {solid}>
        <boxGeometry args={size} />
        <meshBasicMaterial color="red" opacity={0} transparent={true}/>
    </mesh>
  )
}

export default UseSolid