import { useLoader } from '@react-three/fiber';
import { TextureLoader} from 'three';

import stoneImg from '@shared/assets/images/texture/stone.jpg';

export const stone = () => {
    
    const texture = useLoader(TextureLoader, stoneImg);

    return texture;
} 