import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@devComp/store';

export const Wall_1 = (props) => {

  const { nodes, materials  } = useGLTF("./assets/images/3d/stoneWall_3.gltf");

  const [solid] = useBox(() => ({
    args: [5, 3.5, 1],
    position: [props.position[0], props.position[1] -0.5, props.position[2]],
    rotation: (props.rotation !== undefined) ? (props.rotation[1] === Math.PI * (360/360)) ? [0, Math.PI * (180/360), 0] : [0, Math.PI * (360/360), 0] : [0, 0, 0]
  }));
  
  const store = build(state => state);

  const handleSelect = (e) => {
    e.stopPropagation()
    const check = store.object.filter((item) => {
      return item.position[0] === e.eventObject.position.x && item.position[1] === e.eventObject.position.y && item.position[2] === e.eventObject.position.z && item.type === 'wall'
    })

    if(check.length > 0 && e.object.id !== store.selected && store.selected === null){
      console.log('found object and select it')
      store.selectedObject(check)
    }
    
  }

  return (
    <group dispose = {null}
    onClick = {handleSelect}
    {...props} 
    scale = {[0.65, 1, 0.65]}
    >
      <mesh 
        position = {[0.5, 1, 1]}
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.rock_wall_1}
      />

      <mesh ref = {solid} />
  
    </group>
  );
}