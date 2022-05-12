import { useState } from 'react'
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping} from 'three';

import stoneImg from '../../../../assets/images/texture/wall.jpg';

export const stone = () => {
    
    const stone = useLoader(TextureLoader, stoneImg);
    //stone.wrapS = RepeatWrapping;
    //stone.wrapT = RepeatWrapping;
    //stone.repeat.set(5, 5);

    return stone;
}  