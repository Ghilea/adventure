import { Wall_1 } from '@models/objects/walls/walls';
import { Torch } from '@models/objects/torch/torch';
import { Rock_1 } from '@models/objects/rocks/rocks';
import { Player } from '@models/creatures/player/player';
import SwampMonster from '@models/creatures/swamp_monster/swamp_monster';
import Floor_1 from '@models/grounds/floor_1/floor_1';

const Models = ({position, rotation, type}) => {

    let model = ''
    
    switch (type) {
        case 'wall_1':
            model = <Wall_1 position={position} rotation={rotation} type={type} />
            break;
        case 'player':
            model = <Player position={position} rotation={rotation} type={type} />
            break;
        case 'rock_1':
            model = <Rock_1 position={position} rotation={rotation} type={type} />
            break;
        case 'torch':
            model = <Torch position={position} rotation={rotation} type={type} />
            break;
        case 'floor_1':
            model = <Floor_1 position={position} rotation={rotation} type={type} />
            break;
        case 'swamp_monster':
            model = <SwampMonster position={position} rotation={rotation} type={type} />
            break;
    }

    return model
}

export default Models