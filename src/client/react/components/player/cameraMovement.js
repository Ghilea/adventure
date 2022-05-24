import React, {useEffect, useRef} from 'react';
import { PointerLockControls as PointerLockControlsImpl } from '@react-three/drei';
import { extend, useThree } from '@react-three/fiber';
import { map } from '../store';

extend({ PointerLockControlsImpl });

export const CameraMovement = (props) => {

    const storeMap = map(state => state);

    const {camera, gl} = useThree();
    const controls = useRef();

    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock();
           console.log(controls.current);
        })
    }, [])

    useEffect(() => {
        if (storeMap.showCharacterSheet) {
            controls.current.unlock();
        }else{
            controls.current.lock();
        }
    }, [storeMap.showCharacterSheet])

    return <PointerLockControlsImpl ref={controls} args={[camera, gl.domElement]} />;
}