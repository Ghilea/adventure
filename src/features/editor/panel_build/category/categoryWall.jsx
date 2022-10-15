import React from "react";
import { build, interfaceButtons } from '@store/editor';
import BuildButton from '@editor/build_button';

const CategoryWall = () => {

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Walls</h2>
                <div className='buildPanelButton' >
                    <BuildButton type='wall_1' size={[5, 1]} />
                </div>
            </div>
        </div>
    )
}

export default CategoryWall