import React, {useContext, useState, useEffect, useRef} from 'react';
import {StoreContext} from '../store';

const Buttons = () => {

    const [store, setStore] = useContext(StoreContext);
    const prevStore = useRef();

    const btnClick = (event) => {

            let newX = store.coords.x,
                newY = store.coords.y,
                walking = null;

            if (event.target.id !== 'down') {
                prevStore.current = store.coords
            }

            switch (event.target.id) {
                case 'left':
                    newX -= 1;
                    walking = event.target.id;
                    break;
                case 'up':
                    newY += 1;
                    walking = event.target.id;
                    break;
                case 'down':
                    if (prevStore.current.x < newX) {
                        newX -= 1;
                    } else if (prevStore.current.x > newX) {
                        newX += 1;
                    } else {
                        newY -= 1;
                    }
                    walking = event.target.id;
                    break;
                case 'right':
                    newX += 1;
                    walking = event.target.id;
                    break;
            }
        
        setStore(store => ({
            ...store,
            map: {
                ...store.map,
                walking: walking,
            }
        }));

        setTimeout(() => {
            setStore(store => ({
                ...store,
                coords: {
                    ...store.coords,
                    x: newX,
                    y: newY
                },
                map: {
                    ...store.map,
                    walking: null,
                },
                quest: {
                    ...store.quest,
                    showQuest: false
                }
            }));
        },2200)
    }

    return (
      
        <section className={`btn ${(store.enemy.enemyHp > 0 || store.map.walking !== null) ? 'hide' : ''}`}>
            <div className='container'>
                <button onClick={btnClick} type="button" id='left' className={`displayButton 
                ${(!store.doors.left) ? 'hide' : '' } `}></button>

                <button onClick={btnClick} type="button" id='up' className={`displayButton 
                ${(!store.doors.front) ? 'hide' : '' } `} ></button>

                <button onClick={btnClick} type="button" id='down' className={`displayButton 
                ${(!store.doors.back) ? 'hide' : '' } `}></button>

                <button onClick={btnClick} type="button" id='right' className={`displayButton 
                ${(!store.doors.right) ? 'hide' : '' } `}></button>

            </div>
        </section>
        
    )
}

export default Buttons;