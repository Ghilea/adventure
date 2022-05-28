import React from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '@shared/components/objectTextures';

export const Object = ({position, size, objectTexture, ...props}) => {
  
  const [ref] = useBox(() => ({
    mass: 10, 
    args: size,
    position, 
    rotation: [0.4, 0.2, 0.5], 
    ...props 
  }))

  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry args={size}/>
      <meshLambertMaterial map={
        (objectTexture === 'wood') ? texture.wood() : 
        (objectTexture === 'wood2') ? texture.wood2() : ''} />
    </mesh>
  )
}