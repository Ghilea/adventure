import React from 'react';

export const SelectObject = (eventObject, type, store) => {

    const check = store.object.filter((item) => {
        return item.position[0] === eventObject.x && item.position[1] === eventObject.y && item.position[2] === eventObject.z && item.type === type
    })

    if (check.length > 0) {

        if (store.selected === null) {
            console.log('found object and select it', check[0].objectId)
            store.selectedObject(check[0].objectId)
        }

        if (store.selected !== null && check[0].objectId === store.selected) {
            console.log('same - close it', check[0].objectId)
            store.selectedObject(null)
        }

        if (store.selected !== null && check[0].objectId !== store.selected) {
            console.log('not same - close all and select the new', check[0].objectId)

            store.selectedObject(check[0].objectId)
        }
    }

    return check[0].objectId

}