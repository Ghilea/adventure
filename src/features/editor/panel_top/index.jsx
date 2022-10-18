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
    const [rotate, setRotate] = useState(0);
    
    const storeBuild = build(state => state);
    const mapSettings = build(state => state.mapSettings);

    const handleExit = () => {
        navigate('/menu');
    }

    const handleSave = () => {

        console.log({
            'id': mapSettings.id,
            'ground': mapSettings.groundSize,
            'objects': mapSettings.objects,
            'order': mapSettings.order,
            'title': mapSettings.title,
            'objectIndex': mapSettings.objectIndex
        })

        if (mapSettings.id === undefined) {

            if(mapSettings.title === undefined) return console.log('error title')
            if(mapSettings.objects === undefined) return console.log('error objects')
            
            console.log('create')
            /* Create('createLevel', {
                level: mapSettings.order || 0,
                title: mapSettings.title,
                content: JSON.stringify({
                    'ground': mapSettings.groundSize,
                    'objects': mapSettings.objects
                })
            }); */

            /*
            
            key: {
                isBuild.type
            }
            position: {

            }
            
            */

        }else{
            console.log('update')
            Update('updateLevel', {
                id: mapSettings.id,
                level: mapSettings.order || 0,
                title: mapSettings.title,
                content: JSON.stringify({
                    'objectIndex': mapSettings.objectIndex,
                    'ground': mapSettings.groundSize,
                    'objects': mapSettings.objects
                })
            }) 
        }
        
    }

    const handleRemove = () => {
        storeBuild.removeObject(storeBuild.selected)
        storeBuild.selectedObject(null)
    }

    useEffect(() => {
        console.log('objects', storeBuild.objects)
        console.log('mapObjects', storeBuild.mapSettings.objects)
    }, [storeBuild.objects])

    const handleRotateLeft = () => {
       /*  if (storeBuild.isBuild.objectSize.rotate === 360) {
            storeBuild.setRotate(0)
        } else {
            if (storeBuild.isBuild.objectSize.rotate + 90 === 360) {
                return storeBuild.setRotate(0)
            }

            storeBuild.setRotate(storeBuild.isBuild.objectSize.rotate + 90)
        }

        console.log(rotate, storeBuild.isBuild.objectSize.rotate)
        setRotate((Math.PI * (storeBuild.isBuild.objectSize.rotate / 360))) */
    }

    const handleRotateRight = () => {
        /* if (storeBuild.isBuild.objectSize.rotate === 360) {
            storeBuild.setRotate(0)
        } else {
            if (storeBuild.isBuild.objectSize.rotate + 90 === 360) {
                return storeBuild.setRotate(0)
            }

            storeBuild.setRotate(storeBuild.isBuild.objectSize.rotate + 90)
        }

        console.log(rotate, storeBuild.isBuild.objectSize.rotate)
        setRotate((Math.PI * (storeBuild.isBuild.objectSize.rotate / 360))) */
    }

    useEffect(() => {
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
                        onClick={handleRotateLeft}/>

                    <Button
                        alt='rotate right'
                        img={img_rotate}
                        className='topBtn'
                        onClick={handleRotateRight} />
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