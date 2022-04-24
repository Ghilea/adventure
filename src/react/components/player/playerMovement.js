import React, {useEffect, useState, useContext} from 'react';
import { StoreContext } from '../store';

const PlayerMovement = () => {

    const [store, setStore] = useContext(StoreContext);

    useEffect(()=>{
        let newX = store.movement.x,
            newY = store.movement.y,
            newZ = store.movement.z;
        
        const handleKey = (ev) => {

            switch (ev.key){
                case 'w':
                    newZ += 10;
                    break;
                case 's':
                    newZ -= 10;
                    break;
                case 'a':
                    newX += 10;
                    break;
                case 'd':
                    newX -= 10;
                    break;
            }

            setStore(store => ({
                ...store,
                movement: {
                    ...store.movement,
                    x: newX,
                    y: newY, 
                    z: newZ
                }
            }))

        }

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        }

    }, [])

    return null;
}

export default PlayerMovement;