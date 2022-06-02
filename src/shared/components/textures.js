import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping} from 'three';

import stoneImg from '@shared/assets/images/texture/stone.jpg';
import stone_windowImg from '@shared/assets/images/texture/stone_window.png';
import stone2Img from '@shared/assets/images/texture/stone2.jpg';
import floorImg from '@shared/assets/images/texture/floor.jpg';

export const stone = () => {
    
    const texture = useLoader(TextureLoader, stoneImg);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(5, 5);

    return texture;
} 

export const stoneWindow = () => {
    const texture = useLoader(TextureLoader, stone_windowImg);
    return texture;
}

export const stone2 = () => {
    const texture = useLoader(TextureLoader, stone2Img);
    return texture;
}

export const floor = () => {
    const texture = useLoader(TextureLoader, floorImg);
    return texture;
}