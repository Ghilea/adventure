import React from "react";
import BuildButton from '@editor/components/build_button';
import { build } from '@store/editor';

const CategoryWall = () => {

    const rotation = build(state => state.isBuild.objectSize.rotate);

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Walls</h2>
                <div className='buildPanelButton' >
                    <BuildButton type='wall_1' size={rotation === 360 || rotation === 0 ? [5, 1, 0] : [1, 5, 0]} category='wall' isSolid={true} />
                </div>
            </div>
        </div>
    )
}

export default CategoryWall