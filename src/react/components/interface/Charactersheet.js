import React, {useContext} from 'react';
import { StoreContext } from '../store'
import { Points } from './Points';

export const CharacterSheet = () => {

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