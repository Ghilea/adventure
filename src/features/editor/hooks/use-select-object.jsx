import { useEffect, useState } from "react";
import { build } from '@store/editor';

export const useSelectObject = () => {

    const store = build(state => state);
    const active = build(state => state.isBuild.active);

    const [check, setCheck] = useState(false)
    const [isSelected, setIsSelected] = useState(null);

    const handleClick = (e) => {
        if (store.isEditor) {
            e.stopPropagation();
            const position = e.eventObject.position;

            if (!active) {

                
                const filterCheck = store.objects.filter((item) => {
                    return item.position[0] === position.x && item.position[1] === position.y && item.position[2] === position.z
                })

                if (filterCheck.length > 0) {
        
                    //select new
                    if (store.selected === null) {
                        store.selectedObject(filterCheck[0].objectId)
                    }
        
                    //select same
                    if (store.selected !== null && filterCheck[0].objectId === store.selected) {
                        store.selectedObject(null)
                    }
        
                    //select another while the old still is selected
                    if (store.selected !== null && filterCheck[0].objectId !== store.selected) {
                        store.selectedObject(filterCheck[0].objectId)
                    }

                    setCheck(filterCheck[0].objectId)
                }       
            }
        }
    }

    useEffect(() => {
        setIsSelected(
            (
                check === store.selected && 
                store.selected !== null && 
                check !== null) ? 
            true : false)
    }, [store.selected])
    
    return [isSelected, handleClick]
}