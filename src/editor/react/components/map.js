import React, { useEffect, useState } from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import * as texture from '@shared/components/textures';
import { ground, mousePosition, build } from '@devComp/store';

export const Ground = (props) => {
    const storeGround = ground(state => state);
    const storePosition = mousePosition(state => state);
    const storeBuild = build(state => state);

    const [ref] = usePlane(() => ({
        args: [storeGround.x, storeGround.y],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))
    
    const [highLight, setHighLight] = usePlane(() => ({
        args: [storeBuild.sizeX, storeBuild.sizeY],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))
   
    const pointerMove = (event) => {
        storeGround.emptySquareArea()
        const x = event.point.x;
        const y = event.point.y;
        const z = event.point.z;
        const centerX = (Math.floor(x) + 0.5)
        const centerZ = (Math.floor(z) + 0.5)

        storePosition.editPosition(x, y, z)    


        if(storeGround.square.length > 0){
            const check = storeGround.square.filter(obj => {
                return (obj.x == centerX) && (obj.z == centerZ) || (!storeBuild.rotate) ? (obj.x >= (Math.floor(x) + 0.5 - (storeBuild.sizeX / 2))) && obj.z == centerZ && (obj.x <= (Math.floor(x) + (storeBuild.sizeX / 2))) && obj.z == centerZ : (obj.x == centerX && obj.z >= (Math.floor(z) + 0.5 - (storeBuild.sizeY / 2))) && (obj.x == centerX && obj.z <= (Math.floor(z) + (storeBuild.sizeY / 2)))
            })
            
            if (check.length > 0) {
                storeGround.groundColor('red'); 
            }else{
                storeGround.groundColor('green');
            }
            
        }
    }

    useFrame(() => {
        setHighLight.position.set(Math.floor(storePosition.x) + 0.5, storePosition.y + 0.01, Math.floor(storePosition.z) + 0.5);
    })

    return (
        <>
            <mesh ref={ref} onPointerMove={pointerMove}>
                <planeBufferGeometry attach='geometry' args = {[storeGround.x, storeGround.y]} />
                <meshStandardMaterial attach='material' map={
                    (storeGround.texture == 'stone') ? texture.stone(): (storeGround.texture == 'floor') ? texture.floor() : ''
                } />
            </mesh>

            <mesh ref = {highLight}>
                <planeBufferGeometry attach='geometry' args = {[storeBuild.sizeX, storeBuild.sizeY]}/>
                <meshStandardMaterial attach='material' color={storeGround.color}/>
            </mesh>
        </>
        
    )

}