import React from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import UseSolid from "../../components/use-solid";
import asset from './wall.glb';

export const Wall_1 = ({ position, rotation, ...props }) => {
  const { nodes, materials } = useGLTF(asset);

  const [isSelected, handleClick] = useSelectObject();

  return (
    <>
      <group dispose={null}
        onClick={handleClick}
        position={position}
        rotation={rotation}
        {...props}
        scale={[1.6, 1.5, 1.6]}>
        <Select enabled={isSelected}>
          <mesh
            rotation={[0, Math.PI * (180 / 360), 0]}
            position={[0, -1.3, 0]}
            castShadow
            receiveShadow
            geometry={nodes.Side.geometry}
            material={materials.muretdroitmat}
          />
        </Select>
      </group>

      <UseSolid position={[position[0], position[1] - 0.9, position[2]]} rotation={rotation} size={[5, 2.2, 0.5]} />
    </>

  );
}

useGLTF.preload(asset)