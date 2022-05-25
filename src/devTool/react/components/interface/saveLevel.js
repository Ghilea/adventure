import React from 'react';
import { build, player } from '@comp/store';
import { Create } from '@shared/components/Crud';
import { fetchURL } from '@shared/global';


export const SaveLevel = () => {
    
    const store = build(state => state);
    const storePlayer = player(state => state);
    const saveLevel = build(state => state.saveLevel);

    const handleSave = () => {
        console.log({'walls': store.walls, 'player': storePlayer.playerMark})
        
        const url = `${fetchURL}/createLevel`;

        Create(url, {
            content: JSON.stringify({
                'walls': store.walls,
                'player': storePlayer.playerMark
            })
        });
    }

    return (
        <div className='container'>
            <button onClick={handleSave}>Save level</button>
        </div>
    )

}