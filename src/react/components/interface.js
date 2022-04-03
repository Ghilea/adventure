import React, {useContext, useState, useEffect} from 'react';
import {CoordContext} from './store';
import Read from '../crud/read';
import Update from '../crud/update';

const Interface = () => {

    const state = {
        heroName: null,
        experience: 0,
        img: null,
        health: 0,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        dps: 0
    };

    const [set, setState] = useState({
        ...state
    });

    const [coord, setCoord] = useContext(CoordContext);
    
    useEffect(() => {

        let url = `http://localhost:1234/getProtagonist?id=1`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name
                    }));
                    setState(set => ({
                        ...set,
                        experience: items.protagonist[0].experience
                    }));
                    setState(set => ({
                        ...set,
                        img: `assets/images/fantasycharacters/${items.protagonist[0].img}.png`
                    }));
                    setState(set => ({
                        ...set,
                        health: items.protagonist[0].health
                    }));
                    setState(set => ({
                        ...set,
                        strength: items.protagonist[0].strength
                    }));
                    setState(set => ({
                        ...set,
                        intellect: items.protagonist[0].intellect
                    }));
                    setState(set => ({
                        ...set,
                        dexterity: items.protagonist[0].dexterity
                    }));

                } 
            })
        return () => mounted = false;
    }, useContext(CoordContext))

    const gainBtn = (attribute, value) => {
        
        const data = {
            id: 1,
            attribute: attribute,
            value: value
        }

        const url = `http://localhost:1234/updateStats`;

        let mounted = true;

        Update(url, data)
            
        return () => mounted = false;
   
    }

    

    const btnClick = (event) => {

        switch (event.target.id) {
            case 'strMin':
                gainBtn('strength', set.strength -= 1);
                break;
        }

    }

    const getDps = ((set.strength + set.dexterity + set.intellect) / 2)    

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
                        <button onClick={(event) => btnClick(event)} id='dexMax' className='gainBtn'>+</button>
                        <p className='dex'>Dex: {set.dexterity}</p>
                        <button onClick={(event) => btnClick(event)} id='dexMax' className='gainBtn'>+</button>
                    </div>
                </div>
                    
                <div className='experience'>Exp: {set.experience}</div>
                <div className='dps'>Dps: {getDps}</div>
                <div className='coords'>Position X: {coord.x} Position Y: {coord.y}</div>
            </div>
        </>        
        
    )
}

export default Interface;