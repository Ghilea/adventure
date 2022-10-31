import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Flame } from '@models/misc/flames/flame';
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/helperObject';
import asset from './torch.gltf';

export const Torch = (props) => {
    
    const group = useRef();
    const {nodes, materials} = useGLTF(asset);

    const [isSelected, handleClick] = useSelectObject();

    return (
        <group ref={group} onClick={handleClick} {...props} dispose={null}>
            <group position={[0, -1.5, -0.525]} scale={[0.03, 0.03, 0.03]} >
                <Select
                    enabled={isSelected}>
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

useGLTF.preload(asset)