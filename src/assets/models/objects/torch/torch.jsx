import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Flame } from '@models/misc/flames/flame';
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@editor/helperObject';
import TorchAsset from './torch.gltf';

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF(TorchAsset);

    const store = build(state => state);
    const [select, setSelect] = useState(null);

    const handleClick = (e) => {
        if (store.isEditor) {
            e.stopPropagation();
            const val = SelectObject(e.eventObject.position, 'torch', store);

            setSelect(val)
        }
    }

    return (
        <group ref={group} onClick={handleClick} {...props} dispose={null}>
            <group position={[0, -1.5, -0.3]} scale={[0.03, 0.03, 0.03]} >
                <Select
                    enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>
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
                </Select>
            </group>
        </group>  
    );
}