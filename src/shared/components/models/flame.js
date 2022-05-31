import React, { useRef, useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";

export const Flame = (props) => {
  
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/images/3d/flame/flame.gltf");

  const [lightAnimation, setLightAnimation] = useState(2);
  const [flameAnimation, setFlameAnimation] = useState(0.5);

  useEffect(() => {
    setTimeout(() => {
      if (lightAnimation === 2) {
        setLightAnimation(1.8);
      } else {
        setLightAnimation(2);
      }

    }, Math.floor(Math.random() * (500 - 300 + 1) + 300))
  }, [lightAnimation])

  useEffect(() => {
    setTimeout(() => {
      if (flameAnimation === 0.5) {
        setFlameAnimation(0.6);
      } else {
        setFlameAnimation(0.5);
      }

    }, Math.floor(Math.random() * (300 - 100 + 1) + 100))
  }, [flameAnimation])

  return (
    <group ref = {
      group
    } {
      ...props
    }
    rotation = {
      [0, flameAnimation, 0]
    }
    scale = {
      [0.5, flameAnimation, 0.5]
    }
    dispose = {
      null
    } >
      <mesh
        castShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        material-color={'yellow'}
      />

      <pointLight
            intensity={lightAnimation}
            distance={5.5}
            color={'#d4c4af'}
            position={[0, 0.5, -2]}
            castShadow
            shadow-mapSize={[2048, 2048]}
            />
    </group>
  );
}
