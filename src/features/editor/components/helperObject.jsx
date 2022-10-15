import React, { useEffect, useState } from "react";
import { build, ground } from '@store/editor';
import { Wall_1 } from '@models/objects/walls/walls';
import { Player } from '@models/creatures/player/player';
import { Rock_1 } from '@models/objects/rocks/rocks';
import { Torch } from '@models/objects/torch/torch';
import Floor_1 from '@models/grounds/floor_1/floor_1';

//add object
export const AddObject = ({position, rotation, type, category, objectId}) => {
    const storeBuild = build(state => state);
    const storeGround = ground(state => state);
    const [object, setObject] = useState(null);

    useEffect(() => {  
        
        console.log(type, category)

        switch (type) {
            case 'wall_1':
                setObject(<Wall_1 position = {position} rotation = {rotation}/>)
                break;
            case 'player':
                setObject(<Player position = {position} rotation = {rotation}/>)
                break;
            case 'rock_1':
                setObject( <Rock_1 position = {position} rotation = {rotation} />)
                break;
             case 'torch':
                setObject(<Torch position = {position} rotation = {rotation}/>)
                break;
            case 'floor_1':
                setObject(<Floor_1 position={position} rotation={rotation} />)
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
                case 'floor_1':
                    
                    break;
                default:
                    storeBuild.addSolid(position[0], position[2], objectId)
                    break;
            }

            //add object information into store
            /*if(texture === 'rock_1'){
                position = [position[0] - 1.35, position[1] -1.05, position[2] + 1.22]
            }*/
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
        return item.position[0] === eventObject.x && item.position[1] === eventObject.y && item.position[2] === eventObject.z && item.category === type
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

    return check[0].objectId

}