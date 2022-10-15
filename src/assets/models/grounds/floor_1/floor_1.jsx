import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import FloorAsset from './floor_1.glb';

const Floor_1 = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF(FloorAsset);

  return (
    <group ref={group} {...props} scale={[0.0625, 0.1, 0.062]} dispose={null}>
      <group position={[0, -20.22, 0]} rotation={[-Math.PI / 2, 0, Math.PI * (0/360)]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground_0.geometry}
          material={materials.ground}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground_0_1.geometry}
          material={materials.ground}
        />
      </group>
    </group>
  );
}

export default Floor_1