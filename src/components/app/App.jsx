import React, { useEffect, useState } from 'react';
import Interface from '@comp/interface/Interface';
import { CanvasLevel, CanvasMenu } from '@comp/canvas/Canvas';
import { menu } from '@comp/store'
import { MapEditor } from '@editor/MapEditor';
import './Reset.scss';
import './Misc.scss';
import './Scrollbar.scss';

export const App = () => {

    const storeMenu = menu(state => state);

    const [content, setContent] = useState([]);

    useEffect(() => {
        switch (storeMenu.activeContent) {
            case 'editor':
                setContent([<MapEditor />])
                break;
            case 'menu':
                setContent([<CanvasMenu />]);
                break;
            case 'login':
                setContent([<CanvasLevel />, <Interface />])
                break;
        }
    }, [storeMenu.activeContent])

    useEffect(() => {
        if (storeMenu.loadingDone){
            storeMenu.activateContent('menu')
        }  
    }, [storeMenu.loadingDone])

    return (
        <>
            {
                content.map((item, index) => {
                    return <React.Fragment key={item+index}>{item}</React.Fragment>;
                })
            }
        </>  
    )
}