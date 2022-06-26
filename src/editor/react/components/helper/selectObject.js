import React, { useEffect } from 'react';
import { ground, build } from '@devComp/store';

export const SelectObject = () => {
    const storeGround = ground(state => state);
    const storeBuild = build(state => state);
    
    useEffect(() => {
        console.log('test');
    }, [])

    return (
        null
    )

}