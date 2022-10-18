import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@editor/helperObject';
import RockAsset from './rock.gltf';

export const Rock_1 = (props) => {
    const { nodes, materials } = useGLTF(RockAsset);

    const store = build(state => state);
    const [select, setSelect] = useState(null);

    const handleClick = (e) => {
        e.stopPropagation();
        const val = SelectObject(e.eventObject.position, 'rock', store);

        setSelect(val)
    }

    return (
        <group {...props} dispose={null}
        onClick = { handleClick } >

            <Select enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>

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