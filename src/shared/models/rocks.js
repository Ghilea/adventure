import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';
import { build } from '@devComp/store';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@devComp/helper/selectObject'

export const Rock_1 = (props) => {
    console.log('test')
    const group = useRef();
    const { nodes, materials } = useGLTF("./assets/images/3d/rock.gltf");

    return (
        <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-1.35, -1.05, -1.22]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.defaultMat}
            />
            </group>
        </group>
        </group>
    );
}