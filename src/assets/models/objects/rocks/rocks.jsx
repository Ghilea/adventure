import React from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import asset from './rock.gltf';
import UseSolid from "../../components/use-solid";

export const Rock_1 = (props) => {
    const { nodes, materials } = useGLTF(asset);

    const [isSelected, handleClick] = useSelectObject();

    return (
        <group {...props} dispose={null}
        onClick = { handleClick } >

            <Select enabled={isSelected}>

                <mesh
                    position={[-1.5, -2, -1.2]}
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.defaultMat}
                />

            </Select>

            <UseSolid position={[0, -1, 0]} size={[2, 2, 2]}/>
        </group>
    );
}

useGLTF.preload(asset)