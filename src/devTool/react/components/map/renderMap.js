import React, {useEffect, useState, useContext} from 'react';
import {StoreContext} from '../store';

const RenderMap = () => {

    const [store, setStore] = useContext(StoreContext);
    
    return (
        <>       

            <div className = {
                    `texture wall_left 
                    ${
                        (store.doors.left) ? 'doorSide' : ''
                    }
                    `}>
            </div>
            <div className = {
                    `texture wall_right 
                    ${
                        (store.doors.right) ? 'doorSide' : ''
                    }
                    `}>  
            </div>
            <div className = {
                    `texture wall_front 
                    ${
                        (store.doors.front) ? 'doorFront' : ''
                    }
                    `}>
            </div>
    
            <div className='floor'></div>
            <div className='roof'></div>

            {
                (store.doors.left) ?
                <>
                    <div className='texture leftPanel'></div>
                    <div className='texture leftWallRoom'></div> 
                </> : ''
            }
            {
                (store.doors.right) ?
                <>
                    <div className='texture rightPanel'></div>
                    <div className='texture rightWallRoom'></div> 
                </> : ''
            }
            {
                (store.doors.front) ?
                <>
                    <div className='texture leftBPanel'></div>
                    <div className='texture rightBPanel'></div> 
                </> : ''
            }
      
        </>
    )
}

export default RenderMap;