import { Suspense, useState, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import LoadModel from '@models/components/models';
import Menu from '../components/Menu';
import Ground from '@comp/ground';
import { Read } from '@comp/crud';
import Loader from '@comp/loading/loader';
import { loading } from '@store/store';
import './index.scss';

const Index = () => {

    const isLoading = loading(state => state.isLoading)
    const [build, setBuild] = useState([]);

    useLayoutEffect(() => {
        let ignore = false;

        const startFetching = async () => {
            const json = await Read(`getLevel?id=${'Menu'}`)

            if (!ignore) {

                //reset
                setBuild([])

                //get data
                const parsed = JSON.parse(json.data[0].content)

                //loop and set data
                parsed.objects.map((use, index) => {

                    setBuild((state) => ([
                        ...state,
                        <LoadModel key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                    ]))
                })

                setBuild((state) => ([
                    ...state,
                    <Ground key={'groundMenu'} position={[0, 0, 0]} size={parsed.ground} />
                ]))

            }
        }

        startFetching();

        return () => {
            ignore = true;
        }

    }, [])

    return (
        <>
            
            <Canvas shadows className='bg-black h-full-vh'
                camera={{
                    fov: 60,
                    position: [-3.5, 1, -5.8]
                }}>
                <Physics gravity={[0, -30, 0]}>

                    <Suspense fallback={<Loader />} >
                        {build}
                    </Suspense>

                </Physics>
            </Canvas>

            {!isLoading ? <Menu /> : null}

        </>
    )
}

export default Index