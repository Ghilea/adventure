import React from 'react'
import Sword from '@models/equipement/sword/sword';
import { map } from '@store/store';

const Equipement = ({ position, rotation }) => {

    const store = map(state => state);

    return (
        <Sword position={position} rotation={rotation} />
    )
}

export default Equipement