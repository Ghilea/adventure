import create from 'zustand';

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
    activateBuild: false,
    active: [],
    object: [],
    solid: [],
    sizeX: 1,
    sizeY: 1,
    rotate: false,
    selected: null,
    remove: null,
    resetActiveBuild: () => set(state => ({
        ...state,
        active: []
    })),
    activeBuild: (arr, texture) => set(state => ({
        ...state,
        active: [
            arr,
            texture
        ]
    })),
    changeActivateBuild: (value) => set(state => ({
        ...state,
        activateBuild: value
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
    addObject: (canvasObject, position, rotation, type, texture, objectId) => set(state => ({
        object: [
            ...state.object,
            {
                canvasObject: canvasObject,
                position: position, 
                rotation: rotation,
                type: type,
                texture: texture,
                objectId: objectId
            }
        ]          
    })),
    updateRotationObject: (objectId, newData) => 
        set(state => ({
            ...state,
            object: [{
                ...state.object,
                rotation: [0, newData, 0]
            }]
        })
    ),
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