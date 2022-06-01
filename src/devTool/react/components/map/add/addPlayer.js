import React, { useEffect } from "react";
import { player } from '@devComp/store';
import { PlayerPose } from '@shared/components/models/player';

export const AddPlayer = ({position}) => {

    const store = player(state => state);

    useEffect(() => {
        store.addPlayer(position);
    }, [])

    return (
        <PlayerPose position = {position} />
    )
}