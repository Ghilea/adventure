import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const PlayerPose = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/images/3d/player.gltf");

  return (
    <group {...props} dispose={null} scale={0.03} rotation={[Math.PI / 2, 0, Math.PI]}>
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
    </group>
  );
}

/*<group ref={group} {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.03}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[1.71, -0.21, 0.63]}>
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
          </group>
        </group>
      </group>
    </group>*/