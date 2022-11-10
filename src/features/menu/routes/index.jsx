import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import LoadModel from '@models/components/models';
import Menu from '../components/Menu';
import Ground from '@comp/ground';
import { Read } from '@comp/crud';
import { loading } from '@store/store';
import Loader from '@comp/loading/loader';
import './index.scss';

const Index = () => {

    const store = loading(state => state);
    const [build, setBuild] = useState([]);
    const [menu, setMenu] = useState([])

    useEffect(() => {

        if (build.length <= 0) {

            Read(`getLevel?id=${'Menu'}`)
                .then(response => {

                    const parsed = JSON.parse(response.data[0].content)

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
                })
        }

    }, [])

    useEffect(() => {

        //temp fix for bug
        if (!store.isLoading) {
            setMenu(<Menu />)
        } else {
            setTimeout(() => {
                setMenu(<Menu />)
            }, 1000)
        }

    }, [store.isLoading])

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

            {menu}

        </>
    )
}

export default Index