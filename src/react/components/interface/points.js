import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import { StoreContext } from '../store';

const Points = () => {

    const [store, setStore] = useContext(StoreContext);

    const [disabled, setDisabled] = useState([{
        strMin: false,
        strMax: false,
        intMin: false,
        intMax: false,
        dexMin: false,
        dexMax: false
    }]);
    
    const handleAttribute = (event) => {

        let str = store.player.str,
            int = store.player.int,
            dex = store.player.dex,
            p = store.player.playerPoints;

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
    
        setStore(store => ({
            ...store,
            player: {
                ...store.player,
                playerPoints: p,
                str: str,
                int: int,
                dex: dex,
                playerDps: (str + int + dex) / 2,
            }
        })) 
    }

    useEffect(() => {
        //min
        if (store.player.str <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: true
            }));
        } else if (store.player.str >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMin: false
            }));
        }

        if (store.player.int <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: true
            }));
        } else if (store.player.int >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                intMin: false
            }));
        }

        if (store.player.dex <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: true
            }));
        } else if (store.player.dex >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                dexMin: false
            }));
        }

        //max
        if (store.player.playerPoints <= 0) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: true,
                intMax: true,
                dexMax: true
            }));
        } else if (store.player.playerPoints >= 1) {
            setDisabled((disabled) => ({
                ...disabled,
                strMax: false,
                intMax: false,
                dexMax: false
            }));
        }

    }, [store.player])

    return (
        <>
            <div className='btnSection'>
                <button onClick={handleAttribute} id='strMin' className='gainBtn' disabled={disabled.strMin}>-</button>
                <p className='str'>Str: {store.player.str}</p>
                <button onClick={handleAttribute} id='strMax' className='gainBtn' disabled={disabled.strMax}>+</button>
            </div>
            
            <div className='btnSection'>
                <button onClick={handleAttribute} id='intMin' className='gainBtn' disabled={disabled.intMin}>-</button>
                <p className='int'>Int: {store.player.int}</p>
                <button onClick={handleAttribute} id='intMax' className='gainBtn' disabled={disabled.intMax}>+</button>
            </div>

            <div className='btnSection'>
                <button onClick={handleAttribute} id='dexMin' className='gainBtn' disabled={disabled.dexMin}>-</button>
                <p className='dex'>Dex: {store.player.dex}</p>
                <button onClick={handleAttribute} id='dexMax' className='gainBtn' disabled={disabled.dexMax}>+</button>
            </div>
        </>
    )
}

export default Points;