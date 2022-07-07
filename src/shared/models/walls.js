import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@devComp/store';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@devComp/helper/selectObject'

export const Wall_1 = (props) => {
  const { nodes, materials  } = useGLTF("./assets/images/3d/stoneWall_3.gltf");

  const [solid] = useBox(() => ({
    args: [5, 3.5, 1],
    position: [props.position[0], props.position[1] -0.5, props.position[2]],
    rotation: (props.rotation !== undefined) ? (props.rotation[1] === Math.PI * (360/360)) ? [0, Math.PI * (180/360), 0] : [0, Math.PI * (360/360), 0] : [0, 0, 0]
  }));
  
  const store = build(state => state);
  const [select, setSelect] = useState(null);

  const handleClick = (e) => {
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
        geometry={nodes.Object_4.geometry}
        material={materials.rock_wall_1}
      />
      </Select>

      <mesh ref = {solid} />
  
    </group>
  );
}