import React from 'react';
import { SaveLevel } from '@comp/interface/saveLevel';
import { CategoryGround } from '@comp/interface/categoryGround';
import { CategoryWall } from '@comp/interface/categoryWall';
import { CategoryPlayer } from '@comp/interface/categoryPlayer';

export const Interface = () => {

    const handleMouseClick = (event) => {
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    return (
        <div className="interface" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <CategoryGround />
            <CategoryWall />
            <CategoryPlayer />
            <SaveLevel />
        </div>
    )
}