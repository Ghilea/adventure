import React, { useEffect, useState } from 'react';
import { Ground } from '@comp/map/Ground';
import { Walls } from '@comp/map/walls';
import { Object } from '@comp/map/object';
import { Torch } from '@shared/components/models/torch';
import { RockPile } from '@shared/components/models/rockpile';

export const MenuBg = () => {

    const [build, setBuild] = useState([]);
    const [ground, setGround] = useState({
        texture: 'stone',
        size: [10, 10]
    });

    useEffect(() => {
    
        const items = {
            "walls": [{
                "pos": [-0.5, 1.99999983815115, 4.5],
                "rotate": [0, 0, 0],
                "type": ["stoneWindow"]
            }, {
                "pos": [-4.5, 1.9999999330563478, 1.5],
                "rotate": [0, 1.58, 0],
                "type": ["stone"]
            }, {
                "pos": [4.5, 1.9999998326444188, 4.5],
                "rotate": [0, 0, 0],
                "type": ["stone"]
            }, {
                "pos": [4.5, 1.9999999295635922, 2.5],
                "rotate": [0, 1.58, 0],
                "type": ["stone"]
            }, {
                "pos": [4.5, 2.0000001094138553, -3.5],
                "rotate": [0, 1.58, 0],
                "type": ["stone"]
            }, {
                "pos": [-4.5, 2.000000106379448, -3.5],
                "rotate": [0, 1.58, 0],
                "type": ["stone"]
            }],
            "ground": [10, 10, "stone"],
            "player": []
        }
            
        items.walls.map((use, index) => {

            setBuild((state) => ([
                ...state,
                <Walls key={'wall'+index} position = {use.pos}
                rotation = { use.rotate }
                type = { use.type }
                />
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
    */

    return (
        <>
            <Ground position = {[0, 0, 0]} groundTexture={ground.texture} size={ground.size}/>
            {build} 
            
            <Torch position={[2, 2.5, 4]} scale={[0.1, 0.1, 0.1]} rotation={[0, -1.5, 0]}/>
            <Torch position={[-3.5, 2.5, -1]} scale={[0.1, 0.1, 0.1]} rotation={[0, 2.5, 0]}/>
            <Torch position={[0.5, 1, -4]} scale={[0.1, 0.1, 0.1]} rotation={[0, -1.5, 0]}/>
            <RockPile position={[-2.5, 0.1, -2]} scale={[1, 1, 1]}/>
        </>
    )
}