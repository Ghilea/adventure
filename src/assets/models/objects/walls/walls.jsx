import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useSelectObject } from '@editor/hooks/use-select-object';
import UseSolid from "../../components/use-solid";
import useViewportScale from "../../components/use-viewport-scale";
import asset from './wall.glb';

export const Wall_1 = (props) => {
  const { nodes, materials } = useGLTF(asset);

  const [isSelected, handleClick] = useSelectObject();

  const [scaleIt, setViewportScale] = useViewportScale();

  useEffect(() => {
    setViewportScale({
      width: 1.6,
      height: 1.5,
      depth: 1.6
    })
  }, [])

  return (
    <group dispose={null}
      onClick={handleClick}
      {...props}
      scale={scaleIt}
    >
      <Select enabled={isSelected}>
        <mesh
          rotation={[0, Math.PI * (180 / 360), 0]}
          position={[0, -1.3, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Side.geometry}
          material={materials.muretdroitmat}
        />
      </Select>

      <UseSolid position={[0, -0.5, 0]} size={[3.2, 1.5, 0.5]} />

    </group>
  );
}

useGLTF.preload(asset)