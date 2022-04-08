import React, {useContext, useState, useEffect} from 'react';
import {StoreContext} from './store';
import Read from '../crud/read';

const Buttons = () => {

    const [store, setStore] = useContext(StoreContext);

    const [disabled, setDisabled] = useState([{
        left: false,
        front: false,
        right: false
    }]);

    useEffect(() => {

        let url = `http://localhost:1234/getAdventure?x=${store.x}&y=${store.y}`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.adventure.length > 0) {
                    
                    let parsed = JSON.parse(items.adventure[0].content);
                    
                    setDisabled(disabled => ({
                        ...disabled,
                        left: parsed.doors.left,
                        front: parsed.doors.front,
                        right: parsed.doors.right
                    }));
                    
                    
                } 
                
            })

        return () => mounted = false;
    }, [store])

    const btnClick = (event) => {

        let newX = store.x,
            newY = store.y;
      
        switch (event.target.id) {
            case 'left':
                newX -= 1;
                break;
            case 'up':
                newY += 1;
                break;
            case 'down':
                newY -= 1;
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

    console.log(store);
    console.log(disabled);

    return (
      
        <section className='btn'>
            <div className='container'>
                <button onClick={btnClick} type="button" id='left' className='displayButton' disabled={disabled.left}>Väst</button>

                <button onClick={btnClick} type="button" id='up' className='displayButton' disabled={disabled.front}>Nord</button>

                <button onClick={btnClick} type="button" id='down' className='displayButton'>Syd</button>

                <button onClick={btnClick} type="button" id='right' className='displayButton' disabled={disabled.right}>Öst</button>
                
                <div id="position"></div>
            </div>
        </section>
        
    )
}

export default Buttons;