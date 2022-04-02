import React, {useEffect, useState} from 'react';
import Buttons from './buttons';
import Content from './content';

const App = () => {

    let coordination = {
        x: 0,
        y: 0
    };

    const [coord, setCoordination] = useState({
        ...coordination
    });

    return (
        <>
            <Content props={coord}/>
            <Buttons props={coord}/>
        </>
    )
}

export default App;