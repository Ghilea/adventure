import React, { useEffect, useState } from 'react';
import { Ground } from './Ground';
import { Cube } from './cube';
import { Walls } from './walls';
import { Read } from '../../../../shared/components/Crud';
import { map } from '../store';

const Level = () => {

    const storeMap = map(state => state);

    const [build, setBuild] = useState([]);

    useEffect(() => {

        let url = `http://localhost:3000/getLevel?&id=${storeMap.level}`;
    
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

                    storeMap.setPlayerPosition(parsed.player);
     
                }   
            })
    }, [])

    return (
        <>
            <Ground position = {[0, 0, 0]} />
            {build}
            <Cube position={[0.1, 5, 0]} />
            <Cube position={[0, 10, -1]} />
            <Cube position={[0, 20, -2]} />
        </>
    )
}

export default Level;