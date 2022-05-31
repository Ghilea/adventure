import React, { useEffect, useState } from 'react';
import { Ground } from '@comp/map/Ground';
import { Walls } from '@comp/map/walls';
import { Object } from '@comp/map/object';
import { Torch } from '@shared/components/models/torch';
import { RockPile } from '@shared/components/models/rockpile';
import { StoneWall } from '@shared/components/models/walls';

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
            }],
            "ground": [10, 10, "stone"],
            "player": []
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
            texture: items.ground[2],
            size: [items.ground[0], items.ground[1]]
        }))
    }, [])

    /*
        <Object mass={0} light={false} rotation = {[0, 0, 0]} position={[0, 1, -2]} size={[1, 1, 1]} objectTexture={'wood'}/>
            <Object mass={0} light={false} rotation = {[0, 0, 0]} position={[-2, 1, -2]} size={[1, 1, 1]} objectTexture={'wood'}/>

            <Torch position={[-3.5, 2.5, -1]} scale={[0.1, 0.1, 0.1]} rotation={[0, 2.5, 0]}/>
            <Torch position={[0.5, 1, -4]} scale={[0.1, 0.1, 0.1]} rotation={[0, -1.5, 0]}/>
    */

    return (
        <>
            <Ground position = {[0, 0, 0]} groundTexture={ground.texture} size={ground.size}/>
            {build} 
            <Torch position={[0, 1.5, 3.85]} scale={[0.03, 0.03, 0.03]} rotation={[0, Math.PI * (360/360), 0]}/>
            
            <RockPile position={[-2.5, 0.1, -2]} scale={[1, 1, 1]}/>
        </>
    )
}