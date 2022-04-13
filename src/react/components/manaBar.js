import React, {useState, useContext, useEffect} from 'react';
import {StoreContext} from './store'
import Read from '../crud/read';

const ExpBar = () => {

    const [store, setStore] = useContext(StoreContext);
    const [health, setHealth] = useState(
        { 
            hit: 0 + '%',
            bar: 100 + '%'
        }
    );
    

    return (
    
        <div className = 'mana-bar' data-value = {
            store.player.playerHp
        } >
            
            <div className = 'bar'
            style = {
                {
                    width: health.bar
                }
            }>
                <div className='hit' 
                style = {
                    {
                        width: health.hit
                    }
                }>

                </div>
            </div>

            <div className = 'mana' > 40
            </div >
        </div>
     
    )
}

export default ExpBar;