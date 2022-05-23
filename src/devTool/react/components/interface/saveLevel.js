import React from 'react';
import { build, player } from '../store';
import { Create } from '../../../../shared/components/Crud';

export const SaveLevel = () => {
    
    const store = build(state => state);
    const storePlayer = player(state => state);
    const saveLevel = build(state => state.saveLevel);

    const handleSave = () => {
        saveLevel({'walls': store.walls, 'player': storePlayer.playerMark})
        
        /*const url = `http://localhost:3000/createLevel`;

        Create(url, {
            content: JSON.stringify(store.walls)
        });*/
    }

    return (
        <div className='container'>
            <button onClick={handleSave}>Save level</button>
        </div>
    )

}