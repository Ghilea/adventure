import React, {useEffect, useState, useContext} from 'react';
import { StoreContext } from '../store';

const CameraMovement = () => {

    const [store, setStore] = useContext(StoreContext);

    useEffect(()=>{
        const handleMouseMove = (ev) => {
            
            //left & right
            const xMidpoint = window.innerWidth / 2;
            const posX = ev.pageX - xMidpoint;
            const finalX = (posX / xMidpoint) * 90;

            //up & down
            const yMidpoint = window.innerHeight / 2;
            const posY = ev.pageY - yMidpoint;
            const finalY = (posY / yMidpoint) * -10;
                        
            setStore((store) => ({
                ...store,
                mouse: {
                ...store.mouse,
                    x: finalY,
                    y: finalX
                }
            }))
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }

    }, [])

    return null;
}

export default CameraMovement;