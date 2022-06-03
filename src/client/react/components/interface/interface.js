import React, { useState, useEffect, createElement } from 'react';
import { player, enemy, combat } from '@comp/store';
import { Read, Update } from '@shared/components/Crud';
import { Health, Mana, Exp } from '@comp/interface/Bar';
import { CharacterSheet } from '@comp/interface/Charactersheet';
import { fetchURL } from '@shared/components/global';
import { Chat } from '@comp/interface/chat';

const Interface = () => {

    const storePlayer = player(state => state);
    const storeEnemy = enemy(state => state);
    const storeCombat = combat(state => state);
    
    const [set, setState] = useState({
        name: '',
        img: null
    });
        
    useEffect(() => {

        let url = `${fetchURL}/getProtagonist?id=${storePlayer.id}`;

        Read(url)
            .then(items => {

                if (items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        name: items.protagonist[0].name,
                        img: `assets/images/characters/${items.protagonist[0].img}.png`                      
                    }));

                    storePlayer.setPlayer(
                        items.protagonist[0].level,
                        items.protagonist[0].health,
                        items.protagonist[0].maxHealth,
                        (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2,
                        items.protagonist[0].experience,
                        items.protagonist[0].intellect,
                        items.protagonist[0].dexterity,
                        items.protagonist[0].strength,
                        items.protagonist[0].points
                    );
                } 
            })
    }, [])

    useEffect(() => {
        const url = `${fetchURL}/updateStats`;

        const data = {
            id: storePlayer.id,
            attribute: {
                str: storePlayer.str,
                int: storePlayer.int,
                dex: storePlayer.dex
            },
            exp: storePlayer.exp,
            level: storePlayer.level,
            hp: storePlayer.hp,
            maxHp: storePlayer.maxHp,
            points: storePlayer.points,
        }

        if (storePlayer.level > 0) {
            Update(url, data);
        }
            
    }, [storePlayer]);

    useEffect(() => {
        if(storePlayer.exp > 0){
            updateLevel();
        }
        
    }, [storePlayer.exp]);

    const updateLevel = () => {
     
        let points = storePlayer.points;
        let lvl = storePlayer.level;
        let nextLevel = lvl + 1;
        let formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);

        while (storePlayer.exp >= formulaLevel) {
            lvl++;
            nextLevel++;
            points++;
            formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);
        }
        
        storePlayer.gainLevel(points, lvl);
    }

    const handleMouseClick = (event) => {
        console.log('click');
        event.preventDefault();

        if (event.type === 'click' && storeEnemy.hp > 0 && storePlayer.canAttack) {
            console.log('left');
            
            const playerText = createElement(
                'p', {
                    key: 'combatScrollPlayer',
                    className: 'combatScrollPlayer combatScrollAnimation'
                },
                storePlayer.dps
            )

            storePlayer.allowAttack(false, true);
            storeEnemy.gettingHit(false, (storeEnemy.hp -= storePlayer.dps));
            storeCombat.changeText(playerText);

            setTimeout(() => {
                storePlayer.allowAttack(true, false);
                storeCombat.changeText(null);
            }, 1500)

        }else if (event.type === 'mousedown' && event.button === 2) {
            storePlayer.isBlock(true);
        }else if (event.type === 'contextmenu') {
            storePlayer.isBlock(false);
        }

    }

    return (
        <>
            <div className = 'interface'
            onClick = {
                handleMouseClick
            }
            onContextMenu = {handleMouseClick}
            onMouseDown = {
                handleMouseClick
            } >
                <div className='avatar'> 
                    <img src={set.img} /> 
                </div>
                <div className='heroName'>{set.name}</div>
                <div className='level'>
                    {
                        storePlayer.level
                    }
                </div>
                <Health />
                <Exp />
                <Mana />
                <CharacterSheet />
    
                <div key={'playerShield'} className={`playerShield ${(storePlayer.block) ? 'block' : ''}`}>
                    <img src='assets/images/gui/shield.png'/>
                </div>

                <div key={'playerWeapon'} className={`playerWeapon ${(storePlayer.attack) ? 'swing' : ''}`}>
                    <img src='assets/images/gui/sword.png'/>
                </div>
                
                <Chat name={set.name}/> 
            </div>
        </>
    )
}

export default Interface;