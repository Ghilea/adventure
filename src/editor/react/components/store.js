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
    solid: [],
    sizeX: 1,
    sizeY: 1,
    rotate: false,
    selected: null,
    remove: null,
    activeBuild: (arr, texture) => set(state => ({
        ...state,
        active: [
            arr,
            texture
        ]
    })),
    changeRaySize: (x, y, rotate) => set(state => ({
        ...state,
        sizeX: x,
        sizeY: y,
        rotate: rotate
    })),
    addSolid: (x, z, objectId) => set(state => ({
        solid: [
            ...state.solid,
            {
                x: x,
                z: z,
                objectId: objectId
            }
        ]
    })),
    addObject: (position, rotation, type, texture, objectId) => set(state => ({
        object: [
            ...state.object,
            {
                position: position, 
                rotation: rotation,
                type: type,
                texture: texture,
                objectId: objectId
            }
        ]          
    })),
    updateObject: (position, rotation, texture, solidX, solidZ) => set(state => ({
        object: [
            ...state.object,
            {
                position: position,
                rotation: rotation,
                type: type,
                texture: texture,
                id: id,
                solid: [
                    ...state.solid,
                    {
                        x: solidX,
                        z: solidZ
                    }
                ]
            }
        ]
    })),
    removeObject: (data) => 
        set((state) => ({
            object: state.object.filter((item) => {
                return item.objectId !== data
            }),
            solid: state.solid.filter((item) => {
                return item.objectId !== data
            }),
            remove: data,
            selected: []
        })
    ),
    selectedObject: (value) =>
        set((state) => ({
            ...state,
            selected: value
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