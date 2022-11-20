import React, { useEffect, useState } from 'react';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import CategoryGround from '../panel_build/category/ground/categoryGround';
import CategoryCreatures from '../panel_build/category/categoryCreatures';
import CategoryObjects from '../panel_build/category/categoryObjects';
import CategorySettings from '../panel_build/category/categorySettings';
import CategoryWall from '../panel_build/category/categoryWall';
import './index.scss';
import './panel_build.scss';

//images
import img_wall from '@assets/images/icons/walls.png';
import img_ground from '@assets/images/icons/ground.png';
import img_object from '@assets/images/icons/objects.png';
import img_character from '@assets/images/icons/characters.png';
import img_setting from '@assets/images/svg/settings.svg';

const RightPanel = () => {

    const [openBuildPanel, setOpenBuildPanel] = useState({
        type: null,
        content: []
    });
    const [mouseRight] = disable();

    const handleClick = (e) => {

        const target = e.target.attributes.category.value;

        if (target === openBuildPanel.type) {
            setOpenBuildPanel({
                type: null,
                content: null
            })
            return;
        }

        switch (target) {
            case 'ground':
                setOpenBuildPanel({
                    type: 'ground',
                    content: <CategoryGround />
                })
                break;
            case 'object':
                setOpenBuildPanel({
                    type: 'object',
                    content: <CategoryObjects />
                })
                break;
            case 'wall':
                setOpenBuildPanel({
                    type: 'wall',
                    content: <CategoryWall />
                })
                break;
            case 'creature':
                setOpenBuildPanel({
                    type: 'creature',
                    content: <CategoryCreatures />
                })
                break;
            case 'setting':
                setOpenBuildPanel({
                    type: 'setting',
                    content: <CategorySettings />
                })
                break;
        }
    }

    return (
        <>
            <div className='menuSidePanel' onContextMenu={mouseRight} >
                <Button
                    type='ground'
                    img={img_ground}
                    className='categoryBtn'
                    onClick={handleClick} />

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
                    onClick={handleClick}
                />
            </div>

            {openBuildPanel.type === null || openBuildPanel.content}
        </>

    )
}

export default RightPanel