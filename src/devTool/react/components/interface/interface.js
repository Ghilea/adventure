import React, {useEffect, useState} from 'react';
import { SaveLevel } from '@devComp/interface/saveLevel';
import { Exit } from '@devComp/interface/exit';
import { CategoryGround } from '@devComp/interface/categoryGround';
import { CategoryWall } from '@devComp/interface/categoryWall';
import { CategoryPlayer } from '@devComp/interface/categoryPlayer';

export const Interface = () => {

    const [category, setCategory] = useState('ground');
    const [gui, setGui] = useState();

    const handleMouseClick = (event) => {
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    useEffect(() => {
        switch (category) {
            case 'ground':
                setGui(<CategoryGround />);
                break;
            case 'wall':
                setGui(<CategoryWall />);
                break;
            case 'character':
                setGui(<CategoryPlayer />);
                break;        
            default:
                break;
        }
    }, [category])

    return (
        <div className="editorInterface" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <div className='miniBtn'>Ground</div>
            {gui}
            
            <SaveLevel />
            <Exit />
        </div>
    )
}