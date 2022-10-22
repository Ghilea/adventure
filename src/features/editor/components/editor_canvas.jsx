import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Ground } from '@editor/ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import SelectObj from '@editor/select_canvas_object';
import disable from '@hooks/disable-click';
import { build } from '@store/editor';
import { Wall_1 } from '@models/objects/walls/walls';
import Player from '@features/player';
import { useKey } from 'rooks';
import { SelectObject, AddObject } from '@editor/helperObject';

const EditorCanvas = () => {

    const store = build(state => state);
    const level = build(state => state.level);
    const groundSize = build(state => state.mapSettings.groundSize);
    const isBuild = build(state => state.isBuild);
    const mousePosition = build(state => state.mousePosition);
    const [rotate, setRotate] = useState(0);
    const [mouseRight] = disable();

    const [objectIndex, setObjectIndex] = useState(0);

    const keyHandler = () => {
        

        if (store.isBuild.objectSize.rotate === 360){
            store.setRotate(0)
        }else{
            if (store.isBuild.objectSize.rotate + 90 === 360) {
                return store.setRotate(0)
            }
            
            store.setRotate(store.isBuild.objectSize.rotate + 90)
        }   
    
        console.log(rotate, store.isBuild.objectSize.rotate)
        setRotate((Math.PI * (store.isBuild.objectSize.rotate/360)))
    }

    useKey(['Control'], keyHandler);

    useEffect(() => {
        console.log(store.mapSettings.objectIndex)
        console.log(objectIndex)
        setObjectIndex(store.mapSettings.objectIndex)
    }, [store.mapSettings.objectIndex])

    const handleClick = (event) => {

        if (event.type === 'click' && isBuild.active) {

            store.setMapObject({
                type: isBuild.type,
                category: isBuild.category,
                position: [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5],
                rotation: (isBuild.objectSize.rotate === 0 || isBuild.objectSize.rotate === 180 || isBuild.objectSize.rotate === 360) ? [0, Math.PI * (180 / 360), 0] : [0, Math.PI * (360 / 360), 0],
                objectId: objectIndex
            })

            store.addObject(
                <AddObject
                    onClick={<SelectObject />}
                    key={isBuild.category + objectIndex}
                    position={
                        [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5]
                    }
                    rotation={
                        (isBuild.objectSize.rotate === 0 || isBuild.objectSize.rotate === 180 || isBuild.objectSize.rotate === 360) ? [0, Math.PI * (180 / 360), 0] : [0, Math.PI * (360 / 360), 0]
                    }
                    type={
                        isBuild.type
                    }
                    category={
                        isBuild.category
                    }
                    objectId={
                        objectIndex
                    }
                />, //canvasObject
                [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5], //position
                (isBuild.objectSize.rotate === 0 || isBuild.objectSize.rotate === 180 || isBuild.objectSize.rotate === 360) ? [0, Math.PI * (180 / 360), 0] : [0, Math.PI * (360 / 360), 0], //rotation
                isBuild.type, //type
                isBuild.category, //category
                objectIndex //objectId
            );

            setObjectIndex(objectIndex + 1)
            store.setObjectIndex(objectIndex + 1)

        }
    }

    return (
        <Canvas 
            className='bg-black'
            onClick={handleClick}
            onContextMenu = {mouseRight}
            camera = {
                {
                    fov: 45,
                    position: [0, 2, -10]
                }
            } >
            <OrbitControls />
            <ambientLight intensity={1} />
            
            <Physics gravity = {[0, -30, 0]} >

                <gridHelper args={[groundSize, groundSize]}/>

                <Ground />

                <SelectObj />
            </Physics>
            
        </Canvas>
  )
}

export default EditorCanvas