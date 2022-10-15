import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Ground } from '@editor/ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import SelectObject from '@editor/select_canvas_object';
import disable from '@hooks/disable-click';
import { build } from '@store/editor';
import { Wall_1 } from '@models/objects/walls/walls';
import Player from '@comp/player/player';

const EditorCanvas = ({ onClick, grid, mousePosition, setMousePosition, setCanAddObjects }) => {

    const storeBuild = build(state => state);

    const [mouseRight] = disable();
    
    const [wall, setWall] = useState([]);
    const [createPlayer, setCreateplayer] = useState();

    useEffect(() => {

        if (storeBuild.level !== null) {
            console.log(storeBuild.level)

             storeBuild.level.walls.map((use, index) => {

                setWall((state) => ([
                    ...state,
                    <Wall_1 key={'wall' + index}
                        position={use.pos}
                        rotation={use.rotate}
                        type={use.type}
                    />
                ]))
            })  

            setCreateplayer(() => (
                <Player position={storeBuild.level.player} />
            )) 
        }
        

    }, [storeBuild.level])

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

                    {wall}

                <SelectObject />
            </Physics>
            
        </Canvas>
  )
}

export default EditorCanvas