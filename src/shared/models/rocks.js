import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Rock = (props) => {
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