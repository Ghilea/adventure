import React, {useContext, useState, useEffect} from 'react';
import {StoreContext} from './store';
import Read from '../crud/read';
import Update from '../crud/update';

const Interface = () => {

    const [store, setStore] = useContext(StoreContext);

    const [set, setState] = useState({
        heroName: null,
        experience: 0,
        img: null,
        health: 0,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        dps: 0
    });

    const [coord, setCoord] = useState({
        x: 0,
        y: 0
    })
    
    useEffect(() => {

        let url = `http://localhost:1234/getProtagonist?id=${store.playerId}`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name,
                        experience: items.protagonist[0].experience,
                        img: `assets/images/fantasycharacters/${items.protagonist[0].img}.png`,
                        health: items.protagonist[0].health,
                        strength: items.protagonist[0].strength,
                        intellect: items.protagonist[0].intellect,
                        dexterity: items.protagonist[0].dexterity,
                        dps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2
                    }));

                    setStore(store => ({
                        ...store, 
                        playerHp: items.protagonist[0].health,
                        playerDps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2,
                        playerExp: items.protagonist[0].experience
                    }))

                } 
            })
        return () => mounted = false;
    }, [])

    useEffect(() => {
        if(set.heroName != null){
            gain();
        }
        
    }, [set]);

    useEffect(() => {
        if (set.heroName != null) {
            setState(set => ({
                ...set,
                experience: store.playerExp,
                health: store.playerHp,
                dps: store.playerDps
            }))
        }
        setCoord(coord => ({
            ...coord,
            x: store.x,
            y: store.y
        }))
    }, useContext(StoreContext));

    const gain = () => {
        const data = {
            id: store.playerId,
            attribute: {
                str: set.strength,
                int: set.intellect,
                dex: set.dexterity
            },
            exp: set.experience,
            hp: set.health
        }

        const url = `http://localhost:1234/updateStats`;

        let mounted = true;

        Update(url, data);

        return () => mounted = false;
    }


    const btnClick = (event) => {

        let str = set.strength,
            int = set.intellect,
            dex = set.dexterity;

        switch (event.target.id) {
            case 'strMin':
                str -= 1;
                break;
            case 'strMax':
                str += 1;
                break;
            case 'intMin':
                int -= 1;
                break;
            case 'intMax':
                int += 1;
                break;
            case 'dexMin':
                dex -= 1;
                break;
            case 'dexMax':
                dex += 1;
                break;
        }

        setState(set => ({
            ...set,
            strength: str,
            intellect: int,
            dexterity: dex
        }))

        setStore(store => ({
            ...store,
            playerDps: (str + int + dex) / 2,
        }))
    }

    return (
        
        <>
            <div className='interface'>
                <div className='img'> 
                    <img src={set.img} /> 
                </div>
                <div className='heroName'>Namn: {set.heroName}</div>
                <div className='health'>HP: {set.health}</div>
                <div className='stats'>
                    <div className='btnSection'>
                        <button onClick={(event) => btnClick(event)} id='strMin' className='gainBtn'>-</button>
                        <p className='str'>Str: {set.strength}</p>
                        <button onClick={(event) => btnClick(event)} id='strMax' className='gainBtn'>+</button>
                    </div>
                    
                    <div className='btnSection'>
                        <button onClick={(event) => btnClick(event)} id='intMin' className='gainBtn'>-</button>
                        <p className='int'>Int: {set.intellect}</p>
                        <button onClick={(event) => btnClick(event)} id='intMax' className='gainBtn'>+</button>
                    </div>

                    <div className='btnSection'>
                        <button onClick={(event) => btnClick(event)} id='dexMin' className='gainBtn'>-</button>
                        <p className='dex'>Dex: {set.dexterity}</p>
                        <button onClick={(event) => btnClick(event)} id='dexMax' className='gainBtn'>+</button>
                    </div>
                </div>
                    
                <div className='experience'>Exp: {set.experience}</div>
                <div className='dps'>Dps: {set.dps}</div>
                <div className='coords'>Position X: {coord.x} Position Y: {coord.y}</div>
            </div>
        </>        
        
    )
}

export default Interface;