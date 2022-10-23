import React from "react";
import { build } from '@store/editor';
import BuildButton from '@editor/build_button';

const CategoryCreatures = () => {
    
    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Player</h2>
                <div className='buildPanelButton'>
                    <BuildButton type='player' size={[1, 1, 0]} rotate={0} category={'player'}/>
                </div>
            </div>
            <div className='container'>
                <h2>Monster</h2>
                <div className='buildPanelButton'>
                    <BuildButton type='swamp_monster' size={[1, 1, 0]} rotate={0} category={'swamp_monster'} />
                </div>
            </div>
        </div>
    )
}

export default CategoryCreatures