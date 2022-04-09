import React, {useEffect, useState, useContext} from 'react';
import Read from '../crud/read';
import {StoreContext} from './store';
import Enemy from './enemy';

const Content = () => {

    const [store, setStore] = useContext(StoreContext);

    const [content, setContent] = useState({
        title: null,
        describe: null,
        enemyAllowed: null,
        enemyFound: null,
        content: null,
        isContent: false
    });

    const [coord, setCoord] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        if(store.x !== coord.x || store.y !== coord.y){

            setCoord(coord => ({
                ...coord,
                x: store.x,
                y: store.y
            }))

        }
        
    }, useContext(StoreContext));

    useEffect(()=>{
        
        let url = `http://localhost:1234/getAdventure?x=${coord.x}&y=${coord.y}`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.adventure.length > 0) {
                    setContent(content => ({
                        ...content,
                        title: items.adventure[0].title,
                        describe: items.adventure[0].describe,
                        enemyFound: items.enemies,
                        enemyAllowed: items.adventure[0].enemy,
                        content: JSON.parse(items.adventure[0].content),
                        isContent: items.content
                    }));
                    setStore(store => ({
                        ...store,
                        doors: {
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

            return () => mounted = false;
    }, [coord])

    /**
     
     <div className='content container'>
            
            <h1>
                {
                    (content.content) ? content.title : 'unknown'
                }
            </h1>
        
            <div id="adventure">

                {
                    <p className = {
                        `main_text ${(content.enemyFound && content.enemyAllowed) ? 'hide' : ''}`
                    } >
                        <img className='cr' src='assets/images/fantasy_gui_png/frame_02_03.png' />
                        <img className='cl' src='assets/images/fantasy_gui_png/frame_02_04.png' />
                        <img className='ctl' src='assets/images/fantasy_gui_png/frame_02_03.png' />
                        <img className='ctr' src='assets/images/fantasy_gui_png/frame_02_04.png' />
                        {content.describe}
                    </p>
                }
                
                

            </div>

            
    
        </div>
     */

    if(content.isContent){
        console.log(store);
    }

    return (
        <>
        {
            (content.content && content.enemyFound && content.enemyAllowed) ? 
                    
            <Enemy /> : <> </>
        }

        <div className='container_3d'>
            <div className='scen'>
                <div className='floor firstFloor'></div>
                <div className='floor roof'></div>
                <div className='position wallOutside outside_B back'></div>
                
                <div className='position wallOutside outside_B left'></div>

                {
                    (content.isContent && content.content.doors.left) ? 
                    <div className='position wallOutside outside_B leftPanel'></div> : ''
                }

                {
                    (content.isContent && content.content.doors.front) ? 
                    <div className='position wallOutside outside_B leftBPanel'></div> : ''
                }
                
                <div className='position wallOutside outside_B right'></div>

                {
                    (content.isContent && content.content.doors.right) ? 
                    <div className='position wallOutside outside_B rightPanel'></div> : ''
                }
                
                {
                    (content.isContent && content.content.doors.front) ? 
                    <div className='position wallOutside outside_B rightBPanel'></div> : ''
                }
                
                <div className = {
                        `position wallOutside outside_L 
                        ${
                            (content.isContent && content.content.doors.left) ? 'doorSide' : ''
                        }
                        `}>
                </div>
                <div className = {
                        `position wallOutside outside_R 
                        ${
                            (content.isContent && content.content.doors.right) ? 'doorSide' : ''
                        }
                        `}>  
                </div>
                <div className = {
                        `position wallOutside outside_B 
                        ${
                            (content.isContent && content.content.doors.front) ? 'door' : ''
                        }
                        `}>
                </div>
                
            </div>
        </div>

        </>
    )
}

export default Content;