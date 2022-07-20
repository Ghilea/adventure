import React, { useEffect, useState, useRef } from "react";
import { build, interfaceButtons } from '@devComp/store';
import { fetchURL } from '@shared/components/global';
import { Read, Update } from '@shared/components/Crud';

export const CategorySettings = () => {
    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);
    
    const [selectList, setSelectList] = useState([]);
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(0);
    const nameRef = useRef();
    const levelRef = useRef();

    useEffect(() => {
        
        const url = `${fetchURL}/getAllLevels`;

        //data
        Read(url)
            .then(items => {
                if (items.levels.length > 0) {
                    items.levels.map((item, index) => {
                        
                        setSelectList((state) => ([
                            ...state,
                            <option key = {item.title + index}>
                                {item.title} 
                            </option>
                        ]))
                        setList((state) => [
                            ...state,
                            {
                                id: item.id,
                                title: item.title,
                                level: item.level
                            }
                        ])
                    });

                }
            })
            
    }, [])

    const handleChange = (event) => {
        setSelected(event.target.selectedIndex)
        console.log(list[selected].title, list[selected].level)
    }

    const handleUpdate = () => {

        //list
        const newItem = list.map((item, index) => {
            if(selected == index) {
                return {
                    ...item,
                    title: nameRef.current.value,
                    level: levelRef.current.value 
                }
            }
            return item;
        })

        setList(newItem)

        //selectList
        const newSelect = selectList.map((item, index) => {
            if(selected == index) {
                return (
                    <option key = {nameRef.current.value + index}>
                        {nameRef.current.value} 
                    </option>
                )
            }
            return item;
        })

        setSelectList(newSelect)

        //database
        const url = `${fetchURL}/updateLevel`;

        const data = {
            id: list[selected].id,
            title: nameRef.current.value,
            level: (levelRef.current.value > 100 || levelRef.current.value < 1) ? list[selected].level : levelRef.current.value
        }

        Update(url, data);
        
    }

    return (
        <div className='container'>
            <h2>Settings</h2>
            <div className = 'settings'>
                <select onChange={handleChange}>
                    {selectList}
                </select>

                <div className="settingsName">
                    <label htmlFor='name'>Name</label>
                    <input ref={nameRef} id='name' type='text' defaultValue={(list.length > 0) ? list[selected].title : ''} onChange={handleUpdate}/>
                </div>

                <div className="settingsName">
                    <label htmlFor='level'>Level (1-100)</label>
                    <input ref={levelRef} id='level' type='number' min='1' max='100' defaultValue={(list.length > 0) ? list[selected].level : ''} onChange={handleUpdate}/>
                </div>
            </div>
        </div>
    )
}