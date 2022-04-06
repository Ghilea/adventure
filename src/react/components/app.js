import React, {useContext} from 'react';
import {StoreContext, StoreProvider} from './store'
import Login from './login';

const App = () => {

    return (

        <StoreProvider>
            <Login />
        </StoreProvider>
    )
}

export default App;