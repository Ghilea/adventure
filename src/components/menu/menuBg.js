import React, { Suspense, useEffect, useState } from 'react';
import { Ground } from '@comp/level/Ground';
import { Torch } from '@shared/models/torch';
import { Rock_1 } from '@shared/models/rocks';
import { Wall_1 } from '@shared/models/walls';
import { Player } from '@shared/models/player';
import { SwampMonster } from '@shared/models/creatures/SwampMonster';
import { Loader } from '@shared/components/loading/Loader';


export const MenuBg = () => {

    const [build, setBuild] = useState([]);
    const [ground, setGround] = useState({
        texture: 'stone',
        size: [10, 10]
    });
    const [wall, setWall] = useState({
        y: -0.95
    })

    useEffect(() => {
        setGround((state) => ({
            ...state,
            texture: ground.texture,
            size: ground.size
        }))
    }, [])

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Ground position = {[0, 0, 0]} groundTexture={ground.texture} size={ground.size}/>
                <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[3.2, wall.y, 1]}/>
                <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[1.2, wall.y, 1]}/>
                <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[-1.8, wall.y, 1]}/>
                <Wall_1 rotation={[0, Math.PI * (180/360), 0]}  position={[-3.8, wall.y, 1]}/>

                <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[-4.2, wall.y, -0.2]}/>
                <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[-4.2, wall.y, -2.2]}/>

                <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[2.2, wall.y, -1.2]}/>
                <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[2.2, wall.y, -3.2]}/>

                <Wall_1 rotation={[0, Math.PI * (360/360), 0]}  position={[-1.2, wall.y, 0.2]}/>

                <SwampMonster rotation={[0, Math.PI * (360/360), 0]}  position={[-2.2, 0.1, -0.2]}/>

                {build} 
                <Torch position={[-3.9, 0.3, -2]} scale={[1.03, 1.03, 1.03]} rotation={[0, Math.PI * (180/360), 0]}/>

                <Rock_1 position={[-4.5, -0.3, 0.5]} scale={[0.3, 0.3, 1]} />
         
                <Player position={[-3.5, 0.55, -3.5]} scale={2.5} rotation={[0, Math.PI * (360/360), 0]}/>
            </Suspense>
        </>
    )
}