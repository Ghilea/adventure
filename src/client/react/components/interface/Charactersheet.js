import React from 'react';
import { player, map } from '@comp/store'
import { Points } from '@comp/interface/Points';
import { useKey } from 'rooks';

export const CharacterSheet = () => {

    const storePlayer = player(state => state);
    const storeMap = map(state => state);

    const handleKeyCharacterSheet = (event) => {
        if (event.key === 'c' && !storeMap.chatInput) {
            if (storeMap.showCharacterSheet) {
                storeMap.characterSheet(false)
                storeMap.disableCamera(false)
            } else {
                storeMap.characterSheet(true);
                storeMap.disableCamera(true);
            }
        }
    }

    useKey(['c'], handleKeyCharacterSheet);

    return (
        <>
            {
                (storeMap.showCharacterSheet) ?

                <div className='characterSheet'>
                    <div className='points'>Poäng: {storePlayer.points}
                    </div>
                    <div className='attributes'>
                        <Points />
                    </div>
                    <div className='dps'>Dps: {storePlayer.dps}</div>
                    
                </div>
                : <></>
            }
        </>
    )
}