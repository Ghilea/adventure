import React, {useContext} from 'react';
import {StoreContext} from './store';

const Buttons = () => {

    let btn = [
        {
            name: 'Väst',
            direction: 'left',
            class: 'displayButton'
        }, {
            name: 'Nord',
            direction: 'up',
            class: 'displayButton'
        }, {
            name: 'Syd',
            direction: 'down',
            class: 'displayButton'
        }, {
            name: 'Öst',
            direction: 'right',
            class: 'displayButton'
        },
    ];

    let showButtons = [];

    const [store, setStore] = useContext(StoreContext);
    
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

    btn.forEach(element => {
        showButtons.push(<button onClick={(event) => btnClick(event)} key={element.name+'_'+element.class} type="button" id={element.direction} className={element.class}>{element.name}</button>);
    });

    return (
      
        <section className='btn'>
            <div className='container'>
                {showButtons}
                <div id="position"></div>
            </div>
        </section>
        
    )
}

export default Buttons;