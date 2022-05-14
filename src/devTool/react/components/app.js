import React from 'react';
import { StoreProvider } from './store'
import Canvas from './map/canvas';

export default function Default (){

    return (
        <StoreProvider>
            <Canvas />
        </StoreProvider>
    )
}