import React, {useEffect, useState, useContext} from 'react';
import Read from '../crud/read';
import {StoreContext} from '../store';
import CameraMovement from '../player/cameraMovement';
import Enemy from './enemy';
import RenderMap from './renderMap';
import PlayerMovement from '../player/playerMovement';

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

    useEffect(() => {
        console.log(store.mouse.x, store.mouse.y);
    }, [store.mouse])

    useEffect(()=>{
        console.log(store.movement.z);
    }, [store.movement])
    /*
    
    {
        (store.quest.showQuest) ?
        <
        div className = 'questContainer fadeOut' >
            <
            h1 > {
                (content.content) ? quest.title : 'unknown'
            } <
            /h1>

        {
            <
            div className = 'main_text' > {
                    quest.describe
                } <
                /div>
        } <
        /div> :
        <
        > < />
    } {
        (content.content && content.enemyFound && content.enemyAllowed) ?

        <
        Enemy / >: < > < />
    }
    
    */
    return (
        <>

        <PlayerMovement />

        {
            (store.map.walking !== null) ? <div className='overlay-black'></div> : <></>
        }
        
        <div className='container_3d'>
                        
            <div className='viewport'>

                <div 
                className = 'camera'
                style = {
                    {
                        transform: `rotateX(${store.mouse.x}deg) rotateY(${store.mouse.y}deg) translate3d(${store.movement.x}px, ${store.movement.y}px, ${store.movement.z}px)`
                    }
                }
                >
                    
                    <RenderMap />
                    
                </div>

            </div>
        </div>

        </>
    )
}

export default Content;