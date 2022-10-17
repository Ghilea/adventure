import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Flame } from '@models/misc/flames/flame';
import TorchAsset from './torch.gltf';

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF(TorchAsset);

    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[0, -1.5, -0.3]} scale={[0.03, 0.03, 0.03]} >
       
                <group position={[-291.22, 0, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes.coffin___gravesTorch_low_coffin___gravesStingrayPBS1_0
                        .geometry
                    }
                    material={
                        nodes.coffin___gravesTorch_low_coffin___gravesStingrayPBS1_0
                        .material
                    }
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                    nodes.coffin___gravesTorch_base_low_coffin___gravesStingrayPBS1_0
                        .geometry
                    }
                    material={
                    nodes.coffin___gravesTorch_base_low_coffin___gravesStingrayPBS1_0
                        .material
                    }
                />
                <Flame position={[0, 30, 2]}/> 
                
            </group>
        </group>  
    );
}