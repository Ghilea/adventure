import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@devComp/store';

export const StoneWall = (props) => {
  
  const group = useRef();
  const { nodes } = useGLTF("./assets/images/3d/stoneWall.gltf");

  return (
    <group ref = {group} {...props} dispose = {null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 99.88, 100]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_1.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_2.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_2.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_3.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_3.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_4.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_4.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_6.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_6.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_5.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_5.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_7.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_7.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_PhotoscannedStoneWall01_Final_0_8.geometry}
              material={nodes.Plane_PhotoscannedStoneWall01_Final_0_8.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export const StoneWall_2 = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/images/3d/stoneWall_2.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={nodes.Object_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={nodes.Object_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={nodes.Object_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={nodes.Object_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={nodes.Object_6.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={nodes.Object_7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={nodes.Object_8.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={nodes.Object_9.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={nodes.Object_10.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={nodes.Object_11.material}
        />
      </group>
    </group>
  );
}

export const StoneWall_3 = (props) => {

  const { nodes, materials  } = useGLTF("./assets/images/3d/stoneWall_3.gltf");

  const [solid] = useBox(() => ({
    args: [5, 3.5, 1],
    position: [props.position[0], props.position[1] -0.5, props.position[2]],
    rotation: (props.rotation !== undefined) ? (props.rotation[1] === Math.PI * (360/360)) ? [0, Math.PI * (180/360), 0] : [0, Math.PI * (360/360), 0] : [0, 0, 0]
  }));
  
  const store = build(state => state);

  const removeWall = (e) => {
    console.log('click', e);
    console.log('wall', store.walls[0].pos);
    store.removeWall(e.object.position.x, e.object.position.z)

    const filtredItem = store.walls.filter((item) => {
      return item.pos[0] === e.object.position.x && item.pos[2] === e.object.position.z
    })
    console.log(filtredItem[0])
    store.removeIndex(filtredItem[0].indexKey);
  }

  return (
    <group dispose = {null}
    onClick = {removeWall}
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