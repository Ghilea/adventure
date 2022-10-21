import { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { useProgress } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Menu from '../components/Menu';
import Ground from '@comp/ground';
import { Torch } from '@models/objects/torch/torch';
import { Rock_1 } from '@models/objects/rocks/rocks';
import { Wall_1 } from '@models/objects/walls/walls';
import { Player } from '@models/creatures/player/player';
import SwampMonster from '@models/creatures/swamp_monster/swamp_monster';
import Floor_1 from '@models/grounds/floor_1/floor_1';
import Loader from '@comp/loading/Loader';
import menuMusic from '@assets/music/menu.mp3'; 
import useSound from 'use-sound';
import { Howl, Howler } from 'howler';
import { Read } from '@comp/crud';
import './index.scss';
import { Sword } from '@models/equipement/sword';
const Index = () => {

    const { progress } = useProgress();
    const [menu, setMenu] = useState();
    const [groundSize, setGroundSize] = useState([10, 10]);
    const [build, setBuild] = useState([]);
    const [music, setMusic] = useState();

    useMemo(() => {
        setMusic(new Howl({
            src: [menuMusic],
            volume: 0.4,
            loop: true
        }))
    }, [])
    
    useEffect(() => {

        Read(`getLevel?id=${'Menu'}`)
            .then(response => {

                const parsed = JSON.parse(response.data[0].content)
               
                parsed.objects.map((use, index) => {

                    switch (use.type) {
                        case 'wall_1':
                            setBuild((state) => ([
                            ...state,
                                <Wall_1 key={use.type+index} position={use.position} rotation={use.rotation} type={use.type} />
                            ]))
                            break;
                        case 'player':
                            setBuild((state) => ([
                                ...state,
                                <Player key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                            ]))
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
    }, [])

    useEffect(() => {       
        if(progress <= 0) {
            music.play();
        }

        if (progress >= 100) {
            setMenu(<Menu />)
        }
    }, [progress])

    return (
        <>

            <Canvas shadows camera={{
                fov: 60,
                position: [-3.5, 1, -5.8]
            }}>
                <ambientLight intensity={1} />
                <Physics gravity={[0, -30, 0]}>
                   
                    <Suspense fallback={<Loader />}>
                        <Ground position={[0, 0, 0]} size={groundSize}/>
                        {build}
                    </Suspense>

                </Physics>

                <Sword />
            </Canvas>

            {menu}          
        </>
    )
}

export default Index