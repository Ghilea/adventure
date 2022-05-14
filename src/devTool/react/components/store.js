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
            addWall: (x, y, z, type) => {
                /*set(state => {
                    ({
                        wall: [...state.wall, { pos:[x, y, z], type }]
                    })
                }),*/
                console.log(x,y,z,type)
            },
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
        build: {
            isWall: {
                active: false,
                texture: null
            }     
        },
    });

    return (
        <StoreContext.Provider value={[store, setStore]}>
            {props.children}
        </StoreContext.Provider>
    )

}

export {StoreContext, StoreProvider};