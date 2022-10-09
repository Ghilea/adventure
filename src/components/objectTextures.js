import { useLoader } from '@react-three/fiber';
import { TextureLoader} from 'three';

import woodImg from '@assets/images/texture/wood.jpg';

import wood2Img from '@assets/images/texture/wood2.jpg';

export const wood = () => {
    
    const texture = useLoader(TextureLoader, woodImg);

    return texture;
} 

export const wood2 = () => {

    const texture = useLoader(TextureLoader, wood2Img);

    return texture;
}

