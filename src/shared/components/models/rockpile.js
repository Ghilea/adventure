import React, { useRef } from "react";
import { useLoader } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
import { TextureLoader, RepeatWrapping } from 'three';
import aoImg from '@shared/assets/images/3d/rock/rock_ao.jpg';
import dImg from '@shared/assets/images/3d/rock/rock_d.jpg';
import nImg from '@shared/assets/images/3d/rock/rock_n.jpg';
import s from '@shared/assets/images/3d/rock/rock_s.jpg';
import t from '@shared/assets/images/3d/rock/texture.jpg';

export const RockPile = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("./assets/images/3d/rock/Rock.gltf");

    const [texture, ao, d, n] = useLoader(TextureLoader, [t, aoImg, dImg, nImg]);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(10, 10);

    return (
    <group ref = {
        group
    } {
        ...props
    }
    dispose = {
        null
    }>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock_6.geometry}
        material={nodes.Rock_6.material}
        material-color={'grey'}
        >
            <meshStandardMaterial attach="material" 
            map={texture}
            displacementMap={d}
            aoMap={ao}
            normalMap={n}
            transparent={true} />
        </mesh>
  
    </group>
    );
}