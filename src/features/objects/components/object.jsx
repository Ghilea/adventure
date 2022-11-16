import React from 'react';
import { useBox } from '@react-three/cannon';
//import * as texture from '@comp/objectTextures';

export const Object = ({ position, size, objectTexture, light, mass, rotation, distance, ...props }) => {

  const [ref] = useBox(() => ({
    mass,
    args: size,
    position,
    rotation,
    ...props
  }))

  return (
    <mesh castShadow ref={
      ref
    }
      intensity={
        10
      } >
      {
        (light) ?
          <pointLight position={position} distance={distance} intensity={10} />
          :
          <></>
      }
      <boxGeometry args={size} />
      <meshLambertMaterial />
    </mesh>
  )
}