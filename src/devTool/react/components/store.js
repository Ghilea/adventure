import React, {
    useState,
    createContext
} from 'react';

const StoreContext = createContext();

const StoreProvider = (props) => {
    
    const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
    const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

    const [store, setStore] = useState({
        buildLevel: {
            wall: getLocalStorage('level') || [{pos:[0, 0, 0], type:'stone'}],
            addWall: (x, y, z, type) => 
                set(state => {
                    ({
                        wall: [...state.wall, { pos:[x, y, z], type }]
                    })
                }),
            removeWall: (x, y ,z) => 
                set((state) => 
                    state.wall.filter(
                        wall => wall.x !== x || wall.y !== y, wall.z !== z
                    ),
                ),
            texure: 'wall',
            setTexture: (texture) => set((state) => ({texture})),
            saveLevel: () => set((state => {
                setLocalStorage('level', state.wall)
            }))
        },
        rotate: {
            z: 0
        },
        movement: {
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false,
            Jump: false
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
            level: 1,
            walking: false,
            showCharacterSheet: false
        },
        combat: {
            text: null
        },
        enemy: {
            enemyHp: 0,
            enemyMaxHp: 0,
            enemyDps: 0,
            enemyAttack: false,
            enemyExp: 0,
            dead: true
        },
        player: {
            playerId: 1,
            playerHp: 1,
            playerMaxHp: 0,
            playerDps: 0,
            playerExp: 0,
            playerLevel: 0,
            playerPoints: 0,
            str: 0,
            int: 0,
            dex: 0,
            playerAttack: false,
            playerCanAttack: true,
            playerBlock: false
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