import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Flame } from '@shared/models/flame';

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF("./assets/images/3d/torch.gltf");

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
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
        </group>  
    );
}