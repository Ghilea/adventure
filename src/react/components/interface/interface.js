import React, {useContext, useState, useEffect} from 'react';
import {StoreContext} from '../store';
import Read from '../crud/read';
import Update from '../crud/update';
import HealthBar from './healthBar';
import ExpBar from './expBar';
import ManaBar from './manaBar';
import CharacterSheet from './overlays/charactersheet';

const Interface = () => {

    const [store, setStore] = useContext(StoreContext);

    const [set, setState] = useState({
        heroName: null,
        img: null
    });

    useEffect(() => {

        let url = `http://localhost:3000/getProtagonist?id=${store.player.playerId}`;

        Read(url)
            .then(items => {

                if (items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name,
                        img: `assets/images/characters/${items.protagonist[0].img}.png`                      
                    }));

                    setStore(store => ({
                        ...store, 
                        player: {
                            ...store.player,
                            playerLevel: items.protagonist[0].level,
                            playerHp: items.protagonist[0].health,
                            playerMaxHp: items.protagonist[0].maxHealth,
                            playerDps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2,
                            playerExp: items.protagonist[0].experience,
                            str: items.protagonist[0].strength,
                            int: items.protagonist[0].intellect,
                            dex: items.protagonist[0].dexterity,
                            playerPoints: items.protagonist[0].points,
                        }
                        
                    }))
                } 
            })
    }, [])

    useEffect(() => {
        const url = `http://localhost:3000/updateStats`;

        const data = {
            id: store.player.playerId,
            attribute: {
                str: store.player.str,
                int: store.player.int,
                dex: store.player.dex
            },
            exp: store.player.playerExp,
            level: store.player.playerLevel,
            hp: store.player.playerHp,
            maxHp: store.player.playerMaxHp,
            points: store.player.playerPoints,
        }

        if (store.player.playerLevel > 0) {
            Update(url, data);
        }
            
    }, [store.player]);

    useEffect(() => {
        if(store.player.playerExp > 0){
            updateLevel();
        }
        
    }, [store.player.playerExp]);

    const updateLevel = () => {
     
        let points = store.player.playerPoints;
        let lvl = store.player.playerLevel;
        let nextLevel = lvl + 1;
        let formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);

        while (store.player.playerExp >= formulaLevel) {
            lvl++;
            nextLevel++;
            points++;
            formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);
        }
        
        setStore((store)=>({
            ...store,
            player: {
                ...store.player,
                playerPoints: points,
                playerLevel: lvl
            }
        }))
    }

    const handleKeyCharacterSheet = (event) => {
        if (event.key === 'c' || event.type === 'click') {
            if(store.map.showCharacterSheet){
                setStore(store => ({
                    ...store,
                    map: {
                        ...store.map,
                        showCharacterSheet: false
                    }
                }))
            }else{
                setStore(store => ({
                    ...store,
                    map: {
                        ...store.map,
                        showCharacterSheet: true
                    }
                }))
            }
            
        }
    }

    return (
        <>
            <div className='interface'>
                <div className='img'> 
                    <img src={set.img} /> 
                </div>
                <div className='heroName'>{set.heroName}</div>
                <div className='level'>
                    {
                        store.player.playerLevel
                    }
                </div>
                <HealthBar />
                <ExpBar />
                <ManaBar />
                       
                <div className='coords'>X: {store.coords.x} Y: {store.coords.y}</div>
                 
                <button className='characterSheetBtn' type='button' 
                onClick = {
                    handleKeyCharacterSheet
                } >
                    C
                </button>
                {
                    (store.map.showCharacterSheet) ? <CharacterSheet /> : <></>
                }
                <div key={'playerWeapon'} className={`playerWeapon ${(store.player.playerAttack) ? 'swing' : ''}`}>
                    <img src='assets/images/gui/sword.png'/>
                </div>
                
            </div>
        </>
    )
}

export default Interface;