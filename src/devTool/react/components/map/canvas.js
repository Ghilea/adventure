import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ground } from '@comp/map/Ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import { Interface } from '@comp/interface/interface';
import { build, ground, player, mousePosition} from '@comp/store';
import { useKey } from 'rooks';
import { AddWall } from '@comp/map/add/addWall';
import { AddPlayer } from '@comp/map/add/addPlayer';

const Render = () => {

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
                        [position.x, (4 / 2) + position.y, position.z]
                    }
                    rotation = {
                        (rotate) ? [0, 1.58, 0] : [0, 0, 0]
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
                        [position.x, (2 / 2) + position.y, position.z]
                    } /> )
            }
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
        }

    }

    const keyHandler = (e) => {
        if (e.type === 'keydown' && e.code === 'ControlLeft') {
            setRotate(true);
        }

        if (e.type === 'keyup' && e.code === 'ControlLeft') {
            setRotate(false);
        }
    }

    useKey(['Control', 'a'], keyHandler, {
        eventTypes: ['keydown', 'keyup']
    });

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

export default Render;