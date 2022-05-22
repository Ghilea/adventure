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
    removeWall: (x, y, z) => set((state) =>
        state.wall.filter(wall => 
            wall.x !== x || 
            wall.y !== y, 
            wall.z !== z
        ),
    ),
    saveLevel: () => set((state => {
        console.log(state.walls);
    }))
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
    x: 0,
    y: 0,
    changePlayer: (active) => set(state => ({
        ...state,
        active: active
    })),
    addPlayer: (x, y) => set(state => ({
        ...state,
        x: x,
        y: y
    }))
}))