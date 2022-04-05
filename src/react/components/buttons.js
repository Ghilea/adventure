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

      

        switch (event.target.id) {
            case 'left':
                setStore(store => ({
                    ...store,
                    x: store.x -= 1
                }));
                break;
            case 'up':
                setStore(store => ({
                    ...store,
                    y: store.y += 1
                }));
                break;
            case 'down':
                setStore(store => ({
                    ...store,
                    y: store.y -= 1
                }));
                break;
            case 'right':
               setStore(store => ({
                   ...store,
                   x: store.x += 1
               }));
                break;
        }

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