import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import { StoreContext } from './store';

const Points = () => {

    const [attribute, setAttribute] = useState({
        strength: 0,
        intellect: 0,
        dexterity: 0,
        points: 5
    });

    const [disabled, setDisabled] = useState([{
        strMin: false,
        strMax: false,
        intMin: false,
        intMax: false,
        dexMin: false,
        dexMax: false
    }]);

    const [store, setStore] = useContext(StoreContext);
    
    const handleAttribute = (event) => {

        let str = attribute.strength,
            int = attribute.intellect,
            dex = attribute.dexterity,
            p = attribute.points;

        switch (event.target.id) {
            case 'strMin':
                p += 1
                str -= 1;
                break;
            case 'strMax':
                p -= 1
                str += 1;
                break;
            case 'intMin':
                p += 1
                int -= 1;
                break;
            case 'intMax':
                p -= 1
                int += 1;
                break;
            case 'dexMin':
                p += 1
                dex -= 1;
                break;
            case 'dexMax':
                p -= 1
                dex += 1;
                break;
        }
    
        setAttribute(attribute => ({
            ...attribute,
            points: p,
            strength: str,
            intellect: int,
            dexterity: dex
        })) 

    }

    useEffect(() => {
        //min
        if (attribute.strength <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: true
            }));
        } else if (attribute.strength >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: false
            }));
        }

        if (attribute.intellect <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: true
            }));
        } else if (attribute.intellect >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: false
            }));
        }

        if (attribute.dexterity <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: true
            }));
        } else if (attribute.dexterity >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: false
            }));
        }

        //max
        if (attribute.points <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: true,
                intMax: true,
                dexMax: true
            }));
        } else if (attribute.points >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: false,
                intMax: false,
                dexMax: false
            }));
        }

    }, [attribute])

    return (
        <>
            <div className='btnSection'>
                <button onClick={handleAttribute} id='strMin' className='gainBtn' disabled={disabled.strMin}>-</button>
                <p className='str'>Str: {attribute.strength}</p>
                <button onClick={handleAttribute} id='strMax' className='gainBtn' disabled={disabled.strMax}>+</button>
            </div>
            
            <div className='btnSection'>
                <button onClick={handleAttribute} id='intMin' className='gainBtn' disabled={disabled.intMin}>-</button>
                <p className='int'>Int: {attribute.intellect}</p>
                <button onClick={handleAttribute} id='intMax' className='gainBtn' disabled={disabled.intMax}>+</button>
            </div>

            <div className='btnSection'>
                <button onClick={handleAttribute} id='dexMin' className='gainBtn' disabled={disabled.dexMin}>-</button>
                <p className='dex'>Dex: {attribute.dexterity}</p>
                <button onClick={handleAttribute} id='dexMax' className='gainBtn' disabled={disabled.dexMax}>+</button>
            </div>
        </>
    )
}

export default Points;