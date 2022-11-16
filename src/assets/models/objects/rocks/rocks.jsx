import React from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import UseSolid from "../../components/use-solid";
import asset from './rock.gltf';

export const Rock_1 = ({ position, rotation, ...props }) => {
    const { nodes, materials } = useGLTF(asset);

    const [isSelected, handleClick] = useSelectObject();

    return (
        <>
            <group
                {...props}
                dispose={null}
                onClick={handleClick}
                position={position}
                rotation={rotation}>

                <Select enabled={isSelected}>

                    <mesh
                        rotation={[0, Math.PI * (180 / 360), 0]}
                        position={[-1.1, -2, 1.5]}
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.defaultMat}
                    />

                </Select>
            </group>

            <UseSolid position={[position[0], position[1] - 0.9, position[2]]} rotation={rotation} size={[1.7, 2, 1.7]} />
        </>

    );
}

useGLTF.preload(asset)