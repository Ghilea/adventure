import React, { useEffect, useState, useRef } from "react";
import { build } from '@store/editor';
import { Read, Update } from '@comp/crud';

const LevelSetting = () => {
    const storeBuild = build(state => state);
    
    const [selectList, setSelectList] = useState([]);
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(0);
    const nameRef = useRef();
    const levelRef = useRef();

    useEffect(() => {
    
        Read('getAllLevels')
            .then(response => {
                
                response.data.map((item, index) => {
                    
                    setSelectList((state) => ([
                        ...state,
                        <option key={item.id}>
                            [{item.id}] {item.title} 
                        </option>
                    ]))
                });

            })
            
    }, [])

    const handleChange = (event) => {
        
        const targetId = event.target.value.substring(event.target.value.lastIndexOf('[') + 1, event.target.value.lastIndexOf(']'))

        setSelected(targetId)

        Read(`getLevel?id=${targetId}`)
            .then(response => {
                console.log(response)
                response.data.map((item, index) => {
                    console.log(item)
                    setList((state) => [
                        ...state,
                        {
                            id: item.id,
                            title: item.title,
                            level: item.level,
                            content: JSON.parse(item.content)
                        }
                    ])
                });

            })
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

    useEffect(() => {
        if(list.length > 0){
            console.log('list', list)
            storeBuild.setLevel(list[selected].content)
        }
        
    }, [list])  

    return (
 
            <div className='settings'>
                <div className="settingsName">
                <label htmlFor='name'>Import level</label>
                    <select onChange={handleChange}>
                        <option defaultValue={true} hidden>Select level</option>
                        {selectList}
                    </select>
                </div>

                <div className="settingsName">
                    <label htmlFor='name'>Name</label>
                    <input ref={nameRef} id='name' type='text' defaultValue={(list.length > 0) ? /*list[selected].title*/'' : ''} onChange={handleUpdate} />
                </div>

                <div className="settingsName">
                    <label htmlFor='level'>Level order</label>
                    <input ref={levelRef} id='level' type='number' min='1' defaultValue={(list.length > 0) ? /* list[selected].level */'' : ''} onChange={handleUpdate} />
                </div>
            </div>
        
    )
}

export default LevelSetting