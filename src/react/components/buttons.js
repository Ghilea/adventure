import React, {useContext, useState} from 'react';
import {StoreContext} from './store';

const Buttons = () => {

    const [store, setStore] = useContext(StoreContext);
    const [old, setOld] = useState({
        x: 0,
        y: 0
    })

    const btnClick = (event) => {

        let newX = store.x,
            newY = store.y;
      
        if (event.target.id !== 'down') {
            setOld(old => ({
                ...old,
                x: newX,
                y: newY
            }));
        }

        switch (event.target.id) {
            case 'left':
                newX -= 1;
                break;
            case 'up':
                newY += 1;
                break;
            case 'down':
                console.log(old);
                if(old.x !== newX && old.x < newX){
                    newX -= 1;
                }else if(old.x !== newX && old.x > newX){
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
             x: newX,
             y: newY
         }));
    }

    return (
      
        <section className={`btn ${(store.enemyHp > 0) ? 'hide' : ''}`}>
            <div className='container'>
                <button onClick={btnClick} type="button" id='left' className={`displayButton 
                ${(!store.doors.left) ? 'hide' : '' } `}>Vänster</button>

                <button onClick={btnClick} type="button" id='up' className={`displayButton 
                ${(!store.doors.front) ? 'hide' : '' } `} >
                    <img src='assets/images/svg/arrow.svg' />Framåt
                </button>

                <button onClick={btnClick} type="button" id='down' className={`displayButton 
                ${(!store.doors.back) ? 'hide' : '' } `}>Bakåt</button>

                <button onClick={btnClick} type="button" id='right' className={`displayButton 
                ${(!store.doors.right) ? 'hide' : '' } `}>Höger</button>

            </div>
        </section>
        
    )
}

export default Buttons;