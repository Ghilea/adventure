import React, { useEffect } from "react";
import { player } from '@devComp/store';
import { PlayerPose } from '@shared/components/models/player';

export const AddPlayer = ({position}) => {

    const storePlayer = player(state => state);

    useEffect(() => {
        storePlayer.addPlayer(position);
    }, [position])

    return (
        <PlayerPose position = {position} />
    )
}