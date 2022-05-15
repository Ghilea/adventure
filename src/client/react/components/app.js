import React from 'react';
import { StoreProvider } from './store'
import Login from './menu/login';
import Canvas from './map/canvas';

export default function Default (){

    return (
        <StoreProvider>
            <Login />
        </StoreProvider>
    )
}