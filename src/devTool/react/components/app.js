import React from 'react';
import { StoreProvider } from './store'
import Canvas from './map/canvas';
import { Interface } from './interface';

export default function Default (){

    return (
        <StoreProvider>
            <Interface />
            <Canvas />
        </StoreProvider>
    )
}