import React, { useEffect, useState } from "react";
import { build, ground } from '@store/editor';
import LoadModel from "@models/components/models";

//add object
export const AddObject = ({position, rotation, type, category, objectId}) => {
    const store = build(state => state);
    const storeGround = ground(state => state);
    const [object, setObject] = useState(null);

    useEffect(() => {

        setObject(<LoadModel position={position} rotation={rotation} />)
        
    }, [])

    useEffect(() => {
        if(object !== null){
            //add ground (red)
            switch (category) {
                case 'wall':
                    for (let i = 0; i < 5; i++) {
                        if (!store.rotate) {
                            store.addSolid((position[0] - 2) + i, position[2], objectId)
                        } else {
                            store.addSolid(position[0], (position[2] - 2) + i, objectId)
                        }
                    }
                    break;
                case 'floor':
                    
                    break;
                default:
                    store.addSolid(position[0], position[2], objectId)
                    break;
            }
            
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

    const active = build(state => state.isBuild.active);

    if (active) {
        const check = store.objects.filter((item) => {
            console.log(item)
            return item.position[0] === eventObject.x && item.position[1] === eventObject.y && item.position[2] === eventObject.z && item.category === type
        })

        console.log(check)

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
}