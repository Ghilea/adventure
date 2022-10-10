import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@helper/helperObject'
import WallAsset from '@assets/images/3d/wall.glb';

export const Wall_1 = (props) => {
  const { nodes, materials  } = useGLTF(WallAsset);

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
    scale = {[1.25, 1.5, 1.6]}
    >
      <Select enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>
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