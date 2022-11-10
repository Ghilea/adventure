import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import useViewportScale from "../../components/use-viewport-scale";
import asset from './player.gltf';

export const Player = (props) => {
  const { nodes, materials } = useGLTF(asset);

  const [isSelected, handleClick] = useSelectObject();
  const [scaleIt, setViewportScale] = useViewportScale();

  useEffect(() => {
    setViewportScale({
      width: 0.03,
      height: 0.03,
      depth: 0.05
    })
  }, [])

  return (
    <group {...props} dispose={null}
    onClick = {
      handleClick
    } >

      <group position={[0, -1.43, 0]} scale={scaleIt} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
     
        <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[1.61, -0.08, -1.64]} rotation={[1.71, -0.21, 0.63]}> 
            
            <Select enabled={isSelected}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_3.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_2.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_1.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_5.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bojovnik_bojovnikDiffuseMap_0_4.geometry}
          material={nodes.bojovnik_bojovnikDiffuseMap_0_4.material}
        />

      </Select>
      </group>
    </group>
      </group >
    </group >

  );
}

useGLTF.preload(asset)