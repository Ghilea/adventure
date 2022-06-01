import React, {useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '@shared/components/textures';
import { build } from '@devComp/store';

export const Walls = ({rotation, position, type, ...props}) => {

    const store = build(state => state);

    const [ref] = useBox(() => ({
        rotation,
        position,
        ...props
    }))

    const removeWall = (e) => {
        store.removeWall(e.object.position.x, e.object.position.y, e.object.position.z)

        const filtredItem = store.walls.filter((item) => {
            return item.pos[0] === e.object.position.x && item.pos[1] === e.object.position.y && item.pos[2] === e.object.position.z
        })

        store.removeIndex(filtredItem[0].indexKey);
    }

    return (
        <mesh ref = {ref} castShadow             
            onClick = {removeWall}
            >  
            <meshStandardMaterial
                map = {
                    (type == 'stone') ? texture.stone() : (type == 'stone2') ? texture.stone2() : (type == 'stoneWindow') ? texture.stoneWindow() : ''
                }
                />
            <boxGeometry args = {[5, 2, 1]} />
        </mesh>
    )

}