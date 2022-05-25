import React, { useEffect } from "react";
import { player, mousePosition } from '@comp/store';
import { Player } from '@comp/map/object/player';

export const AddPlayer = ({position}) => {

    const store = player(state => state);

    useEffect(() => {
        store.addPlayer(position);
    }, [])

    return (

        <Player 
            position = { position }
        />

    )
}