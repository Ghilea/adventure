import React, { useEffect, useState, useRef } from "react";
import { Read } from '@comp/crud';
import { build } from "@store/editor";
import LoadModel from "@models/components/models";

const LevelSetting = () => {
    
    const store = build(state => state);
    const [selectList, setSelectList] = useState([]);
    const nameRef = useRef();
    const orderRef = useRef();

    useEffect(() => {
    
        if(selectList.length <= 0) {

            setSelectList([<option key={0} value={'New Level'}>New Level</option>])

            Read('getAllLevels')
                .then(response => {

                    response.data.map((item) => {
                        setSelectList((state) => [
                            ...state,
                            <option key={item.id} value={`[${item.id}] ${item.title}`}>
                                [{item.id}] {item.title}
                            </option>
                        ])
                    });

                })
        }
       
            
    }, [])

    const handleChange = (e) => {

        const target = e.target.value;

        store.setImportedMap(target)
        store.emptyObjects();

        if(target === 'New Level') {

            store.setMapSettings({
                objects: [],
                groundSize: 10
            })

        }else{

            const targetId = target.substring(target.lastIndexOf('[') + 1, target.lastIndexOf(']'))

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
  
                                store.addObject(<LoadModel 
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
                                    isSolid = {item.isSolid || null}
                                />, item.position, item.rotation, item.type, item.category, item.objectId, item.isSolid)

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
                    <select onChange={handleChange} value={store.importedMap}>
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