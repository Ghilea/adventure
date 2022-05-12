import React, {useEffect, useState, useContext, useRef, KeyboardEvent} from 'react';
import { StoreContext } from '../store';
import {useKey} from 'rooks';

const PlayerMovement = () => {

    const [store, setStore] = useContext(StoreContext);
    const prevStore = useRef();

    const keyHandler = (event) => {

        let newX = store.coords.x,
            newY = store.coords.y,
            walking = false;

        switch (event.target.id || event.key) {
            case 'a':
                if (
                    store.doors.left && 
                    (!store.map.showCharacterSheet || store.enemy.enemyHp <= 0 || !store.map.walking)) {
                    newX -= 1;
                    prevStore.current = store.coords.x;
                    walking = true;
                }
                break;
            case 'w':
                if (store.doors.front && 
                    (!store.map.showCharacterSheet || store.enemy.enemyHp <= 0 || !store.map.walking)) {
                    newY += 1;
                    walking = true;
                }
                break;
            case 's':
                if (store.doors.back && 
                    (!store.map.showCharacterSheet || store.enemy.enemyHp <= 0 || !store.map.walking)) {
                    if (prevStore.current < newX) {
                        newX -= 1;
                    } else if (prevStore.current > newX) {
                        newX += 1;
                    } else {
                        newY -= 1;
                    }
                    walking = true;
                    
                }
                break;
            case 'd':
                if (store.doors.right && 
                    (!store.map.showCharacterSheet ||store.enemy.enemyHp <= 0 || !store.map.walking)) {
                   newX += 1;
                   prevStore.current = store.coords.x;
                   walking = true;
                }
                break;
        }

        if(walking){
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
                        walking: false,
                    },
                    quest: {
                        ...store.quest,
                        showQuest: false
                    }
                }));
            }, 500)
        }
       
    }

    useKey(['w', 'a', 's', 'd'], keyHandler);

    return (
        <section className = {
            `btn ${(
                store.map.showCharacterSheet || 
                store.enemy.enemyHp > 0 || 
                store.map.walking) ? 'hide' : ''}`
        } >
            <div className='container'>
                <button onClick = {
                    keyHandler
                }
                type = "button"
                id = 'a'
                className = {
                        `displayButton 
                ${(!store.doors.left) ? 'hide' : '' } `}></button>

                <button onClick = {
                    keyHandler
                }
                type = "button"
                id = 'w'
                className = {
                        `displayButton 
                ${(!store.doors.front) ? 'hide' : '' } `} ></button>

                <button onClick = {
                    keyHandler
                }
                type = "button"
                id = 's'
                className = {
                        `displayButton 
                ${(!store.doors.back) ? 'hide' : '' } `}></button>

                <button onClick = {
                    keyHandler
                }
                type = "button"
                id = 'd'
                className = {
                        `displayButton 
                ${(!store.doors.right) ? 'hide' : '' } `}></button>

            </div>

        </section>
    );
}

export default PlayerMovement;