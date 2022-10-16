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
    mousePosition: {
        x: 0,
        y: 0,
        z: 0
    },
    mapSettings: {
        id: null,
        level: 'New level',
        title: '',
        order: 0,
        content: [],
        groundSize: 10
    },
    level: null,
    active: [],
    object: [],
    solid: [],
    selected: null,
    remove: null,
    setMousePosition: (x, y, z) => set(state => ({
        ...state,
        mousePosition: {
            ...state.mousePosition,
            x: x,
            y: y,
            z: z
        }
    })),
    setGroundSize: (size) => set(state => ({
        ...state,
        mapSettings: {
            ...state.mapSettings,
            groundSize: size
        }
    })),
    setMapSettings: ({title, order, level, id, content}) => set(state => ({
        ...state,
        isBuild: {
            ...state.isBuild,
            mapSettings: {
                ...state.isBuild.mapSettings,
                id: id,
                level: level || build.isBuild.mapSettings.level,
                title: title, 
                order: order,
                content: content,
            }
        }
    })),
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
}))