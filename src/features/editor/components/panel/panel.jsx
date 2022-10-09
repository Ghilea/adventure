import React, {useEffect, useState} from 'react';
import { ExitBtn, SaveLevelBtn, WallBtn, CharactersBtn, GroundBtn, RemoveObjectBtn, ObjectsBtn, Settings } from '@editor/interface/buttons';
import { CategoryGround } from '@editor/interface/category/categoryGround';
import { CategoryWall } from '@editor/interface/category/categoryWall';
import { CategoryPlayer } from '@editor/interface/category/categoryPlayer';
import { CategoryObjects } from '@editor/interface/category/categoryObjects';
import { CategorySettings } from '@editor/interface/category/categorySettings';
import { interfaceButtons, build } from '@store/editor';
import { RotateObjectBtn } from '../interface/buttons';
import './rightPanel.scss';
import './topPanel.scss';
import './categoryPanel.scss';

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
                    <>
                        <RemoveObjectBtn />
                        <RotateObjectBtn />
                    </>
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