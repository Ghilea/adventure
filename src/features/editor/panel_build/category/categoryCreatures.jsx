import React from "react";
import BuildButton from '@editor/components/build_button';

const CategoryCreatures = () => {
    
    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Player</h2>
                <div className='buildPanelButton'>
                    <BuildButton type='player' size={[1, 1, 0]} category={'player'} isSolid={true}/>
                </div>
            </div>
            <div className='container'>
                <h2>Monster</h2>
                <div className='buildPanelButton'>
                    <BuildButton type='swamp_monster' size={[1, 1, 0]} category={'swamp_monster'} isSolid={true}/>
                </div>
            </div>
        </div>
    )
}

export default CategoryCreatures