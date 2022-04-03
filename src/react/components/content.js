import React, {useEffect, useState, useContext} from 'react';
import getData from '../crud/get';
import {CoordContext} from './store';
import Enemy from './enemy';
import Portal from  './portal';

const Content = () => {

    let state = {
        title: null, 
        attribute: null, 
        describe: null, 
        enemyAllowed: null,
        enemyFound: null,
        content: null
    };

    const [content, setContent] = useState({
        ...state
    });

    const [coord, setCoord] = useContext(CoordContext);

    useEffect(()=>{
        
        let url = `http://localhost:1234/adventure?x=${coord.x}&y=${coord.y}`;

        let mounted = true;

        getData(url)
            .then(items => {

                if (mounted && items.adventure.result.length > 0) {
                    setContent(content => ({
                        ...content,
                        title: items.adventure.result[0].title
                    }));
                    setContent(content => ({
                        ...content,
                        attribute: items.adventure.result[0].attribute
                    }));
                    setContent(content => ({
                        ...content,
                        describe: items.adventure.result[0].describe
                    }));
                    setContent(content => ({
                        ...content,
                        enemyFound: items.adventure.enemies
                    }));
                    setContent(content => ({
                        ...content,
                        enemyAllowed: items.adventure.result[0].enemy
                    }));
                    setContent(content => ({
                        ...content,
                        content: items.adventure.content
                    }));

                }else{
                    setContent(content => ({
                        ...content,
                        content: items.adventure.content
                    }));
                }
            })
            return () => mounted = false;
    }, useContext(CoordContext))

    if (content.content) {

        document.querySelector('body').style.backgroundImage = `url(assets/images/${((/\s+/g).test(content.title)) ? content.title.replace(/\s+/g, '_') + '.jpg' : content.title + '.jpg'}`;

        document.querySelectorAll('button').forEach(element => {
            element.style.display = 'block';
        });

         /*setTimeout(() => {
             document.querySelectorAll('button').forEach(element => {
                 element.style.display = 'block';
             });
             setCoord(coord => ({
                 ...coord,
                 x: coord.x = 0
             }));
             setCoord(coord => ({
                 ...coord,
                 y: coord.y = 0
             }));
         }, 3000);*/
    }

    

    return (

        <div className='container'>

            <h1>
                <img src='assets/images/fantasy_gui_png/text_bg_04.png' alt='banner' />
                <p>{(content.content) ? content.title : 'Vandrar'}</p>
                <span>x: {coord.x} y: {coord.y}</span>
            </h1>
        
            <div id="adventure">

                {
                    (content.content && !content.enemyFound) ?
                    <p className='main_text'>
                        <img className='cr' src='assets/images/fantasy_gui_png/frame_02_03.png' />
                        <img className='cl' src='assets/images/fantasy_gui_png/frame_02_04.png' />
                        <img className='ctl' src='assets/images/fantasy_gui_png/frame_02_03.png' />
                        <img className='ctr' src='assets/images/fantasy_gui_png/frame_02_04.png' />
                        Du står vid {content.describe}, som är {content.attribute}.
                    </p>
                    :
                    <Portal />
                }
                
                {
                    (content.enemyFound && content.enemyAllowed) ? < Enemy />: <> </>
                }

            </div>

            
    
        </div>
    
    )
}

export default Content;