import React, {useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as texture from '@shared/components/textures';
import { build } from '@comp/store';

export const Walls = ({rotation, position, type, ...props}) => {
    const [hover, setHover] = useState(null);

    const store = build(state => state);

    const [ref] = useBox(() => ({
        rotation,
        position,
        ...props
    }))

     const removeWall = (e) => {
        store.removeWall([e.object.position.x, e.object.position.y, e.object.position.z])

        //console.log(e.object.position, position);
        console.log(store.walls.filter(({
            pos
        }) => pos !== [e.object.position.x, e.object.position.y, e.object.position.z]))
     }

    return (
        <mesh ref = {ref} castShadow 
            onPointerMove={(event) => {
                event.stopPropagation();
                setHover(Math.floor(event.faceIndex / 2));
            }}
            
            onClick = {removeWall}
            >
            {[...Array(6)].map((_, index) => (
                
            <meshStandardMaterial
                map = {
                    (type == 'stone') ? texture.stone() : (type == 'stone2') ? texture.stone2() : (type == 'stoneWindow') ? texture.stoneWindow() : ''
                }
                key = {index}
                />
            ))}
            <boxGeometry args = {[8, 4, 0.5]} />
        </mesh>
    )

}