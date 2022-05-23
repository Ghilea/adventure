import React, { useEffect, useState, useRef } from 'react';
import { Ground } from './Ground';
import { Cube } from './cube';
import { Walls } from './walls';
import { Read } from '../../../../shared/components/Crud';

const Level = () => {

    const [build, setBuild] = useState([]);

    useEffect(() => {

        let url = `http://localhost:3000/getLevel?&id=1`;
    
        Read(url)
            .then(items => {

                if (items.level.length > 0) {

                    JSON.parse(items.level[0].content).map((use, index) => {
    
                        console.log(use);
                        setBuild((state) => ([
                            ...state,
                            <Walls key={index} position = {
                                [
                                    use.pos
                                ]
                            }
                            rotation = {
                                [
                                    use.rotate
                                ]
                            }
                            type = {
                                [ 
                                    use.type
                                ]
                            }
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
            <Cube position={[0.1, 5, 0]} />
            <Cube position={[0, 10, -1]} />
            <Cube position={[0, 20, -2]} />
        </>
    )
}

export default Level;