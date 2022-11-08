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
    const objectRotation = build(state => state.isBuild.objectSize.rotate)

    const handleAddObject = (e) => {
    
        //position object
        const position = [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5];

        //rotation object
        const rotation = [0, Math.PI * (objectRotation / 360), 0];

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

             if(isBuild.isSolid){
                switch (isBuild.category) {
                    case 'wall':
                        // 0 = left, 180 = down, -180 = up, 360 = right
                        for (let i = 0; i < 5; i++) {
                            if (objectRotation === 0 || objectRotation === 360) {
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