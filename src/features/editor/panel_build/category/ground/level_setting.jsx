import React, { useEffect, useState, useRef } from "react";
import { Read, Update } from '@comp/crud';
import { build } from "@store/editor";

const LevelSetting = () => {
    
    const store = build(state => state);

    const [selectList, setSelectList] = useState([]);
    const nameRef = useRef();
    const orderRef = useRef();

    useEffect(() => {
    
        Read('getAllLevels')
            .then(response => {
                
                response.data.map((item, index) => {
                    
                    setSelectList([
                        <option key={item.id}>
                            [{item.id}] {item.title} 
                        </option>
                    ])
                });

            })
            
    }, [])

    const handleChange = (e) => {
        console.log(e.target)
        if(e.target.value === 'New level') {

            store.setMapSettings({
                content: [],
                groundSize: 10
            })

        }else{

            const targetId = e.target.value.substring(e.target.value.lastIndexOf('[') + 1, e.target.value.lastIndexOf(']'))

            Read(`getLevel?id=${targetId}`)
                .then(response => {
                    console.log(response)
                    response.data.map((item, index) => {
                        store.setMapSettings({
                            id: item.id,
                            title: item.title,
                            order: item.order,
                            content: JSON.parse(item.content),
                            groundSize: JSON.parse(item.content).ground
                        })
                    });

                })

        }
        
        
    }

    const handleInputChange = () => {
        store.setField(nameRef.current.value, orderRef.current.value)
    }

    return (
 
            <div className='settings'>
                <div className="settingsName">
                <label htmlFor='name'>Import level</label>
                    <select onChange={handleChange}>
                        <option>New level</option>
                        {selectList}
                    </select>
                </div>

                <div className="settingsName">
                    <label htmlFor='name'>Name</label>
                    <input 
                        ref={nameRef}
                        id='name' 
                        type='text' 
                        value={store.mapSettings.title || ''}
                        onChange={handleInputChange} />
                </div>

                <div className="settingsName">
                    <label htmlFor='order'>Level order</label>
                    <input 
                        ref={orderRef} 
                        id='order' 
                        type='number' 
                        min={0} 
                        value={store.mapSettings.order || ''}
                        onChange={handleInputChange} />
                </div>
            </div>
        
    )
}

export default LevelSetting