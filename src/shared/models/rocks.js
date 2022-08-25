import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@devComp/store';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@devComp/helper/helperObject'
import { RotateObjectBtn } from '@devComp/interface/buttons';

export const Rock_1 = (props) => {
    const { nodes, materials } = useGLTF("./assets/images/3d/rock.gltf");

    const store = build(state => state);
    const [select, setSelect] = useState(null);

    const handleClick = (e) => {
        e.stopPropagation();
        const val = SelectObject(e.eventObject.position, 'object', store);

        setSelect(val)
    }

    return (
        <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]}
        onClick = { handleClick } >

            <Select enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.defaultMat}
                />

            </Select>

        </group>
    );
}