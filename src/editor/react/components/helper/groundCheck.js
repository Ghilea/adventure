import React, { useEffect } from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { ground, build, mousePosition } from '@devComp/store';

export const GroundCheck = () => {
    const storeGround = ground(state => state);
    const storeBuild = build(state => state);
    const storePosition = mousePosition(state => state);
    
    const [highLight, setHighLight] = usePlane(() => ({
        args: [storeBuild.sizeX, storeBuild.sizeY],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))
   
    useEffect(() => {
        const centerX = (Math.floor(storePosition.x) + 0.5)
        const centerZ = (Math.floor(storePosition.z) + 0.5)

        if(storeBuild.solid.length > 0){
            const check = storeBuild.solid.filter(obj => {
                return (obj.x == centerX) && (obj.z == centerZ) || (!storeBuild.rotate) ? (obj.x >= (centerX - (storeBuild.sizeX / 2))) && obj.z == centerZ && (obj.x <= (Math.floor(storePosition.x) + (storeBuild.sizeX / 2))) && obj.z == centerZ : (obj.x == centerX && obj.z >= (centerZ - (storeBuild.sizeY / 2))) && (obj.x == centerX && obj.z <= (Math.floor(storePosition.z) + (storeBuild.sizeY / 2)))
            })
            
            if (check.length > 0) {
                storeGround.groundColor('red'); 
            }else{
                storeGround.groundColor('green');
            }
            
        }

    }, [storePosition])

    useFrame(() => {
        setHighLight.position.set(Math.floor(storePosition.x) + 0.5, storePosition.y + 0.01, Math.floor(storePosition.z) + 0.5);
    })

    return (
        <mesh ref = {highLight}>
            <planeBufferGeometry attach='geometry' args = {[storeBuild.sizeX, storeBuild.sizeY]}/>
            <meshStandardMaterial attach='material' color={storeGround.color}/>
        </mesh>
    )

}