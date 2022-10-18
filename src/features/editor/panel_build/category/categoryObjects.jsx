import React from "react";
import BuildButton from '@editor/build_button';

const CategoryObjects = () => {
  
    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Boulders</h2>
                <div className= 'buildPanelButton' >
                    <BuildButton type='rock_1' size={[1, 1, 0]} rotate={0} category='rock' />
                </div>
            </div>

            <div className='container'>
                <h2>Misc</h2>
                <div className= 'buildPanelButton' >
                    <BuildButton type='torch' size={[1, 1, 0]} rotate={0} category='torch' />
                </div>
            </div>
        </div>
    )
}

export default CategoryObjects