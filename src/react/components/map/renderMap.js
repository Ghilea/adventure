import React, {useEffect, useState, useContext} from 'react';
import Read from '../crud/read';
import {StoreContext} from '../store';

const RenderMap = () => {

    const [store, setStore] = useContext(StoreContext);

    const [content, setContent] = useState({
        enemyAllowed: null,
        enemyFound: null,
        content: null,
        isContent: false
    });

    useEffect(()=>{
        
        let url = `http://localhost:3000/getAdventure?x=${store.coords.x}&y=${store.coords.y}`;
    
        Read(url)
            .then(items => {

                if (items.adventure.length > 0) {
                    setContent(content => ({
                        ...content,
                        enemyFound: items.enemies,
                        enemyAllowed: items.adventure[0].enemy,
                        content: JSON.parse(items.adventure[0].content),
                        isContent: items.content
                    }));
                    setStore(store => ({
                        ...store,
                        doors: {
                            ...store.doors,
                            left: JSON.parse(items.adventure[0].content).doors.left,
                            right: JSON.parse(items.adventure[0].content).doors.right,
                            front: JSON.parse(items.adventure[0].content).doors.front,
                            back: JSON.parse(items.adventure[0].content).doors.back
                        }
                    }))
                }else{
                    setContent(content => ({
                        ...content,
                        isContent: false
                    }));
                }
            })

    }, [store.coords])
    
    return (
        <>       
    
            <div className='floor'></div>
            <div className='roof'></div>
            <div className='texture back'></div>
            
            <div className='texture left'></div>

            {
                (content.isContent && content.content.doors.left) ? 
                <div className='texture outside_B leftPanel'></div> : ''
            }

            {
                (content.isContent && content.content.doors.front) ? 
                <div className='texture outside_B leftBPanel'></div> : ''
            }
            
            <div className='texture outside_B right'></div>

            {
                (content.isContent && content.content.doors.right) ? 
                <div className='texture outside_B rightPanel'></div> : ''
            }
            
            {
                (content.isContent && content.content.doors.front) ? 
                <div className='texture outside_B rightBPanel'></div> : ''
            }
            
            <div className = {
                    `texture outside_L 
                    ${
                        (content.isContent && content.content.doors.left) ? 'doorSide' : ''
                    }
                    `}>
            </div>
            <div className = {
                    `texture outside_R 
                    ${
                        (content.isContent && content.content.doors.right) ? 'doorSide' : ''
                    }
                    `}>  
            </div>
            <div className = {
                    `texture outside_B 
                    ${
                        (content.isContent && content.content.doors.front) ? 'door' : ''
                    }
                    `}>
            </div>
                    
        </>
    )
}

export default RenderMap;