import React, {useEffect, useState} from 'react';
import Buttons from './buttons';
import Content from './content';
import {CoordProvider} from './store'

const App = () => {

    return (
        <CoordProvider>
            <Content />
            <Buttons />
        </CoordProvider>
    )
}

export default App;