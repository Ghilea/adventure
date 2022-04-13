import React from 'react';
import {StoreProvider} from './store'
import Login from './menu/login';

const App = () => {

    return (

        <StoreProvider>
            <Login />
        </StoreProvider>
    )
}

export default App;