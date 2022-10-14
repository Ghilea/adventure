import React, {useEffect, useState} from 'react';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import CategoryGround from '@editor/panel_build/category/categoryGround'
import Category from '../panel_build/panel_build';
import './index.scss';
import './panel_build.scss';

//images
import img_wall from '@assets/images/icons/walls.png';
import img_ground from '@assets/images/icons/ground.png';
import img_object from '@assets/images/icons/objects.png';
import img_character from '@assets/images/icons/characters.png';
import img_setting from '@assets/images/svg/settings.svg';

const RightPanel = ({setGroundColor}) => {

    const [openBuildPanel, setOpenBuildPanel] = useState({
        type: null,
        content: []
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
                content: [
                    {
                        title: 'Boulders',
                        className: 'objects',
                        object: ['rock_1']
                    },
                    {
                        title: 'Misc',
                        className: 'objects',
                        object: ['torch']
                    }
                ]
            })
        } else {
            setOpenBuildPanel({
                type: null,
                content: []
            })
        }
    }

    const handleClick = (e) => {

        const target = e.target.attributes.category.value;
        
        switch (target) {
            case 'wall':
                
                break;
        
            default:
                break;
        }
        if (target !== openBuildPanel.type) {
            setOpenBuildPanel({
                type: target,
                content: [
                    {
                        title: 'Walls',
                        className: 'walls',
                        object: ['wall_1']
                    }
                ]
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
                content: [
                    {
                        title: 'Player',
                        className: 'player',
                        object: ['player']
                    }
                ]
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
                    onClick={handleClick}
                     />
                
                <Button 
                    type='wall' 
                    img={img_wall} 
                    className='categoryBtn'
                    onClick={handleClick}
                     />
                
                <Button 
                    type='object'
                    img={img_object} 
                    className='categoryBtn'
                    onClick={handleClick}
                    />
                
                <Button
                    type='setting' 
                    img={img_setting} 
                    className='categoryBtn settingsPanelBtn'
                    onClick={handleSettings}
                     />
            </div>
            
            <div className='buildPanel'>
                {openBuildPanel.content.map((item, index) => {
                return <Category 
                key={item.title + index}
                title={item.title} 
                className={item.className} 
                object={item.object}/>
            })}
            </div>
        </>
        
    )
}

export default RightPanel