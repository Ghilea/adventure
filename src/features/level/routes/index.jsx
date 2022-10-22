import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Ground from '@comp/ground';
import { Read } from '@comp/crud';
import { map } from '@store/store';
import Player from '@features/player';
import Loader from '@comp/loading/Loader';
import { Wall_1 } from '@models/objects/walls/walls';
import Interface from '@features/interface'
import { Torch } from '@models/objects/torch/torch';
import Floor_1 from '@models/grounds/floor_1/floor_1';
import SwampMonster from '@models/creatures/swamp_monster/swamp_monster';
import { Rock_1 } from '@models/objects/rocks/rocks';
import './index.scss';

const Index = () => {

    const storeMap = map(state => state);

    const [build, setBuild] = useState([]);
    const [groundSize, setGroundSize] = useState([10, 10]);

    useEffect(() => {

        if(build.length <= 0) {
            Read(`getLevel?id=TestMap`)
                .then(response => {

                    const parsed = JSON.parse(response.data[0].content)

                    parsed.objects.map((use, index) => {

                        switch (use.type) {
                            case 'wall_1':
                                setBuild((state) => ([
                                    ...state,
                                    <Wall_1 key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                                ]))
                                break;
                            case 'player':
                                setBuild((state) => ([
                                    ...state,
                                    <Player key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                                ]))
                                storeMap.setPlayerPosition(use.position);
                                break;
                            case 'rock_1':
                                setBuild((state) => ([
                                    ...state,
                                    <Rock_1 key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                                ]))
                                break;
                            case 'torch':
                                setBuild((state) => ([
                                    ...state,
                                    <Torch key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                                ]))
                                break;
                            case 'floor_1':
                                setBuild((state) => ([
                                    ...state,
                                    <Floor_1
                                        key={use.type + index}
                                        position={use.position}
                                        rotation={use.rotation}
                                        type={use.type} />
                                ]))
                                break;
                            case 'swamp_monster':
                                setBuild((state) => ([
                                    ...state,
                                    <SwampMonster key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                                ]))
                                break;
                        }
                    })

                    setGroundSize(parsed.ground)
                })
        }
        
    }, [])

    return (
        <>
            <Canvas shadows className='bg-black'>
               
                <Physics gravity={[0, -30, 0]}>

                    <Suspense fallback={<Loader />}>
                        <Ground position={[0, 0, 0]} size={groundSize} />
                        {build}
                    </Suspense>
                    
                </Physics>                
            </Canvas>
            <Interface />
        </>
        
    )
}

export default Index