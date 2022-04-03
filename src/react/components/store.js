import React, {
    useEffect,
    useState,
    createContext
} from 'react';

const CoordContext = createContext();

const CoordProvider = (props) => {
    
    const [coord, setCoord] = useState({
        x: 0,
        y: 0
    });

    return (
        <CoordContext.Provider value={[coord, setCoord]}>
            {props.children}
        </CoordContext.Provider>
    )

}

export {CoordContext, CoordProvider};