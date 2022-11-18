import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Flame } from '../components/flame';
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import asset from './player_torch.glb';

const WallTorch = (props) => {

    const group = useRef();
    const { nodes, materials } = useGLTF(asset);

    const [isSelected, handleClick] = useSelectObject();

    return (
        <group
            receiveShadow
            castShadow ref={group}
            onClick={handleClick}
            {...props}
            dispose={null}>

            <group
                position={[-0.2, -0.2, 0.9]}
                scale={[0.03, 0.03, 0.03]}
                rotation={[Math.PI * (-30 / 360), Math.PI * (160 / 360), 0]} >

                <Select
                    enabled={isSelected}>
                    <group scale={10} position={[0, 0, 0]} rotation={[Math.PI * (-250 / 360), Math.PI * (60 / 360), Math.PI * (0 / 360)]}>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.torch_torch_0.geometry}
                        material={materials.torch} />

                    </group>

                    <Flame position={[6, 7, -5.8]} />

                </Select>
            </group>
        </group>
    );
}

useGLTF.preload(asset)

export default WallTorch