import React, {
    useState,
    createContext
} from 'react';

const StoreContext = createContext();

const StoreProvider = (props) => {
    
    const [store, setStore] = useState({
        rotate: {
            z: 0
        },
        movement: {
            x: -135.5,
            y: 30,
            z: 527.84
        },
        mouse: {
            m1: 1,
            m2: 0,
            m3: 0,
            m4: 1,
            m5: 0,
            m6: 0,
            m7: 0,
            m8: 1,
            x: 0,
            y: 0
        },
        coords: {
            x: 0,
            y: 0
        },
        map: {
            walking: null,
            showCharacterSheet: false
        },
        enemy: {
            enemyHp: 0,
            enemyMaxHp: 0,
            enemyDps: 0,
            enemyAttack: false
        },
        player: {
            playerId: 0,
            playerHp: 0,
            playerMaxHp: 0,
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