import React, {useEffect, useState, useContext} from 'react';
import Read from '../crud/read';
import {StoreContext} from './store';
import Enemy from './enemy';
import useSound from 'use-sound';

const Content = () => {

    const [store, setStore] = useContext(StoreContext);

    const [play, {
        stop
    }] = useSound('assets/effects/enemies.mp3');

    const [content, setContent] = useState({
        title: null,
        describe: null,
        enemyAllowed: null,
        enemyFound: null,
        content: false
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
                        content: items.content
                    }));
                }else{
                    setContent(content => ({
                        ...content,
                        content: false
                    }));
                }
            })

            return () => mounted = false;
    }, [coord])

    let bgStyle = {
        backgroundImage: (content.content) ? 
            `url(assets/images/bg/${((/\s+/g).test(content.title)) ? 
                content.title.replace(/\s+/g, '_') + '.jpg' 
                : content.title + '.jpg'}` 
            : ''
    }
    
    if (content.content && content.enemyFound && content.enemyAllowed) {
        play
    }

    return (
        <>
        
        <div style={bgStyle} className='bgWrapper'></div>

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
                
                {
                    (content.content && content.enemyFound && content.enemyAllowed) ? 
                    
                    <Enemy /> : <> </>
                }

            </div>

            
    
        </div>
        </>
    )
}

export default Content;