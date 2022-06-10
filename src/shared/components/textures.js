import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping} from 'three';
import { ground } from '@devComp/store';
import stoneImg from '@shared/assets/images/texture/stone.jpg';
import floorImg from '@shared/assets/images/texture/floor.jpg';

export const stone = () => {
        
    const storeGround = ground(state => state);

    const texture = useLoader(TextureLoader, stoneImg);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(storeGround.textureSizeX, storeGround.textureSizeY);

    return texture;
} 

export const floor = () => {

    const storeGround = ground(state => state);
    
    const texture = useLoader(TextureLoader, floorImg);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(storeGround.textureSizeX, storeGround.textureSizeY);

    return texture;
}