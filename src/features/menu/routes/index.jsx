import { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { useProgress } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import LoadModel from '@models/components/models';
import Menu from '../components/Menu';
import Ground from '@comp/ground';
import Loader from '@comp/loading/Loader';
import menuMusic from '@assets/music/menu.mp3'; 
import useSound from 'use-sound';
import { Howl, Howler } from 'howler';
import { Read } from '@comp/crud';
import './index.scss';

const Index = () => {

    const { progress } = useProgress();
    const [groundSize, setGroundSize] = useState([10]);
    const [build, setBuild] = useState([]);
    const [music, setMusic] = useState();

    useMemo(() => {
        setMusic(new Howl({
            src: [menuMusic],
            volume: 0.2,
            loop: true
        }))
    }, [])
    
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
        if(progress === 0) {
            music.play();
        }

    }, [progress])

    return (
        <>

            <Canvas shadows 
                camera={{
                fov: 60,
                position: [-3.5, 1, -5.8]
            }}
            className='bg-black'>
                <Physics gravity={[0, -30, 0]}>
                   
                    <Suspense fallback={<Loader />}>
                        <Ground position={[0, 0, 0]} size={groundSize}/>
                        {build}
                    </Suspense>

                </Physics>
            </Canvas>

            {progress < 100 || <Menu />}       
        </>
    )
}

export default Index