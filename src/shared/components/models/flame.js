import React, { useRef, useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";

export const Flame = (props) => {
  
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/images/3d/flame/flame.gltf");

  const [animation, setAnimation] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      if (animation === 2) {
        setAnimation(1.8);
      } else {
        setAnimation(2);
      }

    }, Math.floor(Math.random() * (500 - 300 + 1) + 300))
  }, [animation])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        material-color={'yellow'}
      />

      <pointLight
            intensity={animation}
            distance={5.5}
            color={'#d4c4af'}
            position={[0, 0.5, -2]}
            castShadow
            shadow-mapSize={[2048, 2048]}
            />
    </group>
  );
}
