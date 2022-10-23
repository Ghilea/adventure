import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { useProgress } from "@react-three/drei";
import LoadModel from '@models/components/models';
import Ground from '@comp/ground';
import { Read } from '@comp/crud';
import Player from '@features/player';
import Loader from '@comp/loading/Loader';
import Interface from '@features/interface'

import './index.scss';

const Index = () => {

    const { progress } = useProgress();
    const [build, setBuild] = useState([]);
    const [groundSize, setGroundSize] = useState([10]);

    useEffect(() => {

        if(build.length <= 0) {
            Read(`getLevel?id=TestMap`)
                .then(response => {

                    const parsed = JSON.parse(response.data[0].content)

                    parsed.objects.map((use, index) => {

                        if(use.type === 'player'){
                            setBuild((state) => ([
                                ...state,
                                <Player key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                            ]))
                        }else{
                            setBuild((state) => ([
                                ...state,
                                <LoadModel key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                            ]))
                        }

                    setGroundSize(parsed.ground)
                })

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
            
            {progress < 100 || <Interface />}
        </>
        
    )
}

export default Index