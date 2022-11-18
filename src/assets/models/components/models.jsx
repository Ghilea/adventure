import { useState, useMemo } from 'react';

import { Wall_1 } from '@models/objects/walls/walls';
import { Torch } from '@models/objects/torch/torch';
import { Rock_1 } from '@models/objects/rocks/rocks';
import { Player } from '@models/creatures/player/player';
import SwampMonster from '@models/creatures/swamp_monster/swamp_monster';
import Floor_1 from '@models/grounds/floor_1/floor_1';
import Knight from '@models/avatar/knight';

import Sword from '@models/equipement/sword/sword';
import VikingShield from '@models/equipement/shield/viking_Shield';

const Models = ({ position, rotation, type }) => {

    const [model, setModel] = useState([])

    useMemo(() => {

        switch (type) {
            case 'wall_1':
                setModel(<Wall_1 position={position} rotation={rotation} type={type} />)
                break;
            case 'player':
                setModel(<Player position={position} rotation={rotation} type={type} />)
                break;
            case 'rock_1':
                setModel(<Rock_1 position={position} rotation={rotation} type={type} />)
                break;
            case 'torch':
                setModel(<Torch position={position} rotation={rotation} type={type} />)
                break;
            case 'floor_1':
                setModel(<Floor_1 position={position} rotation={rotation} type={type} />)
                break;
            case 'swamp_monster':
                setModel(<SwampMonster position={position} rotation={rotation} type={type} />)
                break;
            case 'knight':
                setModel(<Knight position={position} rotation={rotation} type={type} />)
                break;
            case 'sword':
                setModel(<Sword position={position} rotation={rotation} type={type} />)
                break;
            case 'vikingShield':
                setModel(<VikingShield position={position} rotation={rotation} type={type} />)
                break;
        }

    }, [])

    return model
}

export default Models