import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/helperObject';
import asset from './rock.gltf';

export const Rock_1 = (props) => {
    const { nodes, materials } = useGLTF(asset);

    const [isSelected, handleClick] = useSelectObject();

    return (
        <group {...props} dispose={null}
        onClick = { handleClick } >

            <Select enabled={isSelected}>

                <mesh
                    position={[-1.45, -2, -2]}
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.defaultMat}
                />

            </Select>

        </group>
    );
}

useGLTF.preload(asset)