import React, {useContext} from 'react';
import Interface from './interface';
import Content from './content';
import {StoreContext, StoreProvider} from './store'
import Buttons from './buttons';
import Protagonist from './protagonist';

const App = () => {

    return (

        <StoreProvider>
        <Protagonist />
        <Interface />
        <Content />
        <Buttons />
        </StoreProvider>
    
    )
}

export default App;