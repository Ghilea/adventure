import React, { useEffect, useState } from "react";
import { build, ground } from '@devComp/store';
import {Wall_1} from '@shared/models/walls';

export const AddWall = ({position, rotation, type, texture}) => {

    const store = build(state => state);
    const storeGround = ground(state => state);
    const [wall, setWall] = useState(null);

    useEffect(() => {
        store.addObject(position, rotation, type, texture);
        storeGround.groundColor('red');
                                
        for (let i = 0; i < 5; i++) {
            if(!store.rotate) {
                storeGround.addSquare((position[0] - 2) + i, position[2], 0)
            }else{
                storeGround.addSquare(position[0], (position[2] - 2) + i, 0)
            }
        }

        switch (texture) {
            case 'wall_1':
                setWall(<Wall_1 position = {position} rotation = {rotation}/>)
                break;
        }

    }, [])

    return (
        <>
            {wall}
        </>
        
    )
}