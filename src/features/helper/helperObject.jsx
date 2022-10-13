import React, { useEffect, useState } from "react";
import { build, ground } from '@store/editor';
import { Wall_1 } from '@models/objects/walls';
import { Player } from '@models/creatures/player';
import { Rock_1 } from '@models/objects/rocks';
import { Torch } from '@models/objects/torch';

//add object
export const AddObject = ({position, rotation, type, texture, objectId}) => {
    const storeBuild = build(state => state);
    const storeGround = ground(state => state);
    const [object, setObject] = useState(null);

    useEffect(() => {   

        switch (texture) {
            case 'wall_1':
                setObject(<Wall_1 position = {position} rotation = {rotation}/>)
                break;
            case 'player':
                setObject(<Player position = {position} rotation = {rotation}/>)
                break;
            case 'rock_1':
                setObject( <Rock_1 position = {[position[0], position[1], position[2]]} rotation = {rotation} />)
                break;
             case 'torch':
                setObject(<Torch position = {position} rotation = {rotation}/>)
            break;
        }
    }, [])

    useEffect(() => {
        if(object !== null){
            
            //add ground (red)
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

            //add object information into store
            if(texture === 'rock_1'){
                position = [position[0] - 1.35, position[1] -1.05, position[2] + 1.22]
            }
            //storeBuild.addObject(position, rotation, type, texture, objectId);
            
            storeGround.groundColor('red');
        }
    }, [object])

    return (
        <>
            {object}
        </>         
    )
}

//select added object
export const SelectObject = (eventObject, type, store) => {

    const check = store.object.filter((item) => {
        return item.position[0] === eventObject.x && item.position[1] === eventObject.y && item.position[2] === eventObject.z && item.type === type
    })

    if (check.length > 0) {

        //select new
        if (store.selected === null) {
            store.selectedObject(check[0].objectId)
        }

        //select same
        if (store.selected !== null && check[0].objectId === store.selected) {
            store.selectedObject(null)
        }

        //select another while the old still is selected
        if (store.selected !== null && check[0].objectId !== store.selected) {
            store.selectedObject(check[0].objectId)
        }
    }

    console.log(check[0]);
    return check[0].objectId

}