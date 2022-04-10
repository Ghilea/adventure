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
        level: 1,
        health: 0,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        dps: 0,
        points
    });

    const [coord, setCoord] = useState({
        x: 0,
        y: 0
    })
    
    useEffect(() => {

        let url = `http://localhost:1234/getProtagonist?id=${store.player.playerId}`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name,
                        experience: items.protagonist[0].experience,
                        img: `assets/images/characters/${items.protagonist[0].img}.png`,
                        level: items.protagonist[0].level,
                        health: items.protagonist[0].health,
                        strength: items.protagonist[0].strength,
                        intellect: items.protagonist[0].intellect,
                        dexterity: items.protagonist[0].dexterity,
                        dps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2
                    }));

                    setStore(store => ({
                        ...store, 
                        playerLevel: items.protagonist[0].level,
                        playerHp: items.protagonist[0].health,
                        playerDps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2,
                        playerExp: items.protagonist[0].experience
                    }))

                } 
            })
        return () => mounted = false;
    }, [])

    useEffect(() => {

        let mounted = true;

        if(mounted && set.heroName != null){
            gain();
        }
        
        return () => mounted = false;
    }, [set]);

    useEffect(() => {
        if (set.heroName != null) {
            setState(set => ({
                ...set,
                level: store.player.playerLevel,
                experience: store.player.playerExp,
                health: store.player.playerHp,
                dps: store.player.playerDps
            }))
        }
        setCoord(coord => ({
            ...coord,
            x: store.coords.x,
            y: store.coords.y
        }))
    }, useContext(StoreContext));

    const gain = () => {
        const data = {
            id: store.player.playerId,
            attribute: {
                str: set.strength,
                int: set.intellect,
                dex: set.dexterity
            },
            exp: set.experience,
            level: set.level,
            hp: set.health
        }

        const url = `http://localhost:1234/updateStats`;

        let mounted = true;

        Update(url, data);

        return () => mounted = false;
    }

    useEffect(() => {

        let mounted = true;

        if (mounted) {
            updateLevel();
        }

        return () => mounted = false;
    }, [set.experience]);

    const updateLevel = () => {    
        let lvl = set.level;
        let nextLevel = lvl + 1;
        let formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);

        while (set.experience >= formulaLevel) {
            lvl++
            nextLevel++
            formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);
        }

        setStore((store)=>({
            ...store,
            playerLevel: lvl
        }))
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
                <div className='heroName'>{set.heroName} (lvl {set.level})</div>
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
                <div className='coords'>X: {coord.x} Y: {coord.y}</div>

                <div className={`playerWeapon ${(store.player.playerAttack) ? 'swing' : ''}`}>
                    <img src='assets/images/gui/sword.png'/>
                </div>
            </div>
        </>        
        
    )
}

export default Interface;