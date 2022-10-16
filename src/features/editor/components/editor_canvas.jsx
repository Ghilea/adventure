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

const EditorCanvas = ({ onClick, setCanAddObjects }) => {

    const level = build(state => state.level);
    const groundSize = build(state => state.mapSettings.groundSize);

    const [mouseRight] = disable();
    
    const [content, setContent] = useState([]);

    /* useEffect(() => {

        if (level !== null) {

            level.walls.map((use, index) => {

                setContent((state) => ([
                    ...state,
                    <Wall_1 key={'wall' + index}
                        position={use.pos}
                        rotation={use.rotate}
                        type={use.type}
                    />
                ]))
            })  

            setCreateplayer(() => (
                <Player position={level.player} />
            )) 
        }
        

    }, [level]) */

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
                    args={[groundSize, groundSize]}/>

                <Ground 
                    setCanAddObjects={setCanAddObjects}
                    args={[groundSize, groundSize]}/>

                <SelectObject />
            </Physics>
            
        </Canvas>
  )
}

export default EditorCanvas