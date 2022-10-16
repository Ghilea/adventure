import create from 'zustand';

export const build = create(set => ({
    isBuild: {
        active: false,
        type: '',
        category: '', 
        objectSize: {
            x: 1,
            z: 1,
            y: 0,
            rotate: 0
        }
    },
    level: null,
    active: [],
    object: [],
    solid: [],
    selected: null,
    remove: null,
    setLevel: (level) => set(state => ({
        ...state,
        object: level
    })),
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
    buildState: (value, type = '', category = '', objectSize = [0,0,0,0]) => set(state => ({
        ...state,
        isBuild: {
            ...state.isBuild,
            active: value, 
            type: type,
            category: category,
            objectSize: {
                ...state.isBuild.objectSize,
                x: objectSize[0],
                z: objectSize[1],
                y: objectSize[2],
                rotate: objectSize[3]
            }
        }
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
    addObject: (canvasObject, position, rotation, type, category, objectId) => set(state => ({
        object: [
            ...state.object,
            {
                canvasObject: canvasObject,
                position: position, 
                rotation: rotation,
                type: type,
                category: category,
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