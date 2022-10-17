import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { build } from '@store/editor';
import { Select } from '@react-three/postprocessing';
import { SelectObject } from '@editor/helperObject';
import FloorAsset from './floor_1.glb';

const Floor_1 = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF(FloorAsset);
  
  const store = build(state => state);
  const [select, setSelect] = useState(null);

  const handleClick = (e) => {
    e.stopPropagation();
    const val = SelectObject(e.eventObject.position, 'object', store);

    setSelect(val)
  }

  return (
    <group ref={group} {...props} scale={[0.0625, 0.1, 0.062]} dispose={null}>
      <group position={[0, -20.22, 0]} rotation={[-Math.PI / 2, 0, Math.PI * (0/360)]}>

        <Select enabled={(select === store.selected && store.selected !== null && select !== null) ? true : false}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground_0.geometry}
          material={materials.ground}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground_0_1.geometry}
          material={materials.ground}
          />
        </Select>
      </group>
    </group>
  );
}

export default Floor_1