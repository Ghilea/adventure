import React, { useEffect, useState } from "react";
import { build } from '@devComp/store';
//import { Walls } from '@devComp/map/object/walls';
import { StoneWall, StoneWall_2, StoneWall_3 } from '@shared/components/models/walls';

export const AddWall = ({position, rotation, type, indexKey}) => {

    const store = build(state => state);

    useEffect(() => {
        store.addWall(position, rotation, type, indexKey);
    }, [])
//type = { type }
    return (

        <StoneWall_3
            position = { position }
            rotation = { rotation }
        />

    )
}