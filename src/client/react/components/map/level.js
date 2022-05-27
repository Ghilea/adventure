import React, { useEffect, useState } from 'react';
import { Ground } from '@comp/map/Ground';
import { Cube } from '@comp/map/cube';
import { Walls } from '@comp/map/walls';
import { Read } from '@shared/components/Crud';
import { map } from '@comp/store';
import { Player } from '@comp/player/Player';
import { fetchURL } from '@shared/global';


export const Level = () => {

    const storeMap = map(state => state);

    const [build, setBuild] = useState([]);
    const [createPlayer, setCreateplayer] = useState();
    const [ground, setGround] = useState({
        texture: 'stone',
        size: [10, 10]
    });

    useEffect(() => {

        let url = `${fetchURL}/getLevel?&id=${storeMap.level}`;
    
        Read(url)
            .then(items => {

                if (items.level.length > 0) {

                    const parsed = JSON.parse(items.level[0].content)

                    parsed.walls.map((use, index) => {

                        setBuild((state) => ([
                            ...state,
                            <Walls key={'wall'+index} position = {use.pos}
                            rotation = { use.rotate }
                            type = { use.type }
                            />
                        ]))
                    })

                    setCreateplayer(() => (
                        <Player position = {parsed.player} />
                    ))

                    setGround((state) => ({
                        ...state,
                        texture: parsed.ground[2],
                        size: [parsed.ground[0], parsed.ground[1]]
                    }))

                    storeMap.setPlayerPosition(parsed.player);
                }   
            })
    }, [])

    return (
        <>
            <Ground position = {[0, 0, 0]} groundTexture={ground.texture} size={ground.size}/>
            {build}
            {createPlayer}
            <Cube position={[0.1, 5, 0]} />
            <Cube position={[0, 10, -1]} />
            <Cube position={[0, 20, -2]} />
            
        </>
    )
}