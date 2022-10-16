import { useEffect, useState } from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { build } from '@store/editor';

const GroundCheck = () => {
    
    const storeBuild = build(state => state);
    const mousePosition = build(state => state.mousePosition);

    const [groundColor, setGroundColor] = useState('');

    const [highLight, setHighLight] = usePlane(() => ({
        args: [storeBuild.isBuild.objectSize.x, storeBuild.isBuild.objectSize.z],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))
   
    useEffect(() => {
        console.log(mousePosition)
        const centerX = (Math.floor(mousePosition.x) + 0.5)
        const centerZ = (Math.floor(mousePosition.z) + 0.5)

        if(storeBuild.solid.length > 0){
            const check = storeBuild.solid.filter(obj => {
                return (obj.x == centerX) && (obj.z == centerZ) || (!storeBuild.isBuild.objectSize.rotate) ? (obj.x >= (centerX - (storeBuild.isBuild.objectSize.x / 2))) && obj.z == centerZ && (obj.x <= (Math.floor(mousePosition.x) + (storeBuild.isBuild.objectSize.x / 2))) && obj.z == centerZ : (obj.x == centerX && obj.z >= (centerZ - (storeBuild.isBuild.objectSize.z / 2))) && (obj.x == centerX && obj.z <= (Math.floor(mousePosition.z) + (storeBuild.isBuild.objectSize.z / 2)))
            })
            
            if (check.length > 0) {
                setGroundColor('red');
            }else{
                setGroundColor('green');
            }
            
        }

    }, [mousePosition])

    useEffect(() => {
        if (storeBuild.isBuild.active){
            setGroundColor('green')
        }else{
            setGroundColor('')
        }
        
    }, [storeBuild.isBuild.active])

    useFrame(() => {mousePosition
        setHighLight.position.set(Math.floor(mousePosition.x) + 0.5, mousePosition.y + 0.01, Math.floor(mousePosition.z) + 0.5);
    })
 
    return (
        <mesh ref = {highLight}>
            <planeGeometry attach='geometry' args={[storeBuild.isBuild.objectSize.x, storeBuild.isBuild.objectSize.z]}/>
            <meshStandardMaterial attach='material' color={groundColor} transparent={true} opacity={groundColor === '' ? 0 : 1}/>
        </mesh>
    )

}

export default GroundCheck