import React, { useEffect, useState } from "react";
import { build, ground } from '@devComp/store';
import { Wall_1 } from '@shared/models/walls';
import { Player } from '@shared/models/player';
import { Rock_1 } from '@shared/models/rocks'

export const AddObject = ({position, rotation, type, texture, objectId}) => {
    const storeBuild = build(state => state);
    const storeGround = ground(state => state);
    const [object, setObject] = useState(null);

    useEffect(() => {   
        
        console.log(texture, objectId)
        switch (texture) {
            case 'wall_1':
                setObject(<Wall_1 position = {position} rotation = {rotation}/>)
                break;
            case 'player':
                setObject(<Player position = {position} rotation = {rotation}/>)
                break;
            case 'rock_1':
                setObject(<Rock_1 position = {position} rotation = {rotation}/>)
                break;
        }
    }, [])

    useEffect(() => {
        if(object !== null){
            
            switch (type) {
                case 'wall':
                    for (let i = 0; i < 5; i++) {
                        if (!storeBuild.rotate) {
                            storeBuild.addSolid((position[0] - 2) + i, position[2], objectId)
                        } else {
                            storeBuild.addSolid(position[0], (position[2] - 2) + i, objectId)
                        }
                    }
                    break;
                default:
                    storeBuild.addSolid(position[0], position[2], objectId)
                    break;
            }

            storeBuild.addObject(position, rotation, type, texture, objectId);
            storeGround.groundColor('red');
        }
    }, [object])

    return (
        <>
            {object}
        </>         
    )
}