import React, {useEffect, useState} from 'react';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import CategoryGround from '@editor/panel_build/category/categoryGround';
import CategoryObjects from '@editor/panel_build/category/categoryObjects';
import CategoryCreatures from '@editor/panel_build/category/categoryCreatures';
import CategorySettings from '@editor/panel_build/category/categorySettings';
import CategoryWall from '@editor/panel_build/category/categoryWall';
import './panel_right.scss';

//images
import img_wall from '@assets/images/icons/walls.png';
import img_ground from '@assets/images/icons/ground.png';
import img_object from '@assets/images/icons/objects.png';
import img_character from '@assets/images/icons/characters.png';
import img_setting from '@assets/images/svg/settings.svg';

const RightPanel = () => {

    const [openBuildPanel, setOpenBuildPanel] = useState({
        type: null,
        content: null
    });
    const [mouseRight] = disable();

    const handleGround = () => {
      
        if ('ground' !== openBuildPanel.type){
            setOpenBuildPanel({
                type: 'ground',
                content: <CategoryGround />
            })
        }else{
            setOpenBuildPanel({
                type: null,
                content: null
            })
        }
    }

    const handleObjects = () => {

        if ('object' !== openBuildPanel.type) {
            setOpenBuildPanel({
                type: 'object',
                content: <CategoryObjects />
            })
        } else {
            setOpenBuildPanel({
                type: null,
                content: null
            })
        }
    }

    const handleWalls = () => {

        if ('wall' !== openBuildPanel.type) {
            setOpenBuildPanel({
                type: 'wall',
                content: <CategoryWall />
            })
        } else {
            setOpenBuildPanel({
                type: null,
                content: null
            })
        }
    }

    const handleSettings = () => {

        if ('setting' !== openBuildPanel.type) {
            setOpenBuildPanel({
                type: 'setting',
                content: <CategorySettings />
            })
        } else {
            setOpenBuildPanel({
                type: null,
                content: null
            })
        }
    }

    const handleCreatures = () => {

        if ('creature' !== openBuildPanel.type) {
            setOpenBuildPanel({
                type: 'creature',
                content: <CategoryCreatures />
            })
        } else {
            setOpenBuildPanel({
                type: null,
                content: null
            })
        }
    }

    return (
        <>
            <div className='menuSidePanel' onContextMenu={mouseRight} >
                <Button 
                    type='ground' 
                    img={img_ground} 
                    className='categoryBtn' 
                    onClick={handleGround} />

                <Button 
                    type='creature' 
                    img={img_character} 
                    className='categoryBtn'
                    onClick={handleCreatures}
                     />
                
                <Button 
                    type='wall' 
                    img={img_wall} 
                    className='categoryBtn'
                    onClick={handleWalls}
                     />
                
                <Button 
                    type='object'
                    img={img_object} 
                    className='categoryBtn'
                    onClick={handleObjects}
                    />
                
                <Button
                    type='setting' 
                    img={img_setting} 
                    className='categoryBtn settingsPanelBtn'
                    onClick={handleSettings}
                     />
            </div>
            
            {openBuildPanel.content}
        </>
        
    )
}

export default RightPanel