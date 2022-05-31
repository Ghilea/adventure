import React, { useEffect, useState } from 'react';
import Interface from '@comp/interface/Interface';
import { RenderCanvas, RenderBg } from '@comp/map/canvas';
import { menu } from '@comp/store'
import { Menu } from '@comp/menu/menu';
import { Loading } from '@comp/menu/loading'

export const App = () => {

    const storeMenu = menu(state => state);

    return (
        <>  
            {                    
                (!storeMenu.loginSuccess) ?
                    <>
                        {
                            (!storeMenu.loadingDone) ? <Loading loadTime = {3000} /> : <></>
                        }

                        <RenderBg />
                        <Menu />
                    </>
                :
                    <>
                        {
                            (!storeMenu.loadingDone) ? <Loading loadTime = {1000} /> : <></>
                        }

                        <Interface />
                        <RenderCanvas />
                    </>
            }
        </>        
    )
}