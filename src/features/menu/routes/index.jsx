import { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import LoadModel from '@models/components/models';
import Menu from '../components/Menu';
import Ground from '@comp/ground';
import menuMusic from '@assets/music/menu3.mp3'; 
import useSound from 'use-sound';
import { Read } from '@comp/crud';
import { loading } from '@store/store';
import Loader from '@comp/loading/loader';
import './index.scss';

const Index = () => {

    const store = loading(state => state);
    const [groundSize, setGroundSize] = useState([10]);
    const [build, setBuild] = useState([]);
    const [menu, setMenu] = useState([])

    const [play] = useSound(menuMusic, {
        volume:0.4,
        loop: true
    });
    
    useEffect(() => {

        if(build.length <= 0){

            Read(`getLevel?id=${'Menu'}`)
                .then(response => {

                    const parsed = JSON.parse(response.data[0].content)

                    parsed.objects.map((use, index) => {

                        setBuild((state) => ([
                            ...state,
                            <LoadModel key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                        ]))
                    })

                    setGroundSize(parsed.ground)
                })
        }
        
    }, [])

    useEffect(() => {               
        
        if(!store.isLoading && menu.length <= 0){
            setMenu(<Menu />)
            play();
        }
        
    }, [store.isLoading])

    return (
        <>
           
            <Canvas shadows 
                camera={{
                fov: 60,
                position: [-3.5, 1, -5.8]
            }}
            className='bg-black'>
                <Physics gravity={[0, -30, 0]}>
                
                    <Suspense fallback={<Loader />} >
                        <Ground position={[0, 0, 0]} size={groundSize}/>
                        {build}
                    </Suspense>

                </Physics>
            </Canvas>
            
            {menu}

        </>
    )
}

export default Index