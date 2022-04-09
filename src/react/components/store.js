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
        enemyAttack: false,
        playerId: 0,
        playerHp: 0,
        playerDps: 0,
        playerExp: 0,
        playerLevel: 1,
        playerAttack: false,
        showCreate: false,
        showQuest: false,
        login: false,
        doors: {
            left: false,
            front: true,
            right: false,
            back: false
        }
    });

    return (
        <StoreContext.Provider value={[store, setStore]}>
            {props.children}
        </StoreContext.Provider>
    )

}

export {StoreContext, StoreProvider};