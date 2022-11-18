import React from "react";
import { useGLTF } from "@react-three/drei";
import asset from './viking_shield.glb';

const VikingShield = ({ rotation, position }, props) => {

  const { nodes, materials } = useGLTF(asset);

  return (
    <group
      {...props}
      position={position}
      rotation={rotation}
      dispose={null}>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shield_lambert1_0.geometry}
        material={materials.lambert1} />

    </group>
  );
}

useGLTF.preload(asset)

export default VikingShield