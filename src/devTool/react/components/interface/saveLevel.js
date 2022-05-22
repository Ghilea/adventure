import React from 'react';
import { build } from '../store';
import { Create } from '../Crud';

export const SaveLevel = () => {
    
    const store = build(state => state);
    const saveLevel = build(state => state.saveLevel);

    const handleSave = () => {
        saveLevel(store.walls)
        /*const url = `http://localhost:3000/createLevel`;

        console.log(buildCheck.walls);

        Create(url, {
            content: JSON.stringify(buildCheck.walls)
        });*/
    }

    return (
        <div className='container'>
            <button onClick={handleSave}>Save level</button>
        </div>
    )

}