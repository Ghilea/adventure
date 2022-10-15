import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Ground } from '@editor/ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import SelectObject from '@editor/select_canvas_object';
import disable from '@hooks/disable-click';

const EditorCanvas = ({ onClick, grid, mousePosition, setMousePosition, setCanAddObjects }) => {

    const [mouseRight] = disable();

    return (
        <Canvas 
        onClick = {onClick}
        onContextMenu = {mouseRight}
        camera = {
            {
                fov: 45,
                position: [0, 2, -10]
            }
        } >
            <OrbitControls />
            <ambientLight intensity={1} />
            
            <Physics gravity = {[0, -30, 0]} >

                <gridHelper 
                args={[grid[0], grid[1]]}/>

                <Ground 
                    mousePosition={mousePosition}
                    setCanAddObjects={setCanAddObjects}
                    setMousePosition={setMousePosition} 
                    args={[grid[0], grid[1]]} />

                <SelectObject />
            </Physics>
            
        </Canvas>
  )
}

export default EditorCanvas