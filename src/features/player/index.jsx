import { useEffect, useRef, useState } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3, MathUtils } from 'three';
import { useKeyboardControls } from '@hooks/useKeyboardControls';
import CameraControll from './components/cameraControll';
import { player, map } from '@store/store';
//import Sword from '@models/equipement/sword';
import './index.scss';

const frontVector = new Vector3(0, 0, 0);
const sideVector = new Vector3(0, 0, 0);
const direction = new Vector3(0, 0, 0);
const rotation = new Vector3(0, 0, 0);

const Index = ({ position, lerp = MathUtils.lerp }) => {

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
    //const rightHand = useRef()

    useEffect(() => {
        api.velocity.subscribe((v) => {
            velocity.current = v
        })
    }, [api.velocity])

    useFrame((state) => {

        //update camera
        camera.position.copy(ref.current.position);

        //update righthand
       /*  rightHand.current.rotation.x = lerp(rightHand.current, Math.sin((velocity.current.length > 1) * state.clock.elapsedTime * 10) / 6, 0.1);
        rightHand.current.rotation.copy(camera.rotation)
        rightHand.current.position.copy(camera.rotation).add(camera.getWorldDirection(rotation).multiplyScalar(1))  */
    
        //chat closed - movement
        if (!storeMap.chatInput){
            frontVector.set(0, 0, moveBackward - moveForward);
            sideVector.set(moveLeft - moveRight, 0, 0);
            
            direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(storePlayer.secondaryStats.movementSpeed)
            .applyEuler(camera.rotation);
        }

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
            <CameraControll />
            
            {/* <group ref={rightHand} onPointerMissed={(e) => (rightHand.current.children[0].rotation.x = -0.5)}>
                <Sword position={[0.3, -0.65, 5]} />
            </group> */}
            
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