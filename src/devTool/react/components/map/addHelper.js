import React, {
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import * as texture from './textures';
import { StoreContext } from '../store';
import { useCamera } from '@react-three/drei';

export const AddHelper = () => {
    
    const [store, setStore] = useContext(StoreContext);

    return (
        <mesh raycast={useCamera()}>
            <meshStandardMaterial
                map = {
                    (store.build.isWall.texture == 'stone') ? texture.stone(): (store.build.isWall.texture == 'stone2') ? texture.stone2() : (store.build.isWall.texture == 'stoneWindow') ? texture.stoneWindow() : ''
                }
                opacity = {0.5}
                transparent = {true}
                />
            
            <boxGeometry args = {[8, 4, 0.5]} />
        </mesh>
    )
}