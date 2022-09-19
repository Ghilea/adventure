import React, { useEffect, useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useKeyboardControls } from '@hooks/useKeyboardControls';
import { CameraMovement } from '@comp/player/cameraMovement';
import { player } from '@comp/store';
import { map } from '@comp/store';

export const Player = ({position, ...props}) => {

    const storePlayer = player(state => state);
    const storeMap = map(state => state);

    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        jump
    } = useKeyboardControls();

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        position,
        ...props
    }))

    const velocity = useRef([0, 0, 0]);

    useEffect(() => {
        api.velocity.subscribe((v) => {
            velocity.current = v
        })
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(ref.current.position);
      
        const direction = new Vector3();
        const frontVector = new Vector3(0, 0, ((moveBackward && !storeMap.chatInput) ? 1 : 0) - ((moveForward && !storeMap.chatInput) ? 1 : 0));
        const sideVector = new Vector3(((moveLeft && !storeMap.chatInput) ? 1 : 0) - ((moveRight && !storeMap.chatInput) ? 1 : 0), 0, 0);
        
        direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(storePlayer.movementSpeed)
        .applyEuler(camera.rotation);
        
        api.velocity.set(direction.x, velocity.current[1], direction.z);

        ref.current.getWorldPosition(ref.current.position)

        if (jump && !storeMap.chatInput && Math.abs(velocity.current[1].toFixed(2)) <= 0.00) {
            api.velocity.set(velocity.current[0], 8, velocity.current[2]);  
        }
    });

    return (
        <>
            <CameraMovement />
            <mesh ref={ref} castShadow receiveShadow >
                <pointLight
                intensity={2}
                distance={5.5}
                color={'#d4c4af'}
                position={[0, 0.5, 0]}
                />
            </mesh>
        </>
    )

}