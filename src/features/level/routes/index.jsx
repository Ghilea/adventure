import React, { useLayoutEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import LoadModel from '@models/components/models';
import Ground from '@comp/ground';
import { Read } from '@comp/crud';
import Player from '@features/player';
import Loader from '@comp/loading/Loader';
import Interface from '@features/interface';
import { loading } from '@store/store';
import './index.scss';

const Index = () => {

    const isLoading = loading(state => state.isLoading)
    const [build, setBuild] = useState([]);
    const [groundSize, setGroundSize] = useState([10]);

    useLayoutEffect(() => {
        let ignore = false;

        const startFetching = async () => {

            const json = await Read(`getLevel?id=TestMap`)

            if (!ignore) {

                //reset
                setBuild([])

                //get data
                const parsed = JSON.parse(json.data[0].content)
                
                //loop and set data
                parsed.objects.map((use, index) => {
                    if (use.type === 'player') {
                        setBuild((state) => ([
                            ...state,
                            <Player key={use.type + index} position={use.position} rotation={use.rotation} />
                        ]))
                    } else {
                        setBuild((state) => ([
                            ...state,
                            <LoadModel key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                        ]))
                    }
                })

                setGroundSize(parsed.ground)
            }
        }

        startFetching();

        return () => {
            ignore = true;
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

            {!isLoading ? <Interface /> : null}
        </>

    )
}

export default Index