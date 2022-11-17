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
        scale={0.012}
        position={[0.25, 0.5, 0.4]}
        rotation={[Math.PI * (0 / 360), Math.PI * (-70 / 360), Math.PI * (-330 / 360)]}
        castShadow
        receiveShadow
        geometry={nodes.shield_lambert1_0.geometry}
        material={materials.lambert1} />

    </group>
  );
}

useGLTF.preload(asset)

export default VikingShield