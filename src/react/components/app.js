import React from 'react';
import {StoreProvider} from './store'
import Login from './menu/login';
import Content from './map/content';

const App = () => {

    return (

        <StoreProvider>
            <Content />
        </StoreProvider>
    )
}

export default App;