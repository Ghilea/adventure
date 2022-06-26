import React, { useEffect } from 'react';
import { ground, build } from '@devComp/store';

export const RemoveObject = () => {
    const storeGround = ground(state => state);
    const storeBuild = build(state => state);
    
    useEffect(() => {
        
    }, [storePosition])

    return (
        null
    )

}