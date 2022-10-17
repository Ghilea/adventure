import { useEffect, useState } from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { build } from '@store/editor';

const GroundCheck = () => {
    
    const solidCheck = build(state => state.solid);
    const mousePosition = build(state => state.mousePosition);
    const isBuild = build(state => state.isBuild);
    const [groundColor, setGroundColor] = useState('');

    const [highLight, setHighLight] = usePlane(() => ({
        args: [isBuild.objectSize.x, isBuild.objectSize.z],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))
   
    useEffect(() => {
        const centerX = (Math.floor(mousePosition.x) + 0.5)
        const centerZ = (Math.floor(mousePosition.z) + 0.5)

        if (solidCheck.length > 0){
            const check = solidCheck.filter(obj => {
                return (
                    obj.x == centerX) && (obj.z == centerZ) || (!isBuild.objectSize.rotate) ? 
                    (obj.x >= (centerX - (isBuild.objectSize.x / 2))) && obj.z == centerZ && (obj.x <= (Math.floor(mousePosition.x) + (isBuild.objectSize.x / 2))) && obj.z == centerZ : 
                    (obj.x == centerX && obj.z >= (centerZ - (isBuild.objectSize.z / 2))) && (obj.x == centerX && obj.z <= (Math.floor(mousePosition.z) + (isBuild.objectSize.z / 2)))
            })
            
            if (check.length > 0) {
                setGroundColor('red');
            }else{
                setGroundColor('green');
            }
            
        }

    }, [mousePosition])

    useEffect(() => {
        if (isBuild.active){
            setGroundColor('green')
        }else{
            setGroundColor('')
        }
        
    }, [isBuild.active])

    useFrame(() => {
        setHighLight.position.set(Math.floor(mousePosition.x) + 0.5, mousePosition.y + 0.01, Math.floor(mousePosition.z) + 0.5);
    })

    useEffect(() => {
        console.log(isBuild.objectSize.rotate)
    })
 
    return (
        <mesh ref = {highLight}>
            <planeGeometry 
                attach='geometry' 
                args={
                    (isBuild.objectSize.rotate === 0 || isBuild.objectSize.rotate === 180 || isBuild.objectSize.rotate === 360) ? [isBuild.objectSize.x, isBuild.objectSize.z] : [isBuild.objectSize.z, isBuild.objectSize.x]
                }/>

            <meshStandardMaterial 
                attach='material' 
                color={groundColor} 
                transparent={true}
                opacity={groundColor === '' ? 0 : 1}/>
        </mesh>
    )

}

export default GroundCheck