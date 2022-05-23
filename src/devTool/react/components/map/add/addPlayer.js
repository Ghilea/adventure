import React, { useEffect } from "react";
import { player, mousePosition } from '../../store';
import { Player } from '../object/player';

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