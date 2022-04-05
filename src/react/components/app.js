import React from 'react';
import Interface from './interface';
import Content from './content';
import {StoreProvider} from './store'
import Buttons from './buttons';

const App = () => {

    return (
        <StoreProvider>
            <Interface />
            <Content />
            <Buttons />
        </StoreProvider>
    )
}

export default App;