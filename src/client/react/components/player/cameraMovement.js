import React, { useEffect, useRef, useState } from 'react';
import { PointerLockControls as PointerLockControlsImpl } from '@react-three/drei';
import { extend, useThree } from '@react-three/fiber';
import { map } from '@comp/store';

extend({ PointerLockControlsImpl });

export const CameraMovement = () => {

    const storeMap = map(state => state);

    const [unlocked, setUnlocked] = useState(false);

    const {camera, gl} = useThree();
    const controls = useRef();

    useEffect(() => {
        if (storeMap.camera) {
            controls.current.unlock();
            setUnlocked(true);
        }else{
            setUnlocked(false);
            controls.current.lock();
        }
    }, [storeMap.camera])

    return (
            <>
                {
                    (storeMap.camera && unlocked) ? 
                    <></>
                    : <PointerLockControlsImpl ref={controls} args={[camera, gl.domElement]} />
                }
            </>
        )
}