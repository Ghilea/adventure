import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@editor/helperObject'
import swordAsset from './sword.glb';

export const Sword = (props) => {
  
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(swordAsset);
  const { actions } = useAnimations(animations, group);
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.01, 0, -0.02]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Plane_1"
                position={[0.01, 0, 0.2]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane001_2"
                position={[0.01, 0, 0.2]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane002_3"
                position={[0.01, 0, 0.19]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane003_4"
                position={[0.01, 0, 0.19]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane004_5"
                position={[0.01, 0, 0.19]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane005_6"
                position={[0.01, 0, 0.19]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane006_7"
                position={[0, 0, 0.22]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane007_8"
                position={[0, 0, 0.22]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane008_9"
                position={[0, 0, 0.2]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane009_10"
                position={[0, 0, 0.2]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane010_11"
                position={[0, 0, 0.21]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane011_12"
                position={[0, 0, 0.21]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Overall_Length_13"
                position={[0.01, 0.07, 0.45]}
                scale={0}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Double_Sided_Annotations}
                />
              </group>
              <group
                name="Grip_Length001_14"
                position={[0, -0.03, 0.33]}
                scale={0}
              >
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Double_Sided_Annotations}
                />
              </group>
              <group
                name="Overall_Length001_15"
                position={[0.01, 0.07, -0.47]}
                scale={0}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Double_Sided_Annotations}
                />
              </group>
              <group
                name="Plane012_17"
                position={[0.01, 0.01, 0.27]}
                rotation={[-0.02, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane013_18"
                position={[0.01, 0, 0.27]}
                rotation={[-0.01, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane014_19"
                position={[0.01, 0, 0.27]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane015_20"
                position={[0.01, -0.01, 0.27]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0}
              >
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane016_21"
                position={[0, 0.01, 0.27]}
                rotation={[-0.02, -0.03, -1.57]}
                scale={0}
              >
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane017_22"
                position={[0, 0, 0.27]}
                rotation={[-0.01, -0.03, -1.57]}
                scale={0}
              >
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane018_23"
                position={[0, 0, 0.27]}
                rotation={[0, -0.03, -1.57]}
                scale={0}
              >
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="Plane019_24"
                position={[0, -0.01, 0.27]}
                rotation={[0.01, -0.03, -1.57]}
                scale={0}
              >
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.Annotations}
                />
              </group>
              <group
                name="LEdge001_27"
                position={[-0.01, 0.04, -0.26]}
                rotation={[0, -0.01, 0]}
                scale={0}
              >
                <mesh
                  name="mesh_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27.geometry}
                  material={materials.Double_Sided_Annotations}
                  morphTargetDictionary={nodes.mesh_27.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_27.morphTargetInfluences}
                />
              </group>
              <group name="UEdge004_28" scale={0}>
                <mesh
                  name="mesh_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28.geometry}
                  material={materials.Double_Sided_Annotations}
                  morphTargetDictionary={nodes.mesh_28.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_28.morphTargetInfluences}
                />
              </group>
              <group
                name="Moonbrand_small_0"
                position={[0.01, 0, -0.46]}
                rotation={[-Math.PI / 2, -1.36, Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Moonbrand_Mat}
                />
              </group>
              <group name="Scale_Bar001_16" position={[0, -0.01, -0.05]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials["Scale_Bar_Mat.001"]}
                />
              </group>
              <group name="OL_25" position={[0.01, 0.17, 0]} scale={0.01}>
                <mesh
                  name="mesh_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_25.geometry}
                  material={materials.Annotations}
                  morphTargetDictionary={nodes.mesh_25.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_25.morphTargetInfluences}
                />
              </group>
              <group
                name="Original_Wood_26"
                position={[0.01, -0.06, 0.33]}
                scale={0.01}
              >
                <mesh
                  name="mesh_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26.geometry}
                  material={materials.Annotations}
                  morphTargetDictionary={nodes.mesh_26.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_26.morphTargetInfluences}
                />
              </group>
              <group
                name="Original_Wood001_29"
                position={[0, -0.06, 0.33]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="mesh_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_29.geometry}
                  material={materials.Annotations}
                  morphTargetDictionary={nodes.mesh_29.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_29.morphTargetInfluences}
                />
              </group>
              <group
                name="OL001_30"
                position={[0.01, 0.17, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="mesh_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_30.geometry}
                  material={materials.Annotations}
                  morphTargetDictionary={nodes.mesh_30.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_30.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}