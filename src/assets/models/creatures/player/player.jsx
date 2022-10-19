import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@editor/helperObject'
import PlayerAsset from './player.gltf';

export const Player = (props) => {
  const { nodes, materials } = useGLTF(PlayerAsset);

  const store = build(state => state);
  const [select, setSelect] = useState(null);

  const handleClick = (e) => {
    if (store.isEditor) {
      e.stopPropagation();
      const val = SelectObject(e.eventObject.position, 'player', store);

      setSelect(val)
    }
  }

  return (
    <group {...props} dispose={null}
    onClick = {
      handleClick
    } >

      <group position={[0, -1.43, 0]} scale={0.03} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
     
        <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[1.61, -0.08, -1.64]} rotation={[1.71, -0.21, 0.63]}> 
            
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
    </group>
      </group >
    </group >

  );
}