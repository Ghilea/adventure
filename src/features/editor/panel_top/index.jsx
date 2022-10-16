import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';
import disable from '@hooks/disable-click';
import { build } from '@store/editor'
import { Create, Update } from '@comp/crud';
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

    const handleExit = () => {
        navigate('/menu');
    }

    const handleSave = () => {

        console.log({
            'id': storeBuild.isBuild.mapSettings.id,
            'ground': storeBuild.isBuild.mapSettings.groundSize,
            'content': storeBuild.isBuild.mapSettings.content,
            'level': storeBuild.isBuild.mapSettings.order,
            'title': storeBuild.isBuild.mapSettings.title
        })

        if (storeBuild.isBuild.mapSettings.id === null) {
            
            Create('createLevel', {
                level: storeBuild.isBuild.mapSettings.order,
                title: storeBuild.isBuild.mapSettings.title,
                content: JSON.stringify({
                    'ground': storeBuild.isBuild.mapSettings.groundSize,
                    'content': storeBuild.isBuild.mapSettings.content
                })
            });

        }else{
            
            Update('updateLevel', {
                id: storeBuild.isBuild.mapSettings.id,
                level: storeBuild.isBuild.mapSettings.order,
                title: storeBuild.isBuild.mapSettings.title,
                content: JSON.stringify({
                    'ground': storeBuild.isBuild.mapSettings.groundSize,
                    'content': storeBuild.isBuild.mapSettings.content
                })
            })
        }
        
    }

    const handleRemove = () => {
        //store.isRemove(true);
        console.log('selected: ', storeBuild.selected)
        storeBuild.removeObject(storeBuild.selected)
        storeBuild.selectedObject(null)
    }

    const handleRotate = () => {
        console.log('selected: ', storeBuild.isBuild.mapSettings.content)
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