import React from 'react';
import {StoreProvider} from './store'
import Login from './menu/login';
import Canvas from './map/canvas';

const App = () => {

    return (

        <StoreProvider>
            <Canvas />
        </StoreProvider>
    )
}

export default App;