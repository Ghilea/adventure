import React, { useEffect, useState } from 'react';
import { map } from '@comp/store';
import { Player } from '@comp/player/Player';

export const AddObject = ({type, pos}) => {

    const storeMap = map(state => state);

    const [object, setObject] = useState(null);
 
    useEffect(() => {
        setObject(<Player position = {pos} />)
        storeMap.setPlayerPosition(pos);
    }, [])

    return (
        <>
            {object}         
        </>
    )
}