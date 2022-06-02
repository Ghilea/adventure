import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useConvexPolyhedron } from '@react-three/cannon';

export const StoneWall = (props) => {
  
  const group = useRef();
  const { nodes } = useGLTF("./assets/images/3d/stoneWall.gltf");

  return (
    <group ref = {group} {...props}dispose = {null} >
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