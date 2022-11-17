import { useEffect, useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useKeyboardControls } from '@hooks/useKeyboardControls';
import CameraControll from './components/cameraControll';
import { player, map } from '@store/store';
import LoadModel from '@models/components/models';
import './index.scss';
import * as THREE from "three"


const frontVector = new Vector3(0, 0, 0);
const sideVector = new Vector3(0, 0, 0);
const direction = new Vector3(0, 0, 0);
const rotations = new Vector3(0, 0, 0);

const Index = ({ position, rotation, lerp = THREE.MathUtils.lerp }) => {

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

    //player hands
    const rightHand = useRef();
    const leftHand = useRef();

    useEffect(() => {
        api.velocity.subscribe((v) => {
            velocity.current = v
        })
    }, [api.velocity])

    useFrame((state) => {

        //update camera
        camera.position.copy(ref.current.position);

        //update hands
        //set right hand idle animation
        rightHand.current.children[0].rotation.x = lerp(
            rightHand.current.children[0].rotation.y,
            Math.sin((velocity.current.length > 1) * state.clock.elapsedTime + (camera.position.x + camera.position.z) * 0.01) / 6, 0.1)

        //follow camera rotation
        rightHand.current.rotation
            .copy(camera.rotation)
        
        leftHand.current.rotation
            .copy(camera.rotation)
        
        //follow camera position
        rightHand.current.position
            .copy(camera.position)
            .add(camera
                .getWorldDirection(rotations)
                .multiplyScalar(1)
            )
        leftHand.current.position
            .copy(camera.position)
            .add(camera
                .getWorldDirection(rotations)
                .multiplyScalar(1)
        )
        
        //chat closed - movement
        if (!storeMap.chatInput) {
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

            <group ref={rightHand}>
                <LoadModel type={'sword'} />
            </group>

            <group ref={leftHand}>
                <LoadModel type={'vikingShield'} position={[-0.2, -0.5, 0.7]} rotation={[Math.PI * (360 / 360), Math.PI * (70 / 360), Math.PI * (210 / 360)]} />
            </group>
            

            <mesh ref={ref}>
                {/* <pointLight
                    intensity={2}
                    distance={3}
                    color={'#d4c4af'}
                    position={[0, 0.5, 0]}
                /> */}
            </mesh>
        </>
    )

}

export default Index