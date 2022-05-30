import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF("./assets/images/3d/Torch.gltf");
    const [animation, setAnimation] = useState(2);

    useEffect(() => {
        setTimeout(()=>{
            if(animation === 2){
                setAnimation(1.8);
            }else{
                setAnimation(2);
            }
            
        }, Math.floor(Math.random() * (500 - 300 + 1) + 300))
    }, [animation])
    
    return ( 
        <group castShadow receiveShadow ref = {group} {...props} dispose = {null} >
            
            <mesh castShadow receiveShadow geometry = {nodes.lsdGroup15825.geometry} material = {nodes.lsdGroup15825.material}/> 
            
            <mesh castShadow receiveShadow geometry = {nodes.chorchGroup1799_Mashal.geometry} material = {nodes.chorchGroup1799_Mashal.material}/> 
        
            <mesh castShadow receiveShadow geometry = {nodes.Mashal_MMMGroup63307.geometry} material = {nodes.Mashal_MMMGroup63307.material}/>

            <pointLight
            intensity={animation}
            distance={5}
            color={'white'}
            position={[0, 0.5, -2]}
            castShadow
            />

        </group>
    );
}