import create from 'zustand';

/*const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));
*/
export const mousePosition = create(set => ({
    x: 0,
    y: 0,
    z: 0,
    editPosition: (x, y, z) => set(state => ({
        ...state,
        x: x,
        y: y,
        z: z
    }))
}))

export const interfaceButtons = create(set => ({
    active: false,
    button: null,
    btn: (active, button) => set(state => ({
        ...state,
        active: active,
        button: button
    }))
}))

export const build = create(set => ({
    active: false,
    texture: null,
    walls: [],
    buildBtn: (active, texture) => set(state => ({
        ...state,
        active: active,
        texture: texture
    })),
    addWall: (position, rotate, type) => set(state => ({
        walls: [
            ...state.walls,
            {
            pos: position, 
            rotate: rotate,
            type: type
            }
        ]        
    })),
    removeWall: (removePosition) => 
        set((state) => ({
            walls: state.walls.filter(({pos}) => pos !== removePosition)
        })
    )
}))

export const ground = create(set => ({
    x: 10,
    y: 10,
    texture: 'stone',
    changeGround: (x, y, texture) => set(state => ({
        ...state,
        x: x,
        y: y, 
        texture: texture
    })),
}))

export const player = create(set => ({
    active: false,
    playerMark: [],
    changePlayer: (active) => set(state => ({
        ...state,
        active: active
    })),
    addPlayer: (pos) => set(state => ({
        ...state,
        playerMark: pos
    }))
}))