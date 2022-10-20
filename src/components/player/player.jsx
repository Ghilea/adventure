import { useEffect, useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useKeyboardControls } from '@hooks/useKeyboardControls';
import CameraMovement from '@comp/player/cameraMovement';
import Equipement from './equipement';
import { player, map } from '@store/store';
import './index.scss';

const Index = ({position}) => {

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
        position: position,
        type: 'Dynamic'
    }))

    const velocity = useRef([0, 0, 0]);

    useEffect(() => {
        api.velocity.subscribe((v) => {
            velocity.current = v
        })
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(ref.current.position);
      
        let frontVector = new Vector3(0, 0, 0);
        let sideVector = new Vector3(0, 0, 0);
        let direction = new Vector3(0, 0, 0);
    
        //chat closed
        if (!storeMap.chatInput){
            frontVector.set(0, 0,
                ((moveBackward) ? 1 : 0) -
                ((moveForward) ? 1 : 0)
            );

            sideVector.set(
                ((moveLeft) ? 1 : 0) -
                ((moveRight) ? 1 : 0),
                0, 0);
        }
        
        direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(storePlayer.secondaryStats.movementSpeed)
        .applyEuler(camera.rotation);
        
        api.velocity.set(direction.x, velocity.current[1], direction.z);

        //update players "body" position
        ref.current.getWorldPosition(ref.current.position)

        storeMap.setPlayerPosition([ref.current.position.x, ref.current.position.y, ref.current.position.z])
        
        //jump
        if (jump && !storeMap.chatInput && Math.abs(velocity.current[1].toFixed(2)) <= 0.00) {
            api.velocity.set(velocity.current[0], 6, velocity.current[2]);  
        }

    });

    return (
        <>
            <CameraMovement />
            <Equipement />
            
            <mesh ref={ref}>
                <pointLight
                    intensity={2}
                    distance={3}
                    color={'#d4c4af'}
                    position={[0, 0.5, 0]}
                />
            </mesh>
        </>
    )

}

export default Index