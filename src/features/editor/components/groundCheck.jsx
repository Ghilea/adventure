import { useEffect, useState } from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { build } from '@store/editor';

const GroundCheck = ({ mousePosition, setCanAddObjects }) => {
    const storeBuild = build(state => state);

    const [groundColor, setGroundColor] = useState('white');

    const [highLight, setHighLight] = usePlane(() => ({
        args: [storeBuild.sizeX, storeBuild.sizeY],
        position: [0.5, 0.01, 0.5],
        rotation: [-Math.PI / 2, 0, 0],
    }))
   
    useEffect(() => {
        const centerX = (Math.floor(mousePosition.x) + 0.5)
        const centerZ = (Math.floor(mousePosition.z) + 0.5)

        console.log('solid', storeBuild.solid);
        if(storeBuild.solid.length > 0){
            const check = storeBuild.solid.filter(obj => {
                return (obj.x == centerX) && (obj.z == centerZ) || (!storeBuild.rotate) ? (obj.x >= (centerX - (storeBuild.sizeX / 2))) && obj.z == centerZ && (obj.x <= (Math.floor(mousePosition.x) + (storeBuild.sizeX / 2))) && obj.z == centerZ : (obj.x == centerX && obj.z >= (centerZ - (storeBuild.sizeY / 2))) && (obj.x == centerX && obj.z <= (Math.floor(mousePosition.z) + (storeBuild.sizeY / 2)))
            })
            
            console.log(check)
            if (check.length > 0) {
                setGroundColor('red');
                setCanAddObjects(false)
            }else{
                setGroundColor('green');
                setCanAddObjects(true)
            }
            
        }

    }, [mousePosition])

    useEffect(() => {
        console.log('color:', groundColor);
    }, [groundColor])
    useFrame(() => {mousePosition
        setHighLight.position.set(Math.floor(mousePosition.x) + 0.5, mousePosition.y + 0.01, Math.floor(mousePosition.z) + 0.5);
    })

    return (
        <mesh ref = {highLight}>
            <planeGeometry attach='geometry' args = {[storeBuild.sizeX, storeBuild.sizeY]}/>
            <meshStandardMaterial attach='material' color={groundColor} />
        </mesh>
    )

}

export default GroundCheck