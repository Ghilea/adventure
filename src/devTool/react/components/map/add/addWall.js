import React, { useEffect, useState } from "react";
import { build, mousePosition } from '@comp/store';
import { Walls } from '@comp/map/object/walls';

export const AddWall = ({position, rotation, type}) => {

    const store = build(state => state);

    useEffect(() => {
        store.addWall(position, rotation, type);
        console.log(store.walls);
    }, [])

    return (

        <Walls
            position = { position }
            rotation = { rotation }
            type = { type }
        />

    )
}