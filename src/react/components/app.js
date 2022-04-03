import React from 'react';
import Interface from './interface';
import Content from './content';
import {CoordProvider} from './store'
import Buttons from './buttons';

const App = () => {

    return (
        <CoordProvider>
            <Content />
            <Interface />
            <Buttons />
        </CoordProvider>
    )
}

export default App;