import { useState } from 'react'
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping} from 'three';

import stoneImg from '../../../../assets/images/texture/stone.jpg';
import stone_windowImg from '../../../../assets/images/texture/stone_window.png';
import stone2Img from '../../../../assets/images/texture/stone2.jpg';

export const stone = () => {
    
    const texture = useLoader(TextureLoader, stoneImg);
    //stone.wrapS = RepeatWrapping;
    //stone.wrapT = RepeatWrapping;
    //stone.repeat.set(5, 5);

    return texture;
} 

export const stone_window = () => {
    const texture = useLoader(TextureLoader, stone_windowImg);
    return texture;
}

export const stone2 = () => {
    const texture = useLoader(TextureLoader, stone2Img);
    return texture;
}