import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Ground from '../components/ground';
import { Read } from '@comp/crud';
import { map } from '@store/store';
import Player from '@comp/player/player';
import Loader from '@comp/loading/Loader';
import { Wall_1 } from '@models/objects/walls';
import Interface from '@features/interface'
import { Torch } from '@models/objects/torch';
import './index.scss';

const Index = () => {

    const storeMap = map(state => state);

    const [build, setBuild] = useState([]);
    const [createPlayer, setCreateplayer] = useState();
    const [ground, setGround] = useState({
        texture: 'stone',
        size: [10, 10]
    });

    useEffect(() => {
    
        Read(`getLevel?id=${storeMap.level}`)
            .then(response => {
                
                const parsed = JSON.parse(response.data[0].content)

                //storeMap.setPlayerPosition(parsed.player);

                parsed.walls.map((use, index) => {

                    setBuild((state) => ([
                        ...state,
                        <Wall_1 key={'wall' + index}
                            position={use.pos}
                            rotation={use.rotate}
                            type={use.type}
                        />
                    ]))
                })

                setCreateplayer(() => (
                    <Player position={parsed.player} />
                ))

                setGround((state) => ({
                    ...state,
                    texture: parsed.ground[2],
                    size: [parsed.ground[0], parsed.ground[1]]
                }))

                storeMap.setPlayerPosition(parsed.player);

                //storeMap.setPlayerPosition(response.level[0].content.player);

                    /*const parsed = JSON.parse(response.level[0].content)

                    parsed.walls.map((use, index) => {

                        setBuild((state) => ([
                            ...state,
                            <Wall_1 key={'wall'+index} 
                            position = {use.pos}
                            rotation = { use.rotate }
                            type = { use.type }
                            />
                        ]))
                    })

                    setCreateplayer(() => (
                        <Player position = {parsed.player} />
                    ))

                    setGround((state) => ({
                        ...state,
                        texture: parsed.ground[2],
                        size: [parsed.ground[0], parsed.ground[1]]
                    }))

                    storeMap.setPlayerPosition(parsed.player);*/
                
            })
    }, [])

    console.log('player', createPlayer)
    return (
        <>
            <Canvas shadows >
                <ambientLight intensity={1} />
                
                <Physics gravity={[0, -30, 0]}>

                    <Suspense fallback={<Loader />}>
                        <Ground position={[0, 0, 0]} groundTexture={ground.texture} size={ground.size} />
                        {build}
                        {createPlayer}
                        <Torch position={[-3.9, 0.3, -2]} scale={[1.03, 1.03, 1.03]} rotation={[0, Math.PI * (180 / 360), 0]} />
                    </Suspense>

                </Physics>
            </Canvas>
            <Interface />
        </>
        
    )
}

export default Index