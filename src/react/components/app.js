import React from 'react';
import { StoreProvider } from './store'
import Login from './menu/login';

const Default = () => {

    return (

        <StoreProvider>
            <Login />
        </StoreProvider>
    )
}

export default Default;