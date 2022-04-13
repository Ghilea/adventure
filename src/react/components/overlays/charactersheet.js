import React, {useState, useContext, useEffect} from 'react';
import {StoreContext} from '../store'
import Points from '../points';
import Read from '../crud/read';

const CharacterSheet = () => {

    const [store, setStore] = useContext(StoreContext);
    
    return (
    
        <div className='characterSheet'>
            <div className='points'>Poäng: 
                {
                    store.player.playerPoints
                }
            </div>
            <div className='attributes'>
                <Points />
            </div>
            <div className='dps'>Dps: {store.player.playerDps}</div>
            
        </div>
     
    )
}

export default CharacterSheet;