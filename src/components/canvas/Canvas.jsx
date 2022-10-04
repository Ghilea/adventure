import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Level } from '@comp/level/Level';
import { MenuBg } from '@comp/menu/MenuBackground';
import { Menu } from '@comp/menu/Menu';
import { menu } from '@comp/store'
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

    const storeMenu = menu(state => state);
    useEffect(() => {
        storeMenu.activateContent('menu')
    }, [])
    /*useEffect(() => {
        if (storeMenu.loadingDone) {
            storeMenu.activateContent('menu')
        }
    }, [storeMenu.loadingDone])
*/
    return (
        <Canvas shadows camera={(storeMenu.activeContent === 'menu') ? {
            fov: 60,
            position: [-3.5, 1, -5.8]
        } : <></>}>
            <ambientLight intensity={0.5} />
            <Physics gravity={[0, -30, 0]}>
                {(storeMenu.activeContent === 'menu') ? <><MenuBg /><Menu /></> : (storeMenu.activeContent === 'login') ? <Level /> : <></>}
            </Physics>
        </Canvas> 
    )
}