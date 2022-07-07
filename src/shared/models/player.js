import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { build } from '@devComp/store';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@devComp/helper/selectObject'

export const Player = (props) => {
  const { nodes, materials } = useGLTF("./assets/images/3d/player.gltf");

  const store = build(state => state);
  const [select, setSelect] = useState(null);

  const handleClick = (e) => {
    const val = SelectObject(e.eventObject.position, 'player', store);

    setSelect(val)
  }

  return (
    <group {...props} dispose={null} scale={0.03} rotation={[Math.PI / 2, -0.25, 0]} 
    onClick = {
      handleClick
    } >

      <Select enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_3.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_2.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_1.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_5.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_4.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_4.material}
        />

      </Select>
    </group>

  );
}