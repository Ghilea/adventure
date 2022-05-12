import React, {useEffect, useRef, useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from './buildLevel/textures';

export const Walls = ({rotation, position, type, ...props}) => {
    const [ref] = useBox(() => ({
        args: [8, 4, 0.5],
        rotation,
        position,
        ...props
    }))

    console.log(texture.stone())
    const side =
        [...Array(6)].map((_, index) => ( 
        <meshStandardMaterial attachArray = 'material'
            map = {
                (type == 'stone') ? texture.stone() : console.log('inget')
            }
            key = {
                index
            }
            />
        ))
    
    return (
        <mesh ref = {ref} castShadow>
            <boxGeometry args = {[8, 4, 0.5]} />
            {side}
        </mesh>
    )

}