import React, {useEffect, useState, useContext} from 'react';
import { StoreContext } from '../store';

const CameraMovement = () => {

    const [store, setStore] = useContext(StoreContext);

    let velocity = 0.5;

    useEffect(()=>{
        const handleMouseMove = (e) => {
            
            //left & right
            //const xMidpoint = window.innerWidth / 2;
            //const posX = e.pageX - xMidpoint;
            //const finalX = (posX / xMidpoint) * 90;

            //up & down
           //const yMidpoint = window.innerHeight / 2;
            //const posY = e.pageY - yMidpoint;
            //const finalY = (posY / yMidpoint) * -10;

            //matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            //matrix3d(${store.mouse.m1}, 0, ${store.mouse.m2}, 0, ${store.mouse.m3}, ${store.mouse.m4}, ${store.mouse.m5}, 0, ${store.mouse.m6}, ${store.mouse.m7}, ${store.mouse.m8}, 0, 0, 0, 0, 1)
            
            let angleY = e.pageX * velocity * Math.PI / 180;
            let angleX = e.pageY * velocity * Math.PI / 180;

            setStore((store) => ({
                ...store,
                mouse: {
                ...store.mouse,
                    /*m1: Math.cos(-angleX),
                    m2: Math.sin(-angleX),
                    m3: (Math.sin(angleY) * Math.sin(-angleX)),
                    m4: Math.cos(angleY),
                    m5: (-Math.sin(angleY) * Math.cos(-angleX)),
                    m6: (-Math.cos(angleY) * Math.sin(-angleX)),
                    m7: Math.sin(angleY),
                    m8: (Math.cos(angleY) * Math.cos(-angleX))*/
                    x: angleX,
                    y: angleY
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