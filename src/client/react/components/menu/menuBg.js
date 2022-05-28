import React, { useEffect, useState } from 'react';
import { Ground } from '@comp/map/Ground';
import { Walls } from '@comp/map/walls';
import { Read } from '@shared/components/Crud';
import { fetchURL } from '@shared/global';
import { Object } from '@comp/map/object';

export const MenuBg = () => {

    const [build, setBuild] = useState([]);
    const [ground, setGround] = useState({
        texture: 'stone',
        size: [10, 10]
    });

    useEffect(() => {

        const url = `${fetchURL}/getLevel?&id=0`;
    
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

                    setGround((state) => ({
                        ...state,
                        texture: parsed.ground[2],
                        size: [parsed.ground[0], parsed.ground[1]]
                    }))

                }   
            })
    }, [])

    return (
        <>
            <Ground position = {[0, 0, 0]} groundTexture={ground.texture} size={ground.size}/>
            {build} 
            <Object mass={0} light={true} distance={5} rotation = {[0, 0, 0]} position={[-1.5, 1, -2]} size={[1, 1, 1]} objectTexture={'wood'}/>
        </>
    )
}