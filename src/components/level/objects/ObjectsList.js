import React, { useEffect, useState } from 'react';
import { Player } from '@comp/player/Player';

export const ObjectsList = ({type}) => {

    switch (type) {
        case 'player':
            <Player />
            break;
    
        default:
            break;
    }
}