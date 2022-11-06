import React from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import asset from './swamp_monster.glb';

const SwampMonster = (props) => {
  const { nodes, materials  } = useGLTF(asset);
  
  const [isSelected, handleClick] = useSelectObject();

  return (
    <group dispose = {null}
    onClick = {handleClick}
    {...props} 
    scale = {[0.65, 1, 0.65]}
    >
      <Select enabled={isSelected}>
      <mesh 
        position={[0.1, -0.9, 0.2]}
        castShadow
        receiveShadow
        geometry={nodes.Group32385_FOREST_MONSTER_V1_mat_0.geometry}
        material={materials.FOREST_MONSTER_V1_mat}
      />
      </Select>
  
    </group>
  );
}

useGLTF.preload(asset)

export default SwampMonster