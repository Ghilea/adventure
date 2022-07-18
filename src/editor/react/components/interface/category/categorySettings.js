import React, { useEffect, useState } from "react";
import { build, interfaceButtons } from '@devComp/store';
import { fetchURL } from '@shared/components/global';
import { Read } from '@shared/components/Crud';

export const CategorySettings = () => {
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);
    
    const [list, setList] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        
        const url = `${fetchURL}/getAllLevels`;

        Read(url)
            .then(items => {
                if (items.levels.length > 0) {
                    items.levels.map((item, index) => {
                        setList((state) => ([
                            ...state,
                            <option key = {item.title + index}>
                                {item.title}
                            </option>
                        ]))
                    });

                }
            })

    }, [])

    const handleChange = (event) => {
        if(event.target.value === 'New Map'){
            setName('')
        }else{
            setName(event.target.value)
        }

    }

    return (
        <div className='container'>
            <h2>Settings</h2>
            <div className = 'settings'>
                <select value={name} onChange={handleChange}>
                    <option>New Map</option>
                    {list}
                </select>

                <div className="settingsName">
                    <label htmlFor='name'>Name</label>
                    <input id='name' type={'text'} value={name} onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
}