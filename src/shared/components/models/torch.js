import React, { useEffect, useRef, useState } from "react";
import { useLoader } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
import { TextureLoader, RepeatWrapping } from 'three';
import { Flame } from '@shared/components/models/flame';
import t from '@shared/assets/images/3d/torch/texture.jpg';

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF("./assets/images/3d/torch/Torch.gltf");

    const [texture] = useLoader(TextureLoader, [t]);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(10, 10);
        
    return (
        <group castShadow receiveShadow ref = {group} {...props} dispose = {null} >
            
            <mesh castShadow receiveShadow geometry = {
                nodes.lsdGroup15825.geometry
            }
            material = {
                nodes.lsdGroup15825.material
            }>
                <meshStandardMaterial attach="material" 
                map={texture}
                transparent={true}
                color={'#323232'} />
            </mesh> 
            
            <mesh castShadow receiveShadow geometry = {nodes.chorchGroup1799_Mashal.geometry} material = {nodes.chorchGroup1799_Mashal.material} >
                <meshStandardMaterial attach="material" 
                map={texture}
                transparent={true} 
                color={'#323232'} />
            </mesh>  
        
            <mesh castShadow receiveShadow geometry = {nodes.Mashal_MMMGroup63307.geometry} material = {nodes.Mashal_MMMGroup63307.material} >
                <meshStandardMaterial attach="material" 
                map={texture}
                transparent={true} 
                color={'#323232'} />
            </mesh> 
            <Flame position={[-1, 3, 3.9]} rotation={[0,0,0]} scale={[0.5, 0.5, 0.5]}/>    
        </group>
    );
}