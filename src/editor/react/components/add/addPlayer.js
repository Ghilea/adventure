import React, { useEffect } from "react";
import { build, ground } from '@devComp/store';
import { PlayerPose } from '@shared/models/player';

export const AddPlayer = ({position}) => {

    const store = build(state => state);
    const storeGround = ground(state => state);

    useEffect(() => {
        /*
        if (storeGround.square.length > 0) {
            const check = storeGround.square.filter(obj => {
                return (obj.x == centerX) && (obj.z == centerZ) && (obj.type == 0)
            })
        */
       console.log(store.object)
        const check = store.object.filter(obj => {
            return (obj.type == 'player')
        })
        if(check.length > 0){
            console.log('true')
            storeGround.groundColor('red');
            storeGround.addSquare((position[0]), position[2], 0, 0);
        }else{
            console.log('false')
            store.addObject(position, Math.PI * (360 / 360), 'player', null, 0);
            storeGround.groundColor('red');
            storeGround.addSquare((position[0]), position[2], 0, 0);
        }

        for (let i = 0; i < 5; i++) {
            if (!store.rotate) {
                //longside 360
                for (let x = 1; x < 3; x++) {
                    storeGround.addSquare((position[0] - 2) + i, position[2] - x, 180, 0)
                    storeGround.addSquare((position[0] - 2) + i, position[2] + x, 180, 0)
                }
            } else {
                //longside 180
                for (let x = 1; x < 3; x++) {
                    storeGround.addSquare((position[0] - x), (position[2] - 2) + i, 360, 0)
                    storeGround.addSquare((position[0] + x), (position[2] - 2) + i, 360, 0)
                }
            }
        }
        
    }, [position])

    return (
        <PlayerPose position = {position} />
    )
}