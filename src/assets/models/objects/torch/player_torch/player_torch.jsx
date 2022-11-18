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
                position={[0.45, -1.5, 0]}
                scale={[0.03, 0.03, 0.03]}
                rotation={[0, Math.PI * (-180 / 360), 0]} >

                <Select
                    enabled={isSelected}>
                    <group position={[-291.22, 0, 0]}>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.torch_torch_0.geometry}
                        material={materials.torch} />

                    </group>

                    <Flame position={[0, 30, 2]} />

                </Select>
            </group>
        </group>
    );
}

useGLTF.preload(asset)

export default WallTorch