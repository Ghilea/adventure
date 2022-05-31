import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Flame } from '@shared/components/models/flame';

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF("./assets/images/3d/Torch.gltf");
        
    return ( 
        <group castShadow receiveShadow ref = {group} {...props} dispose = {null} >
            
            <mesh castShadow receiveShadow geometry = {nodes.lsdGroup15825.geometry} material = {nodes.lsdGroup15825.material}/> 
            
            <mesh castShadow receiveShadow geometry = {nodes.chorchGroup1799_Mashal.geometry} material = {nodes.chorchGroup1799_Mashal.material}/> 
        
            <mesh castShadow receiveShadow geometry = {nodes.Mashal_MMMGroup63307.geometry} material = {nodes.Mashal_MMMGroup63307.material}/>

            <Flame />

        </group>
    );
}