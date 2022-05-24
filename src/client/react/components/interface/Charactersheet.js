import React from 'react';
import { player } from '../store'
import { Points } from './Points';

export const CharacterSheet = () => {

    const storePlayer = player(state => state);
    
    return (
    
        <div className='characterSheet'>
            <div className='points'>Poäng: 
                {
                    storePlayer.points
                }
            </div>
            <div className='attributes'>
                <Points />
            </div>
            <div className='dps'>Dps: {storePlayer.dps}</div>
            
        </div>
     
    )
}