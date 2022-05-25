import React from 'react';
import { player } from '@comp/store'
import { Points } from '@comp/interface/Points';

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