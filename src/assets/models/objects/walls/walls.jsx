import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/helperObject'
import asset from './wall.glb';

export const Wall_1 = (props) => {
  const { nodes, materials  } = useGLTF(asset);

  const [isSelected, handleClick] = useSelectObject();

  const [solid] = useBox(() => ({
    args: [5, 3.5, 1],
    position: [props.position[0], props.position[1] -0.5, props.position[2]],
    rotation: (props.rotation !== undefined) ? (props.rotation[1] === Math.PI * (360/360)) ? [0, Math.PI * (180/360), 0] : [0, Math.PI * (360/360), 0] : [0, 0, 0]
  }));
  
  return (
    <group dispose = {null} 
      onClick={handleClick}
    {...props} 
    scale = {[1.25, 1.5, 1.6]}
    >
      <Select enabled={isSelected}>
      <mesh 
        position = {[0, -1.3, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Side.geometry}
        material={materials.muretdroitmat}
      />
      </Select>

      <mesh ref = {solid} />
  
    </group>
  );
}

useGLTF.preload(asset)