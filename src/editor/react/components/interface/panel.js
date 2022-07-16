import React, {useEffect, useState} from 'react';
import { ExitBtn, SaveLevelBtn, WallBtn, CharactersBtn, GroundBtn, RemoveObjectBtn, ObjectsBtn, SelectMap, Settings } from '@devComp/interface/buttons';
import { CategoryGround } from '@devComp/interface/category/categoryGround';
import { CategoryWall } from '@devComp/interface/category/categoryWall';
import { CategoryPlayer } from '@devComp/interface/category/categoryPlayer';
import { CategoryObjects } from '@devComp/interface/category/categoryObjects';
import { CategorySettings } from '@devComp/interface/category/categorySettings';
import { interfaceButtons, build } from '@devComp/store';

export const TopPanel = () => {

    const storeBuild = build(state => state);

    const handleMouseClick = (event) => {
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    return (
        <div className="topPanel" 
        onContextMenu = {
            handleMouseClick
        }
        >
            <SaveLevelBtn />

            {
                (storeBuild.selected !== null) ? 
                    <RemoveObjectBtn />
                :
                    <></>
            }
            
            
            <ExitBtn />
            
        </div>
    )
}

export const CategorySidePanel = () => {

    return (
        <div className='categorySidePanel'>
            <GroundBtn />
            <CharactersBtn />
            <WallBtn />
            <ObjectsBtn />
            <Settings />
        </div>
    )
    
}

export const RightPanel = () => {

    const storeInterface = interfaceButtons(state => state);
    const storeBuild = build(state => state);
    const [gui, setGui] = useState();

    const handleMouseClick = (event) => {
        if (event.type === 'contextmenu') {
            event.preventDefault();
        }
    }

    useEffect(() => {
        storeInterface.btn(false, null)
        storeBuild.activeBuild([]);
        storeBuild.changeRaySize(1, 1, false);

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
            case 'objects':
                setGui(<CategoryObjects />)
                break;
            case 'settings':
                setGui(<CategorySettings />)
        }
    }, [storeInterface.categoryBtn])

    return (
        <>
            {
                (storeInterface.categoryBtn !== null) ?
                    <div className="rightPanel" onContextMenu = {handleMouseClick}>
                        {gui}
                    </div>
                :
                    <></>
            }
        
        </>
    )
}