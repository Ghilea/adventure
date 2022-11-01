import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import asset from './knight.glb'

const Knight = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(asset);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if(!actions.idle1.isRunning())
        {
            actions.idle1.play()
        }
    }, [])

    return (
        <group ref={group} {...props} dispose={null} position={[0.05,-1,-0.1]} scale={[0.009,0.009,0.009]}>

            <group name="Sketchfab_Scene">
             
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="c7679cdd5a96477ba7e8c979c5fb4a97fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <group
                                        name="hipcontrol"
                                        position={[0, 103.15, 4.18]}
                                        rotation={[1.66, 0, -Math.PI]}
                                    >
                                        <group
                                            name="headcontrol"
                                            position={[0, 0.6, -80.92]}
                                            rotation={[-0.11, 0.05, -0.24]}
                                        />
                                        <group
                                            name="spinecontrol"
                                            position={[0, 0, -22.11]}
                                            rotation={[0.15, 0, 0]}
                                        >
                                            <group
                                                name="chestcontrol"
                                                position={[0, 0.24, -21.05]}
                                                rotation={[-0.08, 0, -0.03]}
                                            >
                                                <group
                                                    name="R_arm_Goal"
                                                    position={[23.1, 1.12, -13.83]}
                                                    rotation={[-3.09, -0.96, -1.56]}
                                                >
                                                    <group
                                                        name="R_arm_Pole"
                                                        position={[41.52, -2.74, -21.77]}
                                                        rotation={[-0.35, 0.52, 0.18]}
                                                    />
                                                    <group
                                                        name="R_wrist_Goal"
                                                        position={[-7.64, -34.18, -43.59]}
                                                        rotation={[-1.63, 0.4, 0.53]}
                                                    />
                                                </group>
                                                <group
                                                    name="L_arm_Goal"
                                                    position={[-23.09, 1.14, -14.99]}
                                                    rotation={[-2.92, 0.91, 1.35]}
                                                >
                                                    <group
                                                        name="L_wrist_Goal"
                                                        position={[7.56, -32.42, -46.23]}
                                                        rotation={[-1.65, -0.41, -0.67]}
                                                    />
                                                    <group
                                                        name="L_arm_Pole"
                                                        position={[-41.52, -2.74, -21.77]}
                                                        rotation={[-0.35, -0.52, -0.18]}
                                                    />
                                                </group>
                                                <group
                                                    name="neckcontrol"
                                                    position={[0, -0.27, -27.46]}
                                                    rotation={[-0.31, 0, 0]}
                                                />
                                            </group>
                                        </group>
                                    </group>
                                    <primitive object={nodes._rootJoint} />
                                    <group name="Object_6" position={[0, 118.91, 0]} />
                                    <group name="Object_8" position={[0, 122.01, 0]} />
                                    <group
                                        name="L_anke_Goal"
                                        position={[19.38, 15.97, -5.17]}
                                        rotation={[-2.3, -0.19, -3.08]}
                                    />
                                    <group
                                        name="R_anke_Goal"
                                        position={[-20.09, 15.97, -3.76]}
                                        rotation={[-2.3, 0.16, 3.11]}
                                    />
                                    <group
                                        name="L_leg_Pole"
                                        position={[25.07, 70.99, 99.66]}
                                        rotation={[-1.31, 0, -Math.PI]}
                                    />
                                    <group
                                        name="R_leg_Pole"
                                        position={[-31.12, 70.99, 99.66]}
                                        rotation={[-1.31, 0, Math.PI]}
                                    />
                                    <group name="meshes" position={[0, 100.18, 2.11]}>
                                        <group name="cloth" position={[0, 18.73, -2.11]} />
                                        <group name="body" position={[0, 21.82, -2.11]} />
                                    </group>
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.cloth}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.knight}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload(asset);

export default Knight;

