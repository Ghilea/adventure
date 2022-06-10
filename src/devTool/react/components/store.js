import { GreaterStencilFunc } from 'three';
import create from 'zustand';

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
    categoryBtn: 'ground',
    changeCategoryBtn: (value) => set(state => ({
        ...state,
        categoryBtn: value
    })),
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
    sizeX: 1,
    sizeY: 1,
    rotate: false,
    removeByIndex: null,
    removeIndex: (value) => set(state => ({
        ...state,
        removeByIndex: value
    })),
    changeRaySize: (x, y, rotate) => set(state => ({
        ...state,
        sizeX: x,
        sizeY: y,
        rotate: rotate
    })),
    buildBtn: (active, texture) => set(state => ({
        ...state,
        active: active,
        texture: texture
    })),
    addWall: (position, rotate, type, indexKey) => set(state => ({
        walls: [
            ...state.walls,
            {
                pos: position, 
                rotate: rotate,
                type: type,
                indexKey: indexKey
            }
        ]        
    })),
    removeWall: (x, z) => 
        set((state) => ({
            walls: state.walls.filter((item) => {
                return item.pos[0] !== x || item.pos[2] !== z
            })
        })
    )
}))

export const ground = create(set => ({
    x: 10,
    y: 10,
    texture: 'stone',
    textureSizeX: 5,
    textureSizeY: 5,
    color: 'green',
    groundColor: (color) => set(state => ({
        ...state,
        color: color
    })),
    groundSize: (x, y) => set(state => ({
        ...state,
        x: x,
        y: y
    })),
    changeTextureSize: (x, y) => set(state => ({
        ...state,
        textureSizeX: x,
        textureSizeY: y
    })),
    groundTexture: (texture) => set(state => ({
        ...state,
        texture: texture
    })),
}))

export const player = create(set => ({
    active: false,
    playerMark: 0,
    changePlayer: (active) => set(state => ({
        ...state,
        active: active
    })),
    addPlayer: (pos) => set(state => ({
        ...state,
        playerMark: pos
    }))
}))