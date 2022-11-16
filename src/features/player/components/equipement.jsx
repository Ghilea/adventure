import React from 'react'
import Sword from '@models/equipement/sword';
import { map } from '@store/store';

const Equipement = ({ position, rotation }) => {

    const store = map(state => state);
    /* console.log(
        [store.playerPosition[0][0], store.playerPosition[0][1], store.playerPosition[0][2]]
    ) */

    return (
        <group>
            <Sword position={position} rotation={rotation} />
        </group>

    )
}

export default Equipement