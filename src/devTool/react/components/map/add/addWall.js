import React, { useEffect, useState } from "react";
import { build } from '@devComp/store';
import {Wall_1} from '@shared/components/models/walls';

export const AddWall = ({position, rotation, type, indexKey}) => {

    const store = build(state => state);
    const [wall, setWall] = useState(null);

    useEffect(() => {
        store.addWall(position, rotation, type, indexKey);
        
        switch (type) {
            case 'wall_1':
                setWall(<Wall_1 position = {position} rotation = {rotation}/>)
                break;
        }

    }, [])

    return (
        <>
            {wall}
        </>
        
    )
}