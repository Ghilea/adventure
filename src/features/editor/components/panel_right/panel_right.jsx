import React, {useEffect, useState} from 'react';
import BuildPanel from '@editor/panel_build/panel_build';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import './panel_right.scss';

//images
import img_wall from '@assets/images/icons/walls.png';
import img_ground from '@assets/images/icons/ground.png';
import img_object from '@assets/images/icons/objects.png';
import img_character from '@assets/images/icons/characters.png';
import img_setting from '@assets/images/svg/settings.svg';

const RightPanel = () => {

    const [openBuildPanel, setOpenBuildPanel] = useState({
        open: false,
        title: null,
        class: null
    });
    const [mouseRight] = disable();

    const handleClick = (e) => {
        console.log(e.target.id)
        setOpenBuildPanel({
            open: true,
            title: e.target.id,
            class: e.target.id
        })
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
                    type='character' 
                    img={img_character} 
                    className='categoryBtn'
                    onClick={handleClick} />
                
                <Button 
                    type='wall' 
                    img={img_wall} 
                    className='categoryBtn'
                    onClick={handleClick} />
                
                <Button 
                    type='object'
                    img={img_object} 
                    className='categoryBtn'
                    onClick={handleClick} />
                
                <Button
                    type='setting' 
                    img={img_setting} 
                    className='categoryBtn settingsPanelBtn'
                    onClick={handleClick} />
            </div>
            
            <BuildPanel type={openBuildPanel} />
        </>
        
    )
}

export default RightPanel