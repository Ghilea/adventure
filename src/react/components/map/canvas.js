import React, {useEffect, useState, useContext} from 'react';
import Read from '../crud/read';
import {StoreContext} from '../store';
import Enemy from './enemy';
import RenderMap from './renderMap';

const Canvas = () => {

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

    useEffect(()=>{
        
        let url = `http://localhost:3000/getAdventure?x=${store.coords.x}&y=${store.coords.y}`;
        let url_quest = `http://localhost:3000/getQuest?x=${store.coords.x}&y=${store.coords.y}`;

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

        Read(url_quest)
            .then(items => {

                if (items.quest.length > 0) {
                    setQuest(quest => ({
                        ...quest,
                        title: items.quest[0].title,
                        describe: items.quest[0].describe
                    }));
                    setStore(store => ({
                        ...store,
                        quest: {
                            ...store.quest,
                            showQuest: true
                        }
                    }))
                } 
            })

    }, [store.coords])

    return (
        <>
  
        {
            (store.map.walking) ? <div className='overlay-black'></div> : <></>
        }
        
        {
            (store.quest.showQuest) ?
                <div className = 'questContainer fadeOut' >
                    <h1 > 
                        {
                            (content.content) ? quest.title : 'unknown'
                        } 
                    </h1>

                    {
                        <div className = 'main_text' > 
                            {
                                quest.describe
                            } 
                        </div>
                    } 
                </div> : <></>
        } 
  
        <div className='container_3d'>
                        
            <div className='viewport'>

                <div 
                className = 'camera'
                style = {
                    {
                        transform: `matrix3d(${store.mouse.m1}, 0, ${store.mouse.m2}, 0, ${store.mouse.m3}, ${store.mouse.m4}, ${store.mouse.m5}, 0, ${store.mouse.m6}, ${store.mouse.m7}, ${store.mouse.m8}, 0, 0, 0, 0, 1) rotateX(${store.mouse.x}deg) rotateY(${store.mouse.y}deg) rotateZ(${store.rotate.z}deg) translate3d(${store.movement.x}px, ${store.movement.y}px, ${store.movement.z}px)`
                    }
                }
                >
                    
                    <RenderMap />

                    {
                        (content.isContent && content.enemyFound && content.enemyAllowed) ?
                        
                        <Enemy /> : <> </>
                    }
                    
                </div>

            </div>
        </div>

        </>
    )
}

export default Canvas;