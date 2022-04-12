import React, {useContext, useState, useEffect, useRef} from 'react';
import {StoreContext} from './store';

const Buttons = () => {

    const [store, setStore] = useContext(StoreContext);
    const prevStore = useRef();

    const btnClick = (event) => {

        let newX = store.coords.x,
            newY = store.coords.y;

        if(event.target.id !== 'down'){
            prevStore.current = store.coords
        }

        switch (event.target.id) {
            case 'left':
                newX -= 1;
                break;
            case 'up':
                newY += 1;
                break;
            case 'down':
                if (prevStore.current.x < newX) {
                    newX -= 1;
                } else if (prevStore.current.x > newX) {
                    newX += 1;
                }else{
                    newY -= 1;
                }
                break;
            case 'right':
               newX += 1;
                break;
        }

        setStore(store => ({
            ...store,
            coords: {
            ...store.coords,
            x: newX,
            y: newY
            },
            quest: {
                ...store.quest,
                showQuest: false
            }
        }));
    }

    return (
      
        <section className={`btn ${(store.enemy.enemyHp > 0) ? 'hide' : ''}`}>
            <div className='container'>
                <button onClick={btnClick} type="button" id='left' className={`displayButton 
                ${(!store.doors.left) ? 'hide' : '' } `}>Vänster</button>

                <button onClick={btnClick} type="button" id='up' className={`displayButton 
                ${(!store.doors.front) ? 'hide' : '' } `} >Framåt</button>

                <button onClick={btnClick} type="button" id='down' className={`displayButton 
                ${(!store.doors.back) ? 'hide' : '' } `}>Bakåt</button>

                <button onClick={btnClick} type="button" id='right' className={`displayButton 
                ${(!store.doors.right) ? 'hide' : '' } `}>Höger</button>

            </div>
        </section>
        
    )
}

export default Buttons;