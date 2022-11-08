import { useEffect } from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame, useLoader } from '@react-three/fiber';
import { build, ground } from '@store/editor';
import arrowImg from '@images/svg/arrow.svg';
import crossImg from '@images/svg/cross.svg';
import { RepeatWrapping, TextureLoader } from 'three';

const GroundCheck = () => {
    
    //store
    const solidCheck = build(state => state.solid);
    const store = build(state => state);
    const mousePosition = build(state => state.mousePosition);
    const isBuild = build(state => state.isBuild);
    const storeGround = ground(state => state);
    const objectSize = build(state => state.isBuild.objectSize);

    //arrow img texture on the ground marker
    const texture = useLoader(TextureLoader, (storeGround.color === 'green') ? arrowImg : crossImg)

    //repeat the arrow when size gets bigger
    texture.wrapS = texture.wrapT = RepeatWrapping
    if(objectSize.rotate === 0 || objectSize.rotate === 360) {
        texture.repeat.set(objectSize.x, objectSize.z)
    }else{
        texture.repeat.set(objectSize.z, objectSize.x)
    }
    
    // rotate the arrow based on the objects rotation
    // 0 = left, 180 = down, -180 = up, 360 = right
    texture.rotation = (Math.PI * (objectSize.rotate/360))

    const [highLight, setHighLight] = usePlane(() => ({
        args: [objectSize.x, objectSize.z],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))
   
    useEffect(() => {
        const centerX = (Math.floor(mousePosition.x) + 0.5)
        const centerZ = (Math.floor(mousePosition.z) + 0.5)

        if(isBuild.isSolid && isBuild.active){
    
            if (solidCheck.length > 0){

                //check the ground if it is allwed to place object there
                const check = solidCheck.filter(obj => {
                    return (
                        obj.x == centerX) && (obj.z == centerZ) || (objectSize.rotate === 0 ||  objectSize.rotate === 360) ? 

                        (obj.x >= (centerX - (objectSize.x / 2))) && 
                        obj.z == centerZ && 
                        (obj.x <= (Math.floor(mousePosition.x) + (objectSize.x / 2))) && 
                        obj.z == centerZ : 

                        (obj.x == centerX && 
                        obj.z >= (centerZ - (objectSize.z / 2))) && 
                        (obj.x == centerX && 
                        obj.z <= (Math.floor(mousePosition.z) + (objectSize.z / 2)))
                })
                
                if (check.length > 0) {
                    storeGround.groundColor('red');
                    store.setCanBuild(false)
                }else{
                    storeGround.groundColor('green');
                    store.setCanBuild(true)
                }
                
            }
        }

    }, [mousePosition])

    useEffect(() => {
        if (isBuild.active){
            storeGround.groundColor('green')
            store.setCanBuild(true)
        }else{
            storeGround.groundColor(false)
            store.setCanBuild(false)
        }
        
    }, [isBuild.active])

    useFrame(() => {
        setHighLight.position.set(Math.floor(mousePosition.x) + 0.5, mousePosition.y + 0.01, Math.floor(mousePosition.z) + 0.5);
    })
 
    return (
        <mesh ref = {highLight}>
            <planeGeometry 
                attach='geometry' 
                args={
                    [objectSize.x, objectSize.z]
                }/>

            <meshStandardMaterial 
                attach='material' 
                color={storeGround.color} 
                transparent={true}
                opacity={!storeGround.color ? 0 : 1}
                map={texture}
                 />
        </mesh>
    )

}

export default GroundCheck