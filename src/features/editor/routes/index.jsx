import React, { useEffect, useState } from 'react';
import Canvas from '@editor/editor_canvas';
import TopPanel from '@editor/panel_top/panel_top';
import RightPanel from '@editor/panel_right';
import { build } from '@store/editor';
import { SelectObject, AddObject } from '@helper/helperObject';
import Hotkeys from '@editor/hotkeys';
import * as texture from '@comp/textures';

const Index = () => {
    
    //stores
    const storeBuild = build(state => state);
    
    const [mousePosition, setMousePosition] = useState({x: 0,y: 0,z: 0});
    const [groundTexture, setGroundTexture] = useState(texture.stone());
    const [groundColor, setGroundColor] = useState('blue');
    const [canAddObjects, setCanAddObjects] = useState(false);
    
    <Hotkeys />

    //states
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        if (storeBuild.active.length > 0 && storeBuild.selected !== null) {
            storeBuild.selectedObject(null)
            console.log('reset')
        }
    }, [storeBuild.active])

    const handleClick = (event) => {
        
        if (event.type === 'click') {

            console.log(mousePosition);

            storeBuild.addObject(
                <AddObject
                    onClick = {<SelectObject />}
                    key={storeBuild.active[1]+index}
                    position = {
                        [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5]
                    }
                    rotation = {
                        (storeBuild.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0]
                    }
                    type = {
                        storeBuild.active[0]
                    }
                    texture = {
                        storeBuild.active[1]
                    }
                    objectId = {
                        index
                    }
                />, //canvasObject
                [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5], //position
                (storeBuild.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0], //rotation
                storeBuild.active[0], //type
                storeBuild.active[1], //texture
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
            <RightPanel setGroundColor={setGroundColor}/>
            <Canvas 
                onClick={handleClick} 
                mousePosition={mousePosition} 
                setMousePosition={setMousePosition} 
                grid={[10, 10]}
                groundTexture={groundTexture}
                setCanAddObjects={setCanAddObjects}/>
        </>    
    )
}

export default Index