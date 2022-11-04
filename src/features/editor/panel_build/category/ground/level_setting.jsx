import React, { useEffect, useState, useRef } from "react";
import { Read, Update } from '@comp/crud';
import { build } from "@store/editor";
import { AddObject } from '@editor/helperObject';

const LevelSetting = () => {
    
    const store = build(state => state);
    const [selectList, setSelectList] = useState([]);
    const nameRef = useRef();
    const orderRef = useRef();

    useEffect(() => {
    
        if(selectList.length <= 0) {
            Read('getAllLevels')
                .then(response => {

                    response.data.map((item, index) => {
                        setSelectList((state) => [
                            ...state,
                            <option key={item.id}>
                                [{item.id}] {item.title}
                            </option>
                        ])
                    });

                })
        }
       
            
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        
        store.emptyObjects();

        if(e.target.value === 'New level') {

            store.setMapSettings({
                objects: [],
                groundSize: 10
            })

        }else{

            const targetId = e.target.value.substring(e.target.value.lastIndexOf('[') + 1, e.target.value.lastIndexOf(']'))

            Read(`getLevel?id=${targetId}`)
                .then(response => {

                    response.data.map((item) => {
                        
                        const content = JSON.parse(item.content);
    
                        store.setMapSettings({
                            id: item.id,
                            title: item.title,
                            order: item.order,
                            objects: content.objects,
                            groundSize: content.ground,
                            objectIndex: content.objectIndex
                        })
                        
                        store.setObjectIndex(content.objectIndex)

                        if(content.objects.length > 0){
                        
                            content.objects.map((item) => {
                                
                                store.addObject(
                                    <AddObject
                                        key={item.category + item.objectId}
                                        position={[
                                            item.position[0],
                                            item.position[1],
                                            item.position[2]
                                        ]}
                                        rotation={[
                                            item.rotation[0],
                                            item.rotation[1],
                                            item.rotation[2]
                                        ]}
                                        type={item.type}
                                        category={item.category}
                                        objectId={item.objectId}
                                    />, //canvasObject
                                    [
                                        item.position[0],
                                        item.position[1],
                                        item.position[2]
                                    ], //position
                                    [
                                        item.rotation[0],
                                        item.rotation[1],
                                        item.rotation[2]
                                    ], //rotation
                                    item.type, //type
                                    item.category, //category
                                    item.objectId, //objectId
                                    item.isSolid
                                );
                            })
                            
                        }

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