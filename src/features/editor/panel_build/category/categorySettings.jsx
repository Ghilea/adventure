import React, { useEffect, useState, useRef } from "react";
import { build } from '@store/editor';
import { Read, Update } from '@comp/crud';

const CategorySettings = () => {
    const storeBuild = build(state => state);
    
    const [selectList, setSelectList] = useState([]);
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(0);
    const nameRef = useRef();
    const levelRef = useRef();

    useEffect(() => {
    
        Read('getAllLevels')
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

        const data = {
            id: list[selected].id,
            title: nameRef.current.value,
            level: (levelRef.current.value > 100 || levelRef.current.value < 1) ? list[selected].level : levelRef.current.value
        }

        Update('updateLevel', data);
        
    }

    return (
        <div className='buildPanel'>
            <div className='container'>
                <h2>Settings</h2>
                <div className='settings'>
                    <select onChange={handleChange}>
                        {selectList}
                    </select>

                    <div className="settingsName">
                        <label htmlFor='name'>Name</label>
                        <input ref={nameRef} id='name' type='text' defaultValue={(list.length > 0) ? list[selected].title : ''} onChange={handleUpdate} />
                    </div>

                    <div className="settingsName">
                        <label htmlFor='level'>Level (1-100)</label>
                        <input ref={levelRef} id='level' type='number' min='1' max='100' defaultValue={(list.length > 0) ? list[selected].level : ''} onChange={handleUpdate} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySettings