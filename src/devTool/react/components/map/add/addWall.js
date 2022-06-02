import React, { useEffect, useState } from "react";
import { build } from '@devComp/store';
//import { Walls } from '@devComp/map/object/walls';
import { StoneWall, StoneWall_2 } from '@shared/components/models/walls';

export const AddWall = ({position, rotation, type, indexKey}) => {

    const store = build(state => state);

    useEffect(() => {
        store.addWall(position, rotation, type, indexKey);
    }, [])

    return (

        <StoneWall
            position = { position }
            rotation = { rotation }
            type = { type }
        />

    )
}