import React from "react";
import BuildButton from '@editor/components/build_button';

const CategoryWall = () => {

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Walls</h2>
                <div className='buildPanelButton' >
                    <BuildButton type='wall_1' size={[5, 1, 0]} rotate={0} category='wall' isSolid={true} />
                </div>
            </div>
        </div>
    )
}

export default CategoryWall