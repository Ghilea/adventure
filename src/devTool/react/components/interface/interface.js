import React from 'react';
import { SaveLevel } from '@devComp/interface/saveLevel';
import { Exit } from '@devComp/interface/exit';
import { CategoryGround } from '@devComp/interface/categoryGround';
import { CategoryWall } from '@devComp/interface/categoryWall';
import { CategoryPlayer } from '@devComp/interface/categoryPlayer';

export const Interface = () => {

    const handleMouseClick = (event) => {
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    return (
        <div className="editorInterface" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <CategoryGround />
            <CategoryWall />
            <CategoryPlayer />
            <SaveLevel />
            <Exit />
        </div>
    )
}