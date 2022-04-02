import React, {useEffect, useState} from 'react';
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

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

    let buttons = (event) => {

        switch (event.target.id) {
            case 'left':
                setCoordination(x -= 1);
                adventure(x, y);
                break;
            case 'up':
                setCoordination(y += 1);
                adventure(x, y);
                break;
            case 'down':
                setCoordination(y -= 1);
                adventure(x, y);
                break;
            case 'right':
                setCoordination(x += 1);
                adventure(x, y);
                break;
        }

    }

    btn.forEach(element => {
        showButtons.push(<button onClick={(event) => buttons(event)} key={element.name+'_'+element.class} type="button" id={element.direction} className={element.class}>{element.name}</button>);
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