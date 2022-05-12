import React from 'react';
import { useBox } from '@react-three/cannon';

export const Cube = (props) => {
  const [ref] = useBox(() => ({ mass: 10, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  )
}