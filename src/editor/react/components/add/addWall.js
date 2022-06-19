import React, { useEffect, useState } from "react";
import { build, ground } from '@devComp/store';
import {Wall_1} from '@shared/models/walls';

export const AddWall = ({position, rotation, type, texture, id}) => {

    const store = build(state => state);
    const storeGround = ground(state => state);
    const [wall, setWall] = useState(null);

    useEffect(() => {
        store.addObject(position, rotation, type, texture, id);
        storeGround.groundColor('red');

        for (let i = 2; i < 5; i++) {
            if (!store.rotate) {
                //shortside 360
                storeGround.addSquare((position[0] - i), position[2], 360, id)
                storeGround.addSquare((position[0] + i), position[2], 360, id)
            }else{
                //shortside 180
                storeGround.addSquare((position[0]), position[2] - i, 180, id)
                storeGround.addSquare((position[0]), position[2] + i, 180, id)
            }
        }
                                
        for (let i = 0; i < 5; i++) {
            if(!store.rotate) {
                //wall
                storeGround.addSquare((position[0] - 2) + i, position[2], 0, id)
                //longside 360
                for (let x = 1; x < 3; x++) {
                    storeGround.addSquare((position[0] - 2) + i, position[2] - x, 180, id)
                    storeGround.addSquare((position[0] - 2) + i, position[2] + x, 180, id)
                }
            }else{
                //wall
                storeGround.addSquare(position[0], (position[2] - 2) + i, 0, id)
                //longside 180
                for (let x = 1; x < 3; x++) {
                    storeGround.addSquare((position[0] - x), (position[2] - 2) + i, 360, id)
                    storeGround.addSquare((position[0] + x), (position[2] - 2) + i, 360, id)
                }
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