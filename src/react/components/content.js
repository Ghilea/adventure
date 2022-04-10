import React, {useEffect, useState, useContext} from 'react';
import Read from '../crud/read';
import {StoreContext} from './store';
import Enemy from './enemy';

const Content = () => {

    const [store, setStore] = useContext(StoreContext);

    const [content, setContent] = useState({
        enemyAllowed: null,
        enemyFound: null,
        content: null,
        isContent: false
    });

    const [quest, setQuest] = useState({
        title: null,
        describe: null
    });


    const [coord, setCoord] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        if(store.coords.x !== coord.x || store.coords.y !== coord.y){

            setCoord(coord => ({
                ...coord,
                x: store.coords.x,
                y: store.coords.y
            }))

        }
        
    }, useContext(StoreContext));

    useEffect(()=>{
        
        let url = `http://localhost:1234/getAdventure?x=${coord.x}&y=${coord.y}`;
        let url_quest = `http://localhost:1234/getQuest?x=${coord.x}&y=${coord.y}`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.adventure.length > 0) {
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

        Read(url_quest)
            .then(items => {

                if (mounted && items.quest.length > 0) {
                    setQuest(quest => ({
                        ...quest,
                        title: items.quest[0].title,
                        describe: items.quest[0].describe
                    }));
                    setStore(store => ({
                        ...store,
                        showQuest: true
                    }))
                } 
            })

            return () => mounted = false;
    }, [coord])

    return (
        <>

        <div className={`questContainer ${(store.quest.showQuest) ? 'fadeOut' : ''}`}>
            <h1>
            {
                (content.content) ? quest.title: 'unknown'
            }
            </h1>

            {
                <div className = 'main_text'>
                    {
                        quest.describe
                    }
                </div>
            }
        </div>
        
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