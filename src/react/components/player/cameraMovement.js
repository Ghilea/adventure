import React, {useEffect, useState, useContext} from 'react';
import { StoreContext } from '../store';

const CameraMovement = () => {

    const [store, setStore] = useContext(StoreContext);

    useEffect(()=>{
        const handleMouseMove = (ev) => {
              
            //left & right
            const x = ev.pageX;
            const w = window.innerWidth;
            const xMidpoint = w / 2;
            const posX = x - xMidpoint;
            const finalX = (posX / xMidpoint) * 20;

            //up & down
            const y = ev.pageY;
            const h = window.innerHeight;
            const yMidpoint = h / 2;
            const posY = y - yMidpoint;
            const finalY = (posY / yMidpoint) * -20;
                        
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