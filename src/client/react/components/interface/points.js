import React, { useEffect, useState } from 'react';
import { player } from '@comp/store';

export const Points = () => {

     const storePlayer = player(state => state);

    const [disabled, setDisabled] = useState([{
        strMin: false,
        strMax: false,
        intMin: false,
        intMax: false,
        dexMin: false,
        dexMax: false
    }]);
    
    const handleAttribute = (event) => {

        let str = storePlayer.str,
            int = storePlayer.int,
            dex = storePlayer.dex,
            p = storePlayer.points;

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
    
        storePlayer.updatePoints(p, str, int, dex);

    }

    useEffect(() => {
        //min
        if (storePlayer.str <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: true
            }));
        } else if (storePlayer.str >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: false
            }));
        }

        if (storePlayer.int <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: true
            }));
        } else if (storePlayer.int >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: false
            }));
        }

        if (storePlayer.dex <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: true
            }));
        } else if (storePlayer.dex >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: false
            }));
        }

        //max
        if (storePlayer.points <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: true,
                intMax: true,
                dexMax: true
            }));
        } else if (storePlayer.points >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: false,
                intMax: false,
                dexMax: false
            }));
        }

    }, [storePlayer])

    return (
        <>
            <div className='btnSection'>
                <button onClick={handleAttribute} id='strMin' className='gainBtn' disabled={disabled.strMin}>-</button>
                <p className='str'>Str: {storePlayer.str}</p>
                <button onClick={handleAttribute} id='strMax' className='gainBtn' disabled={disabled.strMax}>+</button>
            </div>
            
            <div className='btnSection'>
                <button onClick={handleAttribute} id='intMin' className='gainBtn' disabled={disabled.intMin}>-</button>
                <p className='int'>Int: {storePlayer.int}</p>
                <button onClick={handleAttribute} id='intMax' className='gainBtn' disabled={disabled.intMax}>+</button>
            </div>

            <div className='btnSection'>
                <button onClick={handleAttribute} id='dexMin' className='gainBtn' disabled={disabled.dexMin}>-</button>
                <p className='dex'>Dex: {storePlayer.dex}</p>
                <button onClick={handleAttribute} id='dexMax' className='gainBtn' disabled={disabled.dexMax}>+</button>
            </div>
        </>
    )
}