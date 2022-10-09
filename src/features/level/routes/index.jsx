import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Ground from '../components/ground';
import { Read } from '@comp/crud';
import { map } from '@store/store';
import Player from '@comp/player/player';
import Loader from '@comp/loading/Loader';
import { Wall_1 } from '@models/objects/walls';
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

                storeMap.setPlayerPosition(parsed.player);
                
                parsed.walls.map((use, index) => {

                    setBuild((state) => ([
                        ...state,
                        <Wall_1 key={'level' + storeMap.level + 'wall' + index}
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

    return (
        <>
            <Canvas shadows >
                <Physics gravity={[0, -30, 0]}>

                    <Suspense fallback={<Loader />}>
                        <Ground position={[0, 0, 0]} groundTexture={ground.texture} size={ground.size} />
                        {build}
                        {createPlayer}
                    </Suspense>

                </Physics>
            </Canvas>
        </>
    )
}

export default Index