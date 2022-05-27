import React from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import groundTexture from '@shared/assets/images/texture/floor.jpg';
import { ground, mousePosition, build } from '@comp/store';

export const Ground = (props) => {
    const storeGround = ground(state => state);
    const storePosition = mousePosition(state => state);
    const storeBuild = build(state => state)

    const [ref] = usePlane(() => ({
        args: [storeGround.x, storeGround.y],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))
    
    const [highLight, setHighLight] = usePlane(() => ({
        args: [1, 1],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))

    const texture = useLoader(TextureLoader, groundTexture);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(8, 8);
    
    const pointerMove = (event) => {
        storePosition.editPosition(event.point.x, event.point.y, event.point.z)
    }

    useFrame(() => {
        setHighLight.position.set(Math.floor(storePosition.x) + 0.5, storePosition.y +0.01, Math.floor(storePosition.z) + 0.5);
    })

    return (
        <>
            <mesh ref={ref} onPointerMove={pointerMove}>
                <planeBufferGeometry attach='geometry' args = {[storeGround.x, storeGround.y]} />
                <meshStandardMaterial attach='material' map={texture} />
            </mesh>

            <mesh ref = {highLight}>
                <planeBufferGeometry attach='geometry' args = {[storeBuild.sizeX, storeBuild.sizeY]}/>
                <meshStandardMaterial attach='material' color={'red'}/>
            </mesh>
        </>
        
    )

}