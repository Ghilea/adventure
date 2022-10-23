import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import asset from './female_avatar.glb';

const Female_avatar = (props) => {
    const { nodes, materials } = useGLTF(asset);
    return (
        <group {...props} position={[0, -0.9, 1]} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                        geometry={nodes.Object_12.geometry}
                        material={materials.EyesMat}
                        skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_8.geometry}
                        material={materials.Armor2Mat}
                        skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_6.geometry}
                        material={materials.Armor1Mat}
                        skeleton={nodes.Object_6.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_7.geometry}
                        material={materials.CapeMat}
                        skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_10.geometry}
                        material={materials.BodyMat}
                        skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_11.geometry}
                        material={materials.BodyMat}
                        skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_9.geometry}
                        material={materials.BeltsMat}
                        skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_13.geometry}
                        material={materials.SwordAndShieldMat}
                        skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Object_14.geometry}
                        material={materials.SwordAndShieldMat}
                        skeleton={nodes.Object_14.skeleton}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload(asset);
export default Female_avatar