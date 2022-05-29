import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF("./assets/images/3d/Torch.gltf");
    
    return ( 
        <>
        <group ref = {group} {...props} dispose = {null} >
            
            <mesh castShadow receiveShadow geometry = {nodes.lsdGroup15825.geometry} material = {nodes.lsdGroup15825.material}/> 
            
            <mesh castShadow receiveShadow geometry = {nodes.chorchGroup1799_Mashal.geometry} material = {nodes.chorchGroup1799_Mashal.material}/> 
        
            <mesh castShadow receiveShadow geometry = {nodes.Mashal_MMMGroup63307.geometry} material = {nodes.Mashal_MMMGroup63307.material}/>

            <pointLight position={[-3.5, 3, 2.5]} distance={3} intensity={7} />
            
        </group>

        </>
    );
}