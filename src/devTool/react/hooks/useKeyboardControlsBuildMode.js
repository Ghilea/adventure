import { useState, useEffect, useContext} from "react"
import { useKey } from 'rooks';
import { StoreContext } from '../store';

function actionByKey(key) {
    const keys = { 
        Digit1: 'stone',
        Digit2: '',
        Digit3: '',
        Digit4: '',
        Digit5: ''
    }

    return keys[key];
}

export const useKeyboardControls = () => {
   
    const [store, setStore] = useContext(StoreContext);

    const keyHandler = (e) => {
        if(e.type === 'keydown' && actionByKey(e.code)){
            setStore((state) => ({
                ...state,
                [actionByKey(e.code)]: true
            }))
        }
 
    }

    useKey(['1', '2', '3', '4', '5'], keyHandler, {
        eventTypes: ['keydown']
    });

    return movement;
}