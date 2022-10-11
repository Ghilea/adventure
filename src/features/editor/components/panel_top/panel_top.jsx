import React, {useEffect, useState} from 'react';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import './panel_top.scss';

//images
import img_save from '@assets/images/svg/save_icon.svg';
import img_exit from '@assets/images/svg/exit_icon.svg';
import img_remove from '@assets/images/svg/eraser_icon.svg';
import img_rotate from '@assets/images/svg/side_rotate_icon.svg';

const TopPanel = ({selected = false}) => {

    const [showButtons, setShowButtons] = useState();
    const [mouseRight] = disable();

    useEffect(() => {
        if(selected) {
            setShowButtons(
                <>
                    <Button type='remove' img={img_remove} className='topBtn' />
                    <Button type='rotate' img={img_rotate} className='topBtn' />
                </>
            )
        }else{
            setShowButtons()
        }
    }, [selected])

    return (
        <div 
            className="topPanel" 
            onContextMenu={mouseRight}>
            
            <Button type='save' img={img_save} className='topBtn' />

            {showButtons}
            
            <Button type='exit' img={img_exit} className='topBtn' />
            
        </div>
    )
}

export default TopPanel