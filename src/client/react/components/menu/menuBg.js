import React, { useEffect, useState } from 'react';
import { Ground } from '@comp/map/Ground';
import { Walls } from '@comp/map/walls';
import { Read } from '@shared/components/Crud';
import { map } from '@comp/store';
import { fetchURL } from '@shared/global';

export const MenuBg = () => {

    const storeMap = map(state => state);

    const [build, setBuild] = useState([]);

    useEffect(() => {

        let url = `${fetchURL}/getLevel?&id=0`;
    
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

                }   
            })
    }, [])

    return (
        <>
            <Ground position = {[0, 0, 0]} />
            {build}           
        </>
    )
}