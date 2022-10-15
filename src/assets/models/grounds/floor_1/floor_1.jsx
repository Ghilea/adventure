import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import FloorAsset from './floor_1.gltf';

export const StoneFloor = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(FloorAsset);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.cobblecobble3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.cobblecobble2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.cobblecobble1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.cobblecobble}
        />
      </group>
    </group>
  );
}