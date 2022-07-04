import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@devComp/store';
import { Select } from '@react-three/postprocessing';

export const Wall_1 = (props) => {

  const { nodes, materials  } = useGLTF("./assets/images/3d/stoneWall_3.gltf");

  const [solid] = useBox(() => ({
    args: [5, 3.5, 1],
    position: [props.position[0], props.position[1] -0.5, props.position[2]],
    rotation: (props.rotation !== undefined) ? (props.rotation[1] === Math.PI * (360/360)) ? [0, Math.PI * (180/360), 0] : [0, Math.PI * (360/360), 0] : [0, 0, 0]
  }));
  
  const store = build(state => state);
  const [objectSelected, setObjectSelected] = useState(null);

  const handleSelect = (e) => {
    e.stopPropagation()

    const check = store.object.filter((item) => {
      return item.position[0] === e.eventObject.position.x && item.position[1] === e.eventObject.position.y && item.position[2] === e.eventObject.position.z && item.type === 'wall'
    })

    if (check.length > 0) {

      if (store.selected === null) {
        console.log('found object and select it', check[0].objectId)
        store.selectedObject(check[0].objectId)
        setObjectSelected(check[0].objectId)
      }
      
      if (store.selected !== null && check[0].objectId === store.selected) {
        console.log('same - close it', check[0].objectId)
        store.selectedObject(null)
        setObjectSelected(null)
      }

      if(store.selected !== null && check[0].objectId !== store.selected) {
        console.log('not same - close all and select the new', check[0].objectId)
        
        //reset first
        store.selectedObject(null)
        setObjectSelected(null)

        store.selectedObject(check[0].objectId)
        setObjectSelected(check[0].objectId)
      }
    }
  }

  return (
    <group dispose = {null}
    onClick = {handleSelect}
    {...props} 
    scale = {[0.65, 1, 0.65]}
    >
      <Select enabled={(objectSelected === store.selected && store.selected !== null && objectSelected !== null) ? true : false}>
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