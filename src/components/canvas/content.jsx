import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Level } from '@comp/level/Level';
import { Menu } from '@comp/menu/Menu';
import { MenuBar } from '@comp/menu/MenuBar';
//import { OrbitControls } from '@react-three/drei';

/*
<OrbitControls />
<ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
*/

/*
renderer.dispose()
renderer.forceContextLoss()
*/
export const Content = () => {

    const [content, setContent] = useState({
        load: 'initialize',
        extra: null
    });

    const loadingDoneHandle = (data) => {
        console.log('loadingDone', data) 
        setContent({...content, extra: 'menu' })
    }

    return (
        <>
            <Canvas shadows camera={(content.load === 'initialize') ? {
                fov: 60,
                position: [-3.5, 1, -5.8]
            } : <></>}>
                <ambientLight intensity={0.5} />
                <Physics gravity={[0, -30, 0]}>
                    {(content.load === 'initialize') ? <Menu func={loadingDoneHandle} /> : (content.load === 'level') ? <Level /> : <></>}
                </Physics>
            </Canvas>
            {content.extra === 'menu' ? <MenuBar /> : <></>}
        </>        
    )
}

export default Content;