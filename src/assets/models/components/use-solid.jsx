import React from 'react'
import { useBox } from '@react-three/cannon';

const UseSolid = ({position, rotation, size }) => {

  const [solid] = useBox(() => ({
    args: size,
    position: position,
    rotation: rotation
  }));

  return (
    <mesh ref={solid}>
      <boxGeometry attach='geometry' args={size} />
      <meshNormalMaterial opacity={0} transparent={true}  />
    </mesh>
  )
}

export default UseSolid