import React from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '@shared/components/objectTextures';

export const Object = ({position, size, objectTexture, light, mass, rotation, ...props}) => {
  
  const [ref] = useBox(() => ({
    mass, 
    args: size,
    position, 
    rotation, 
    ...props 
  }))

  return (
    <mesh receiveShadow castShadow ref={ref}>
      {
        (light) ?
          <pointLight position={position} distance={5} intensity={5} />
        :
          <></>
      }
      <boxGeometry args={size}/>
      <meshLambertMaterial map={
        (objectTexture === 'wood') ? texture.wood() : 
        (objectTexture === 'wood2') ? texture.wood2() : ''} />
    </mesh>
  )
}