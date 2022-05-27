import React from 'react';
import { build, player, ground } from '@comp/store';
import { Create } from '@shared/components/Crud';
import { fetchURL } from '@shared/global';


export const SaveLevel = () => {
    
    const storeBuild = build(state => state);
    const storePlayer = player(state => state);
    const storeGround = ground(state => state);

    const handleSave = () => {
        console.log({
            'walls': storeBuild.walls,
            'ground': [storeGround.x, storeGround.y, storeGround.texture],
            'player': storePlayer.playerMark
        })
        
        const url = `${fetchURL}/createLevel`;

        Create(url, {
            content: JSON.stringify({
                'walls': storeBuild.walls,
                'ground': [storeGround.x, storeGround.y, storeGround.texture],
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