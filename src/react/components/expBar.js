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
    
        <div className = 'exp-bar' data-value = {
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

            <div className = 'exp' > {
                store.player.playerExp
            } exp
            </div >
        </div>
     
    )
}

export default ExpBar;