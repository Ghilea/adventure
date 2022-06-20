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
    categoryBtn: null,
    remove: false,
    changeCategoryBtn: (value) => set(state => ({
        ...state,
        categoryBtn: value
    })),
    isRemove: (value) => set(state => ({
        ...state,
        remove: value
    })),
    btn: (active, button) => set(state => ({
        ...state,
        active: active,
        button: button
    }))
}))

export const build = create(set => ({
    active: [],
    object: [],
    sizeX: 1,
    sizeY: 1,
    rotate: false,
    removeByIndex: null,
    activeBuild: (arr, texture) => set(state => ({
        ...state,
        active: [
            arr,
            texture
        ]
    })),
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
    addObject: (position, rotation, type, texture, id) => set(state => ({
        object: [
            ...state.object,
            {
                position: position, 
                rotation: rotation,
                type: type,
                texture: texture,
                id: id
            }
        ]          
    })),
    updateObject: (position, rotation, texture) => set(state => ({
        object: [
            ...state.object,
            {
                position: position,
                rotation: rotation,
                type: type,
                texture: texture,
                id: id
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
    textureSizeX: 1,
    textureSizeY: 1,
    color: 'green',
    square: [],
    addSquare: (x, z, type, id) => set(state => ({
        square: [
            ...state.square,
            {
                x: x, 
                z: z,
                type: type,
                id: id
            }
        ]
    })),
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