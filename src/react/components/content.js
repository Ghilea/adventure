import React, {useEffect, useState} from 'react';
import getData from '../crud/get';
import Protagonist from './protagonist'

const Content = (coordination) => {

    const [list, setList] = useState([]);
    let title, 
    attribute, 
    describe, 
    enemyText, 
    getProtagonist, 
    enemyAllowed,
    enemyFound;

    useEffect(()=>{
        const url = `http://localhost:1234/adventure?x=${coordination.props.x}&y=${coordination.props.y}`;

        let mounted = true;

        getData(url)
            .then(items => {
                if(mounted) {
                    setList(items);
                }
            })
            return () => mounted = false;
    }, [])

    if(list.length !== 0){
        title = list.adventure.result[0].title;
        attribute = list.adventure.result[0].attribute;
        describe = list.adventure.result[0].describe;
        enemyFound = list.adventure.enemies;
        enemyAllowed = list.adventure.result[0].enemy;

        document.querySelector('body').style.backgroundImage = `url(assets/images/${((/\s+/g).test(title)) ? title.replace(/\s+/g, '_') + '.jpg' : title + '.jpg'}`;

        if (enemyFound && enemyAllowed) {
       
            enemyText = `
                <div className='enemy'>
                    <img className='skull' src='assets/images/fantasy_gui_png/button_10_s03.png'>
                    <p className='skull_p'>En fiende uppenbarade sig. Var redo för strid eller fly för ditt liv.</p>
                    <img className='skull_2' src='assets/images/fantasy_gui_png/button_10_s03.png'>
                </div>`;

            document.querySelectorAll('button').forEach(element => {
                element.style.display = 'none';
            });

            setTimeout(() => {
                getProtagonist = <Protagonist />
            }, 3000);
        
        }
    }

    return (

        <div className='container'>

            <h1>
                <img src='assets/images/fantasy_gui_png/text_bg_04.png' alt='banner' />
                <p>{title}</p>
            </h1>
        
            <div id="adventure">
                <p className='main_text'>
                    <img className='cr' src='assets/images/fantasy_gui_png/frame_02_03.png' />
                    <img className='cl' src='assets/images/fantasy_gui_png/frame_02_04.png' />
                    <img className='ctl' src='assets/images/fantasy_gui_png/frame_02_03.png' />
                    <img className='ctr' src='assets/images/fantasy_gui_png/frame_02_04.png' />
                    Du står vid {describe}, som är {attribute}.
                </p>
            </div>

            {enemyText}
    
        </div>
    
    )
}

export default Content;