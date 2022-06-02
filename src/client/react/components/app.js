import React, { Suspense, useEffect, useState } from 'react';
import Interface from '@comp/interface/Interface';
import { CanvasLevel, CanvasMenu } from '@comp/map/canvas';
import { menu } from '@comp/store'
import { Menu } from '@comp/menu/menu';
import { MapEditor } from '@devComp/map/editor';
import { Loader } from '@comp/menu/loader';

export const App = () => {

    const storeMenu = menu(state => state);

    useEffect(() => {
        
    }, []);

    return (
        <>  
            {                    
                (!storeMenu.loginSuccess) ?
                    <>
                        {
                            (storeMenu.mapEditor) ?
                                <MapEditor /> :
                                <>
                                    <CanvasMenu />
                                    {
                                        (storeMenu.loadingDone) ? 
                                        <Menu /> : <></>
                                    }
                                    
                                </>
                        }
                        
                    </>
                :
                    <>
                        <CanvasLevel />
                        <Interface />
                    </>
            }
        </>        
    )
}