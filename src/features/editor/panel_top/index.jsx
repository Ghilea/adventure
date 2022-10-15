import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import { build, ground } from '@store/editor'
import './index.scss';

//images
import img_save from '@assets/images/svg/save_icon.svg';
import img_exit from '@assets/images/svg/exit_icon.svg';
import img_remove from '@assets/images/svg/eraser_icon.svg';
import img_rotate from '@assets/images/svg/side_rotate_icon.svg';

const TopPanel = () => {

    const navigate = useNavigate();

    const [showButtons, setShowButtons] = useState();
    const [mouseRight] = disable();
    
    const storeBuild = build(state => state);
    const storeGround = ground(state => state);

    const handleExit = () => {
        navigate('/menu');
    }

    const handleSave = () => {

        console.log({
            'walls': storeBuild.object,
            'ground': [storeGround.x, storeGround.y, storeGround.texture],
            'player': storeBuild.object
        })

        /*const url = 'createLevel';

        Create(url, {
            content: JSON.stringify({
                'walls': storeBuild.walls,
                'ground': [storeGround.x, storeGround.y, storeGround.texture],
                'player': storePlayer.playerMark
            })
        });*/
    }

    const handleRemove = () => {
        //store.isRemove(true);
        console.log('selected: ', storeBuild.selected)
        storeBuild.removeObject(storeBuild.selected)
        storeBuild.selectedObject(null)
    }

    const handleRotate = () => {
        console.log('selected: ', storeBuild.object)
        storeBuild.updateRotationObject(storeBuild.selected, -155)
    }

    useEffect(() => {
        console.log(storeBuild.selected)
        if (storeBuild.selected !== null) {
            setShowButtons(
                <>
                    <Button 
                        alt='remove'
                        img={img_remove} 
                        className='topBtn' 
                        onClick={handleRemove}/>

                    <Button 
                        alt='rotate left'
                        img={img_rotate}
                        className='topBtn'
                        imgClassName='rotateLeftBtn' 
                        onClick={handleRotate}/>

                    <Button
                        alt='rotate right'
                        img={img_rotate}
                        className='topBtn'
                        onClick={handleRotate} />
                </>
            )
        }else{
            setShowButtons()
        }
    }, [storeBuild.selected])

    return (
        <div 
            className="topPanel" 
            onContextMenu={mouseRight}>
            
            <Button 
                alt='save'
                img={img_save} 
                className='topBtn' 
                onClick={handleSave}/>

            {showButtons}
            
            <Button 
                alt='exit'
                img={img_exit} 
                className='topBtn'
                onClick={handleExit} />
            
        </div>
    )
}

export default TopPanel