import { Suspense, useEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Menu from '../components/Menu';
import Ground from '@comp/ground';
import { Torch } from '@models/objects/torch/torch';
import { Rock_1 } from '@models/objects/rocks/rocks';
import { Wall_1 } from '@models/objects/walls/walls';
import { Player } from '@models/creatures/player/player';
import { SwampMonster } from '@models/creatures/swamp_monster/SwampMonster';
import Loader from '@comp/loading/Loader';
import menuMusic from '@assets/music/menu.mp3';
import useAudio from '@hooks/useAudio';
import './index.scss';

const Index = () => {

    const [play, { stop }] = useAudio(menuMusic, {
        volume: 0.3,
        loop: true
    });
    
    const { progress } = useProgress();
    const [menu, setMenu] = useState();
    const [groundSize] = useState([10, 10]);
    
    const wall = 2.4

    useEffect(() => {
        if (progress <= 0) {
            play();
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

                <Physics gravity={[0, -30, 0]}>
                   
                    <Suspense fallback={<Loader />}>
                        <Ground position = {[0, 0, 0]} size={groundSize}/>
                        <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[3.2, wall, 1]}/>
                        <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[1.2, wall, 1]}/>
                        <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[-1.8, wall, 1]}/>
                        <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[-3.8, wall, 1]}/>

                        <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[-4.2, wall, -0.2]}/>
                        <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[-4.2, wall, -2.2]}/>

                        <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[2.2, wall, -1.2]}/>
                        <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[2.2, wall, -3.2]}/>

                        <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[-1.2, wall, 0.2]}/>

                        <SwampMonster rotation={[0, Math.PI * (360/360), 0]}  position={[-2.2, 0.1, -0.2]}/>

                        <Torch position={[-3.35, 2, -2]} scale={[1.03, 1.03, 1.03]} rotation={[0, Math.PI * (180/360), 0]}/>

                        <Rock_1 position={[-4.5, -0.3, 0.5]} scale={[0.3, 0.3, 1]} />
                
                        <Player position={[-2.7, 0.5, -3.5]} />
                    </Suspense>

                </Physics>
            </Canvas>

            {menu}          
        </>
    )
}

export default Index