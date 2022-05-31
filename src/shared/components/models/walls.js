import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const StoneWall = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/images/3d/stoneWall.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0, 0, 6.28]}
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