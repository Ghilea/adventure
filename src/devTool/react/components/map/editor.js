import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ground } from '@devComp/map/Ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import { Interface } from '@devComp/interface/interface';
import { build, ground, player, mousePosition} from '@devComp/store';
import { useKey } from 'rooks';
import { AddWall } from '@devComp/map/add/addWall';
import { AddPlayer } from '@devComp/map/add/addPlayer';

export const MapEditor = () => {

    const storeBuild = build(state => state);
    const storePlayer = player(state => state);
    const storeGround = ground(state => state)
    const position = mousePosition(state => state);

    const [wall, setWall] = useState([]);
    const [playerMark, setPlayerMark] = useState(null);
    const [index, setIndex] = useState(0);
    const [rotate, setRotate] = useState(false);
    
    const handleMouseClick = (event) => {
        event.preventDefault();

        if (event.type === 'click') {
            if (storeBuild.active) {

                setWall((state) => ([
                    ...state, 
                    <AddWall key = {'wall'+index}
                    position = {
                        [Math.floor(position.x) + 0.5, (2 / 2) + position.y, Math.floor(position.z) + 0.5]
                    }
                    rotation = {
                        (storeBuild.rotate) ? [0, 1.58, 0] : [0, 0, 0]
                    }
                    type = {
                        [storeBuild.texture]
                    }
                    />
                ]))
 
                setIndex(index + 1);

            }else if (storePlayer.active) {

                setPlayerMark(<AddPlayer 
                    position = {
                        [Math.floor(position.x) + 0.5, 0.55 + position.y, Math.floor(position.z) + 0.5]
                    } /> )
            }
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    const keyHandler = () => {
        console.log(storeBuild.rotate)
        if (storeBuild.rotate) {
            storeBuild.changeRaySize(storeBuild.sizeY, storeBuild.sizeX, false) 
        }else{
            storeBuild.changeRaySize(storeBuild.sizeY, storeBuild.sizeX, true)
        }
    }

    useKey(['Control'], keyHandler);

    return (
        <>
            <Interface />
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
                    {wall}
                    {playerMark}   
                </Physics>
                
            </Canvas>
        </>    
    )
}