import React from 'react'
import { useKey } from 'rooks';
import { build } from '@store/editor';

const Hotkeys = () => {
    const storeBuild = build(state => state);

    const keyHandler = () => {
        console.log('rotate')
        if (storeBuild.rotate) {
            storeBuild.changeRaySize(storeBuild.sizeY, storeBuild.sizeX, false)
        } else {
            storeBuild.changeRaySize(storeBuild.sizeY, storeBuild.sizeX, true)
        }
    }

    useKey(['Control'], keyHandler);

    return (
        null
    )
}

export default Hotkeys