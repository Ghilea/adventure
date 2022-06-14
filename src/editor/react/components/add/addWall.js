import React, { useEffect, useState } from "react";
import { build, ground } from '@devComp/store';
import {Wall_1} from '@shared/models/walls';

export const AddWall = ({position, rotation, type, indexKey}) => {

    const store = build(state => state);
    const storeGround = ground(state => state);
    const [wall, setWall] = useState(null);

    useEffect(() => {
        store.addWall(position, rotation, type, indexKey);
        
        if (!store.rotate) {
            //shortside 360
            storeGround.addSquare360((position[0] - 3), position[2])
            storeGround.addSquare360((position[0] - 4), position[2])
            storeGround.addSquare360((position[0] + 3), position[2])
            storeGround.addSquare360((position[0] + 4), position[2])
        }else{
            //shortside 180
            storeGround.addSquare180((position[0]), position[2] - 3)
            storeGround.addSquare180((position[0]), position[2] - 4)
            storeGround.addSquare180((position[0]), position[2] + 3)
            storeGround.addSquare180((position[0]), position[2] + 4)
        }
            
        for (let i = 0; i < 5; i++) {
            if(!store.rotate) {
                //wall
                storeGround.addSquare((position[0] - 2) + i, position[2])
                //longside 360
                storeGround.addSquare180((position[0] - 2) + i, position[2] - 1)
                storeGround.addSquare180((position[0] - 2) + i, position[2] - 2)
                storeGround.addSquare180((position[0] - 2) + i, position[2] + 1)
                storeGround.addSquare180((position[0] - 2) + i, position[2] + 2)
            }else{
                //wall
                storeGround.addSquare(position[0], (position[2] - 2) + i)
                //longside 180
                storeGround.addSquare360((position[0] - 1), (position[2] - 2) + i)
                storeGround.addSquare360((position[0] - 2), (position[2] - 2) + i)
                storeGround.addSquare360((position[0] + 1), (position[2] - 2) + i)
                storeGround.addSquare360((position[0] + 2), (position[2] - 2) + i)
            }
        }

        switch (type) {
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