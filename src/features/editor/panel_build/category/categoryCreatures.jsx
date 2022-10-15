import React from "react";
import { interfaceButtons, build } from '@store/editor';
import BuildButton from '@editor/build_button';

const CategoryCreatures = () => {
    
    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Player</h2>
                <div className='buildPanelButton'>
                    <BuildButton type='player' />
                </div>
            </div>
            <div className='container'>
                <h2>Monster</h2>
                <div className='buildPanelButton'>
                    <BuildButton type='swamp_monster' />
                </div>
            </div>
        </div>
    )
}

export default CategoryCreatures