import create from 'zustand';

export const build = create(set => ({
    isEditor: false,
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
        objectIndex: 0,
        objects: [],
        groundSize: 10
    },
    level: null,
    active: [],
    objects: [],
    solid: [],
    selected: null,
    remove: null,
    setRotate: (deg) => set(state => ({
        ...state,
        isBuild: {
            ...state.isBuild,
            objectSize: {
                ...state.isBuild.objectSize,
                rotate: deg
            } 
        }
    })),
    setObjectIndex: (index) => set(state => ({
        ...state,
        mapSettings: {
            ...state.mapSettings,
            objectIndex: index
        }
    })),
    setGroundSize: (size) => set(state => ({
        ...state,
        mapSettings: {
            ...state.mapSettings,
            groundSize: size
        }
    })),
    setMousePosition: (x, y, z) => set(state => ({
        ...state,
        mousePosition: {
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
    setField: (title, order) => set(state => ({
        ...state,
        mapSettings: {
            ...state.mapSettings,
            title: title,
            order: order
        }
    })),
    setMapObject: ({type, category, position, rotation, objectId}) => set(state => ({
        ...state,
        mapSettings: {
            ...state.mapSettings,
            objects:[
                ...state.mapSettings.objects,
                {
                    type: type, 
                    category: category, 
                    position: position, 
                    rotation: rotation,
                    objectId: objectId
                }
            ]
        }
    })),
    setMapSettings: ({
        id,
        title, 
        order,
        objects,
        groundSize,
    }) => set(state => ({
        ...state,
        mapSettings: {
            ...state.mapSettings,
            id: id,
            title: title, 
            order: order,
            objects: objects,
            groundSize: groundSize
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
        objects: [
            ...state.objects,
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
            objects: [{
                ...state.object,
                rotation: [0, newData, 0]
            }]
        })
    ),
    removeObject: (data) => 
        set((state) => ({
            objects: state.objects.filter((item) => {
                return item.objectId !== data
            }),
            mapSettings: {
                ...state.mapSettings,
                objects: state.objects.filter((item) => {
                    return item.objectId !== data
                })
            },
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