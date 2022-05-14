import create from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

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

export const build = create(set => ({
    active: false,
    texture: null,
    walls: getLocalStorage('level') || [{
        pos: [0, 0, 0],
        type: 'stone'
    }],
    buildBtn: (active, texture) => set(state => ({
        ...state,
        active: active,
        texture: texture
    })),
    addWall: (x, y, z, type) => set(state => ({
        ...state,
        x: x,
        y: y,
        z: z,
        type: type
    })),
    removeWall: (x, y, z) => set((state) =>
        state.wall.filter(wall => 
            wall.x !== x || 
            wall.y !== y, 
            wall.z !== z
        ),
    ),
    saveLevel: () => set((state => {
        setLocalStorage('level', state.walls)
    }))
}))