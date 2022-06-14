import React, {useEffect, useState} from 'react';
import { ExitBtn, SaveLevelBtn, WallBtn, CharactersBtn, GroundBtn } from '@devComp/interface/buttons';
import { CategoryGround } from '@devComp/interface/category/categoryGround';
import { CategoryWall } from '@devComp/interface/category/categoryWall';
import { CategoryPlayer } from '@devComp/interface/category/categoryPlayer';
import { interfaceButtons } from '@devComp/store';

export const Interface = () => {

    const storeInterface = interfaceButtons(state => state);
    const [gui, setGui] = useState();

    const handleMouseClick = (event) => {
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    useEffect(() => {
        console.log(storeInterface.categoryBtn);
        switch (storeInterface.categoryBtn) {
            case 'ground':
                setGui(<CategoryGround />);
                break;
            case 'walls':
                setGui(<CategoryWall />);
                break;
            case 'characters':
                setGui(<CategoryPlayer />);
                break;
        }
    }, [storeInterface.categoryBtn])

    return (
        <div className="editorInterface" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <div className='categorySidePanel'>
                <GroundBtn />
                <CharactersBtn />
                <WallBtn />
                <SaveLevelBtn />
                <ExitBtn />
            </div>
            
            {gui}
            
        </div>
    )
}