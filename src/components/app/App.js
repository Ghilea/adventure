import React, { useEffect, useState } from 'react';
import Interface from '@comp/interface/Interface';
import { CanvasLevel, CanvasMenu } from '@comp/canvas/Canvas';
import { menu } from '@comp/store'
import { Menu } from '@comp/menu/Menu';
import { MapEditor } from '@editor/MapEditor';
import './reset.scss';
import './misc.scss';
import './scrollbar.scss';

export const App = () => {

    const storeMenu = menu(state => state);

    const [arr, setArr] = useState([]);

    useEffect(()=> {
        if (storeMenu.mapEditor) {
            setArr([<MapEditor />])
        }else{
            setArr([<CanvasMenu />]);
        }
    }, [storeMenu.mapEditor])

    useEffect(() => {
        if(storeMenu.loginSuccess){
            setArr([<CanvasLevel />])
            setArr(prevState => [...prevState, <Interface />])
        }
    }, [storeMenu.loginSuccess])

    useEffect(() => {
        if (storeMenu.loadingDone){
            setArr(prevState => [...prevState, <Menu />])
        }  
    }, [storeMenu.loadingDone])

    return (
        <>
            {
                arr.map((item, index) => {
                    return <React.Fragment key={item+index}>{item}</React.Fragment>;
                })
            }
        </>  
    )
}