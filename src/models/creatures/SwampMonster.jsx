import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@helper/helperObject'
import asset from '@assets/images/3d/creatures/swamp_monster.glb';

export const SwampMonster = (props) => {
  const { nodes, materials  } = useGLTF(asset);

  const [solid] = useBox(() => ({
    args: [5, 3.5, 1],
    position: [props.position[0], props.position[1] -0.5, props.position[2]],
    rotation: (props.rotation !== undefined) ? (props.rotation[1] === Math.PI * (360/360)) ? [0, Math.PI * (180/360), 0] : [0, Math.PI * (360/360), 0] : [0, 0, 0]
  }));
  
  const store = build(state => state);
  const [select, setSelect] = useState(null);

  const handleClick = (e) => {
    e.stopPropagation();
    const val = SelectObject(e.eventObject.position, 'wall', store);
    
    setSelect(val)
  }

  return (
    <group dispose = {null}
    onClick = {handleClick}
    {...props} 
    scale = {[0.65, 1, 0.65]}
    >
      <Select enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>
      <mesh 
        position = {[0.5, 1, 1]}
        castShadow
        receiveShadow
        geometry={nodes.Group32385_FOREST_MONSTER_V1_mat_0.geometry}
        material={materials.FOREST_MONSTER_V1_mat}
      />
      </Select>

      <mesh ref = {solid} />
  
    </group>
  );
}