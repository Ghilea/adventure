import React, { useRef, useEffect, useState} from "react";
import { useGLTF, PositionalAudio } from "@react-three/drei";
import asset from './flame.gltf';
import audio from '@sounds/torch-ambience.mp3';

export const Flame = (props) => {
  
  const group = useRef();
  const { nodes, materials } = useGLTF(asset);

  const [lightAnimation, setLightAnimation] = useState(2);
  const [flameAnimation, setFlameAnimation] = useState(1.5);

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
      if (flameAnimation === 1.5) {
        setFlameAnimation(1.51);
      } else {
        setFlameAnimation(1.5);
      }

    }, Math.floor(Math.random() * (200 - 100 + 1) + 100))
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
      [1.5, flameAnimation, 1.5]
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
        castShadow
        shadow-mapSize-width={2048} //performance issue
        shadow-mapSize-height={2048} //performance issue
         shadow-radius={10} 
        shadow-bias={-0.0001}
        intensity={lightAnimation}
        distance={2.4}
        color={'#d4c4af'}
        position={[0, 0.5, 0]}
        scale={[5,5,5]}
      />

      <PositionalAudio
        autoplay
        url={audio}
        distance={1}
        loop
        {...props} // All THREE.PositionalAudio props are valid
      />

    </group>
  );
}

useGLTF.preload(asset)