import { useEffect, useState } from "react";
import { build, ground } from '@store/editor';
import LoadModel from "@models/components/models";

//add object
export const useAddObject = () => {
    
    const store = build(state => state);
    const storeGround = ground(state => state);
    const objectIndex = build(state => state.mapSettings.objectIndex)
    const isBuild = build(state => state.isBuild);
    const mousePosition = build(state => state.mousePosition);
        
    useEffect(() => {            
       console.log('solid', store.solid, 'store', store.objects)
    }, [store.objects])  

    const handleAddObject = (e) => {
    
        //position object
        const position = [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5];

        //rotation object
        const rotation = (isBuild.objectSize.rotate === 0 || isBuild.objectSize.rotate === 180 || isBuild.objectSize.rotate === 360) ? [0, Math.PI * (180 / 360), 0] : [0, Math.PI * (360 / 360), 0];

         if (e.type === 'click' && isBuild.active && isBuild.canBuild) {

            store.addObject(<LoadModel 
                key = {isBuild.type + objectIndex}
                position = {position}
                rotation = {rotation}
                type = {isBuild.type}
                category = {isBuild.category}
                objectId = {objectIndex}
                isSolid = {isBuild.isSolid}
            />, position, rotation, isBuild.type, isBuild.category, objectIndex, isBuild.isSolid)

            store.setObjectIndex(objectIndex + 1)

            console.log('what is it?', isBuild)

             if(isBuild.isSolid){
                switch (isBuild.category) {
                    case 'wall':
                        for (let i = 0; i < 5; i++) {
                            if (!store.rotate) {
                                store.addSolid((position[0] - 2) + i, position[2], objectIndex)
                            } else {
                                store.addSolid(position[0], (position[2] - 2) + i, objectIndex)
                            }
                            storeGround.groundColor('red');
                        }
                        break;
                    default:
                        store.addSolid(position[0], position[2], objectIndex)
                        storeGround.groundColor('red');
                        break;
                }
                
            }

        }
    }

    return [handleAddObject]
}