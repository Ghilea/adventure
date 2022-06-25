import React, { useEffect } from "react";
import { build, ground } from '@devComp/store';
import { PlayerPose } from '@shared/models/player';

export const AddPlayer = ({position}) => {

    const store = build(state => state);
    const storeGround = ground(state => state);

    useEffect(() => {
        const check = store.object.filter(obj => {
            return (obj.type == 'player')
        })

        if(check.length <= 0){
            store.addObject(position, Math.PI * (360 / 360), 'player', null, 0);
        }

        storeGround.groundColor('red');
        storeGround.addSquare((position[0]), position[2], 0, 0);
        
    }, [position])

    return (
        <PlayerPose position = {position} />
    )
}