import React from "react";
import { build, interfaceButtons } from '@devComp/store';

export const CategorySettings = () => {
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    return (
        <div className='container'>
            <h2>Settings</h2>
            <div className = 'settings'>
                <select>
                    <option>New Map</option>
                </select>

                <div className="settingsName">
                    <label htmlFor='name'>Name</label>
                    <input id='name' type={'text'} />
                </div>
            </div>
        </div>
    )
}