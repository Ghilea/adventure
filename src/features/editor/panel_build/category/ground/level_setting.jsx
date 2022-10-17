import React, { useEffect, useState, useRef } from "react";
import { Read, Update } from '@comp/crud';
import { build } from "@store/editor";
import { SelectObject, AddObject } from '@editor/helperObject';

const LevelSetting = () => {
    
    const store = build(state => state);
    const isBuild = build(state => state.isBuild);
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
                objects: [],
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
                            objects: JSON.parse(item.content).objects,
                            groundSize: JSON.parse(item.content).ground
                        })

                        store.addObject(
                            <AddObject
                                onClick={<SelectObject />}
                                key={isBuild.type + index}
                                position={
                                    [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5]
                                }
                                rotation={
                                    (isBuild.objectSize.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0]
                                }
                                type={
                                    isBuild.type
                                }
                                category={
                                    isBuild.category
                                }
                                objectId={
                                    index
                                }
                            />, //canvasObject
                            [Math.floor(mousePosition.x) + 0.5, mousePosition.y + (4 / 2), Math.floor(mousePosition.z) + 0.5], //position
                            (isBuild.objectSize.rotate) ? [0, Math.PI * (360 / 360), 0] : [0, Math.PI * (180 / 360), 0], //rotation
                            isBuild.type, //type
                            isBuild.category, //category
                            index //objectId
                        );

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