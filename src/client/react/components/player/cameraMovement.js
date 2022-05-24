import React, {useEffect, useRef} from 'react';
import { PointerLockControls as PointerLockControlsImpl } from '@react-three/drei';
import { extend, useThree } from '@react-three/fiber';

extend({ PointerLockControlsImpl });

export const CameraMovement = (props) => {

    const {camera, gl} = useThree();
    const controls = useRef();

    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock();
           console.log(controls.current);
        })
    }, [])

    return <PointerLockControlsImpl ref={controls} args={[camera, gl.domElement]} />;
}