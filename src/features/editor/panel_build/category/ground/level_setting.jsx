import React, { useEffect, useState, useRef } from "react";
import { Read, Update } from '@comp/crud';

const LevelSetting = ({setMap}) => {
    
    const [selectList, setSelectList] = useState([]);
    const [list, setList] = useState([]);
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

    const handleChange = (e) => {

        console.log(e)

        if(e.target.value === 'New level') {

            setList([])

        }else{

            const targetId = e.target.value.substring(e.target.value.lastIndexOf('[') + 1, e.target.value.lastIndexOf(']'))

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
        
        
    }

    const handleInputChange = () => {
        setMap((state) => ({
            ...state,
            level: levelRef.current.value,
            title: nameRef.current.value,
        }))
    }

    useEffect(() => {
        if(list.length > 0){
            setMap((state) => ({
                ...state,
                id: list[0].id
            }))
        }
        
    }, [list])  

    return (
 
            <div className='settings'>
                <div className="settingsName">
                <label htmlFor='name'>Import level</label>
                    <select onChange={handleChange}>
                        <option 
                            defaultValue={true}>New level
                        </option>
                        {selectList}
                    </select>
                </div>

                <div className="settingsName">
                    <label htmlFor='name'>Name</label>
                    <input 
                        ref={nameRef}
                        id='name' 
                        type='text' 
                        defaultValue={(list.length > 0) ? list[0].title : ''}
                        onChange={handleInputChange} />
                </div>

                <div className="settingsName">
                    <label htmlFor='level'>Level order</label>
                    <input 
                        ref={levelRef} 
                        id='level' 
                        type='number' 
                        min='1' 
                        defaultValue={(list.length > 0) ? list[0].level : ''}
                        onChange={handleInputChange} />
                </div>
            </div>
        
    )
}

export default LevelSetting