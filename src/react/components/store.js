import React, {
    useState,
    createContext
} from 'react';

const StoreContext = createContext();

const StoreProvider = (props) => {
    
    const [store, setStore] = useState({
        coords: {
            x: 0,
            y: 0
        },
        enemy: {
            enemyHp: 0,
            enemyDps: 0,
            enemyAttack: false
        },
        player: {
            playerId: 0,
            playerHp: 0,
            playerDps: 0,
            playerExp: 0,
            playerLevel: 0,
            playerPoints: 0,
            str: 0,
            int: 0,
            dex: 0,
            playerAttack: false
        },
        menu: {
            showCreate: false,
            login: false
        },
        quest: {
            showQuest: false
        },
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