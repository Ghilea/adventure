import React, {useEffect, useState, useContext, useRef} from 'react';
import { StoreContext } from '../store';
import Buttons from './playerMovementBtn';

const PlayerMovement = () => {

    const [store, setStore] = useContext(StoreContext);
    const prevStore = useRef();

    useEffect(()=>{
        let newX = store.coords.x,
            newY = store.coords.y,
            walking = null;
        
          const handleKey = (event) => {

            if (event.key !== 's') {
                prevStore.current = store.coords
            }

            switch (event.key) {
                case 'w':
                    if(store.doors.front){
                        newY += 1;
                        walking = event.target.id;
                    }
                    break;
                case 's':
                    if (store.doors.back) {
                        if (prevStore.current.x < newX) {
                            newX -= 1;
                        } else if (prevStore.current.x > newX) {
                            newX += 1;
                        } else {
                            newY -= 1;
                        }
                        walking = event.target.id;
                    }
                    break;
                case 'a':
                    if (store.doors.left) {
                        console.log('hej');
                        newX -= 1;
                        walking = event.target.id;
                    }
                    break;
                case 'd':
                    if (store.doors.right) {
                        newX += 1;
                        walking = event.target.id;
                    }
                    break;
            }

            setStore(store => ({
                ...store,
                 map: {
                     ...store.map,
                     walking: walking,
                 }
            }))

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
            }, 2200)

        }

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        }

    }, [])

    return <Buttons />;
}

export default PlayerMovement;