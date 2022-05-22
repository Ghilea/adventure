import React from 'react';
import { SaveLevel } from './saveLevel';
import { CategoryGround } from './categoryGround';
import { CategoryWall } from './categoryWall';

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
            <SaveLevel />
        </div>
    )
}