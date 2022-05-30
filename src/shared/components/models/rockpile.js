import React, { useRef } from "react";
import { useLoader } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three';
import height from '@shared/assets/images/3d/texture/rock/Rock_height.jpg';
import displacement from '@shared/assets/images/3d/texture/rock/Rock_displacement.jpg';
import normal from '@shared/assets/images/3d/texture/rock/Rock_normal.jpg';
import s from '@shared/assets/images/3d/texture/rock/Rock_6_s.jpg';

export const RockPile = (props) => {
    //heightMap = black & white image
    const group = useRef();
    const { nodes, materials } = useGLTF("./assets/images/3d/Rock.gltf");
    const displacementMap = useLoader(TextureLoader, displacement);
    const heightMap = useLoader(TextureLoader, height);
    const normalMap = useLoader(TextureLoader, normal);
    const sMap = useLoader(TextureLoader, s);

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
        material={nodes.Rock_6.material}>

            <meshPhysicalMaterial 
            heightMap = {heightMap}
            displacementMap = {displacementMap}
            map = {normalMap}/>
            s={sMap}
        </mesh>
  
    </group>
    );
}