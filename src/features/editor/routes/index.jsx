import React, { useEffect, useState } from 'react';
import Canvas from '@editor/editor_canvas';
import TopPanel from '../panel_top';
import RightPanel from '../panel_right';
import { build } from '@store/editor';
import { SelectObject, AddObject } from '@editor/helperObject';
import Hotkeys from '@editor/hotkeys';
//import * as texture from '@comp/textures';

const Index = () => {
    
    //stores
    const storeBuild = build(state => state);

    const [mousePosition, setMousePosition] = useState({x: 0,y: 0,z: 0});
    const [canAddObjects, setCanAddObjects] = useState(false);
    const [addedObjects, setAddedObjects] = useState();
    const [groundSize, setGroundSize] = useState([10, 10]);
    const [index, setIndex] = useState(0);

    <Hotkeys />
        
    useEffect(() => {
        if (storeBuild.active.length > 0 && storeBuild.selected !== null) {
            storeBuild.selectedObject(null)
            console.log('reset')
        }
    }, [storeBuild.active])

    const handleClick = (event) => {
        
        if (event.type === 'click' && storeBuild.isBuild.active) {

            console.log(mousePosition, storeBuild.isBuild);

            storeBuild.addObject(
                <AddObject
                    onClick = {<SelectObject />}
                    key={storeBuild.isBuild.type+index}
                    position = {
                        [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5]
                    }
                    rotation = {
                        (storeBuild.isBuild.objectSize.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0]
                    }
                    type = {
                        storeBuild.isBuild.type
                    }
                    category = {
                        storeBuild.isBuild.category
                    }
                    objectId = {
                        index
                    }
                />, //canvasObject
                [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5], //position
                (storeBuild.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0], //rotation
                storeBuild.isBuild.type, //type
                storeBuild.isBuild.category, //category
                index //objectId
            );

            setIndex(index + 1)
         
            
        } 
    }

    /*useEffect(()=> {

        if(storeBuild.remove !== null){
            setObj(obj.filter((item) => {
                return item.props.objectId !== storeBuild.remove
            }))
        }

    }, [storeBuild.remove])*/

    return (
        <>
            <TopPanel />
            <RightPanel setGroundSize={setGroundSize}/>
            <Canvas 
                onClick={handleClick} 
                mousePosition={mousePosition} 
                setMousePosition={setMousePosition} 
                grid={groundSize}
                setCanAddObjects={setCanAddObjects}/>
        </>    
    )
}

export default Index