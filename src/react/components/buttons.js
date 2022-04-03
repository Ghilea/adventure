import React, {useEffect, useState, useContext} from 'react';
import {CoordContext} from './store';

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

    const [coord, setCoord] = useContext(CoordContext);
    
    const btnClick = (event) => {

        switch (event.target.id) {
            case 'left':
                setCoord(coord => ({...coord, x: coord.x -= 1}));
                break;
            case 'up':
                setCoord(coord => ({...coord, y: coord.y += 1}));
                break;
            case 'down':
                setCoord(coord => ({...coord, y: coord.y -= 1}));
                break;
            case 'right':
               setCoord(coord => ({...coord, x: coord.x += 1}));
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