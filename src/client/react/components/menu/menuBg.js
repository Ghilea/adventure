import React, { useEffect, useState } from 'react';
import { Ground } from '@comp/map/Ground';
import { Walls } from '@comp/map/walls';
import { Object } from '@comp/map/object';
import { Torch } from '@shared/components/models/torch';
import { Rock } from '@shared/components/models/rocks';
import { StoneWall, StoneWall_2 } from '@shared/components/models/walls';

export const MenuBg = () => {

    const [build, setBuild] = useState([]);
    const [ground, setGround] = useState({
        texture: 'stone',
        size: [10, 10]
    });

    useEffect(() => {
    
        const items = {
            "walls": [{
                "pos": [0, 0, 4],
                "rotate": [0, 360, 0]
            }, {
                "pos": [-4.5, 0, -0.5],
                "rotate": [0, 180, 0]
            },{
                "pos": [4.5, 0, -0.5],
                "rotate": [0, -180, 0]
            }]
        }
            
        items.walls.map((use, index) => {

            setBuild((state) => ([
                ...state,
                /*<Walls key={'wall'+index} position = {use.pos}
                rotation = { use.rotate }
                type = { use.type }
                />*/
                <StoneWall 
                key={'wall'+index} 
                rotation={[0, Math.PI * (use.rotate[1]/360), 0]} 
                scale={[1.5, 1.5, 1]}
                position={use.pos}/>
            ]))
        })

        setGround((state) => ({
            ...state,
            texture: ground.texture,
            size: ground.size
        }))
    }, [])

    return (
        <>
            <Ground position = {[0, 0, 0]} groundTexture={ground.texture} size={ground.size}/>
            {build} 
            <Torch position={[0, 1.5, 3.8]} scale={[0.03, 0.03, 0.03]} rotation={[0, Math.PI * (360/360), 0]}/>
            <Torch position={[-4.3, 1.5, -2]} scale={[0.03, 0.03, 0.03]} rotation={[0, Math.PI * (180/360), 0]}/>
            <Rock position={[-2.5, 0.5, -2]} scale={[1, 1, 1]}/>
        </>
    )
}