import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Ground from '@comp/ground';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei'
import disable from '@hooks/disable-click';
import { useKey } from 'rooks';
import { useAddObject } from '@editor/components/addObject';
import TopPanel from '../panel_top';
import RightPanel from '../panel_right';
import { build } from '@store/editor';
import GroundCheck from '@editor/components/groundCheck';
import SelectObject from '@editor/components/selectObject';
import Loader from '@comp/loading/loader';

const Index = () => {

    //stores
    const store = build(state => state);
    const groundSize = build(state => state.mapSettings.groundSize);
    const isBuild = build(state => state.isBuild);

    const [rotate, setRotate] = useState(0);

    const [handleAddObject] = useAddObject();
    const [mouseRight] = disable();

    useEffect(() => {
        store.setIsEditor(true)
    }, [])

    useEffect(() => {
        if (store.active.length > 0 && store.selected !== null) {
            store.selectedObject(null)
        }
    }, [store.active])

    const keyHandler = () => {

        // 0 = left, 180 = down, -180 = up, 360 = right
        switch (isBuild.objectSize.rotate) {
            case 0:
                store.setRotate(-180)
                break;
            case -180:
                store.setRotate(360)
                break;
            case 360:
                store.setRotate(180)
                break;
            case 180:
                store.setRotate(0)
                break;
        }

        store.switchObjectSize(isBuild.objectSize.z, isBuild.objectSize.x)
        setRotate((Math.PI * (isBuild.objectSize.rotate / 360)))
    }

    useKey(['Control'], keyHandler);

    const pointerMove = (e) => {
        store.setMousePosition(e.point.x, e.point.y, e.point.z)
    }

    return (
        <>
            <TopPanel />
            <RightPanel />
            <Canvas
                className='bg-black'
                onClick={(e) => handleAddObject(e)}
                onContextMenu={mouseRight}
                camera={
                    {
                        fov: 45,
                        position: [0, 2, -10]
                    }
                } >

                <OrbitControls />
                <ambientLight intensity={1} />

                <Physics gravity={[0, -30, 0]} >

                    <Suspense fallback={<Loader />}>
                        <gridHelper args={[groundSize, groundSize]} />

                        <Ground onPointerMove={pointerMove} size={groundSize} />

                        <GroundCheck />

                        <SelectObject />
                    </Suspense>

                </Physics>

            </Canvas>
        </>
    )
}

export default Index