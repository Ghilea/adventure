import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import { build } from '@store/editor';
import asset from './wall.glb';

export const Wall_1 = (props) => {
  const { nodes, materials  } = useGLTF(asset);

  const [isSelected, handleClick] = useSelectObject();

  const rotate = build(state => state.isBuild.objectSize.rotate);

  console.log(props.rotation)
  const [solid] = useBox(() => ({
    position: [0, -0.5, 0],
    rotation: [0, Math.PI * (0/360), 0] // 0 = left, 180 = down, -180 = up, 360 = right
  }));
  
  return (
    <group dispose = {null} 
      onClick={handleClick}
    {...props} 
    scale = {[1.6, 1.5, 1.6]}
    >
      <Select enabled={isSelected}>
      <mesh 
        rotation={[0, Math.PI * (180/360), 0]}
        position = {[0, -1.3, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Side.geometry}
        material={materials.muretdroitmat}
      />
      </Select>

      <mesh ref = {solid}>
        <boxGeometry args= {[3.2, 1.5, 0.5]} />
        <meshBasicMaterial color="red" />
      </mesh>
  
    </group>
  );
}

useGLTF.preload(asset)