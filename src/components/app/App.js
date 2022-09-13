import React, { useEffect, useState } from 'react';
import Interface from '@comp/interface/Interface';
import { CanvasLevel, CanvasMenu } from '@comp/map/canvas';
import { menu } from '@comp/store'
import { Menu } from '@comp/menu/menu';
import { MapEditor } from '@editor/MapEditor';
import './reset.scss';
import './misc.scss';
import './scrollbar.scss';

export const App = () => {

    const storeMenu = menu(state => state);

    const [arr, setArr] = useState([]);

    useEffect(()=> {
 
        //character not selected (login)
        if (!storeMenu.loginSuccess) {

            //<CanvasLevel />
            //<Interface />

            //mapEditor selected or not
            if (storeMenu.mapEditor) {
                setArr([<MapEditor />])
            }else{
                setArr([<CanvasMenu />]);
            }
        }

    }, [])

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