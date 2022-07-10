import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ground } from '@devComp/ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import { RightPanel, TopPanel, CategorySidePanel } from '@devComp/interface/panel';
import { build, ground, mousePosition} from '@devComp/store';
import { useKey } from 'rooks';
import { AddObject } from '@devComp/add/addObject';
import { SelectObject } from '@devComp/helper/selectObject';
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';

export const MapEditor = () => {
    
    const storeBuild = build(state => state);
    const storeGround = ground(state => state)
    const position = mousePosition(state => state);

    const [obj, setObj] = useState([]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        if (storeBuild.active.length > 0 && storeBuild.selected !== null) {
            storeBuild.selectedObject(null)
            console.log('reset')
        }
    }, [storeBuild.active])

    useEffect(() => {
        console.log(storeBuild.object)
    }, [storeBuild.object])

    const handleMouseClick = (event) => {
        
        if (event.type === 'click' && storeGround.color === 'green') {

            switch (storeBuild.active[0]) {
                case 'wall':
                    setObj((state) => ([
                        ...state, 
                        <AddObject 
                        onClick = {
                            <SelectObject />
                        }
                        key = {'wall'+index}
                        position = {
                            [Math.floor(position.x) + 0.5, position.y + (4/2), Math.floor(position.z) + 0.5]
                        }
                        rotation = {
                            (storeBuild.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0]
                        }
                        type = {
                            'wall'
                        }
                        texture = {
                            storeBuild.active[1]
                        }
                        objectId={index}
                        />
                    ]))
                    break;
                case 'player':
                    setObj((state) => ([
                        ...state,
                        <AddObject 
                        onClick = {
                            <SelectObject/>
                        }
                        key = {
                            'player' + index
                        }
                        position = {
                            [Math.floor(position.x) + 0.5, position.y + 0.55, Math.floor(position.z) + 0.5]
                        }
                        rotation = {
                            (storeBuild.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0]
                        }
                        type = {
                            'player'
                        }
                        texture = {
                            'player'
                        }
                        objectId = {
                            index
                        }/>
                    ]))
                    break;
                case 'object':
                    setObj((state) => ([
                        ...state,
                        <AddObject 
                        onClick = {
                            <SelectObject/>
                        }
                        key = {
                            'object' + index
                        }
                        position = {
                            [Math.floor(position.x) + 0.5, position.y + 0.55, Math.floor(position.z) + 0.5]
                        }
                        rotation = {
                            (storeBuild.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0]
                        }
                        type = {
                            'object'
                        }
                        texture = {
                            storeBuild.active[1]
                        }
                        objectId = {
                            index
                        }/>
                    ]))
                    break;
            }

            setIndex(index + 1)
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    useEffect(()=> {

        if(storeBuild.remove !== null){
            setObj(obj.filter((item) => {
                return item.props.objectId !== storeBuild.remove
            }))
        }

    }, [storeBuild.remove])

    const keyHandler = () => {
        if (storeBuild.rotate) {
            storeBuild.changeRaySize(storeBuild.sizeY, storeBuild.sizeX, false) 
        }else{
            storeBuild.changeRaySize(storeBuild.sizeY, storeBuild.sizeX, true)
        }
    }

    useKey(['Control'], keyHandler);

    return (
        <>
            <TopPanel />
            <CategorySidePanel />
            <RightPanel />
            <Canvas 
            onClick = {
                handleMouseClick
            }
            camera = {
                {
                    fov: 45,
                    position: [0, 2, -10]
                }
            } >
                <OrbitControls />
                <ambientLight intensity={1} />
                <Physics gravity = {
                    [0, -30, 0]
                } >
                    <gridHelper args={[storeGround.x, storeGround.y]}/>
                    <Ground position = {
                        [0, 0, 0]
                    }
                    />
                    <Selection>
                        <EffectComposer multisampling={8} autoClear={false}>
                        <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
                        </EffectComposer>
                    {obj}
                    </Selection>  
                </Physics>
                
            </Canvas>
        </>    
    )
}