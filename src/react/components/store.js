import React, {
    useState,
    createContext
} from 'react';

const StoreContext = createContext();

const StoreProvider = (props) => {
    

    const [store, setStore] = useState({
        x: 0,
        y: 0,
        enemyHp: 0,
        enemyDps: 0,
        playerId: 0,
        playerHp: 0,
        playerDps: 0,
        playerExp: 0,
        showCreate: false,
        login: false
    });

    return (
        <StoreContext.Provider value={[store, setStore]}>
            {props.children}
        </StoreContext.Provider>
    )

}

export {StoreContext, StoreProvider};