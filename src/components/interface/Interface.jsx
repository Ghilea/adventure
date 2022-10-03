import React, { useState, useEffect, createElement } from 'react';
import { player, enemy, combat } from '@comp/store';
import { Read, Update } from '@shared/components/Crud';
import { Health, Mana, Exp } from '@comp/interface/bar/Bar';
import { CharacterSheet } from '@comp/interface/characterSheet/CharacterSheet';
import { Chat } from '@comp/interface/chat/Chat';
import sword from '@shared/assets/images/gui/sword.png';
import shield from '@shared/assets/images/gui/shield.png';
import femaleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_female.png';
import maleImg from '@shared/assets/images/characters/FantasyCharacters_h_warrior_male.png';
import './interface.scss';

const Interface = () => {

    const storePlayer = player(state => state);
    const storeEnemy = enemy(state => state);
    const storeCombat = combat(state => state);
    
    const [set, setState] = useState({
        name: '',
        img: null
    });
        
    useEffect(() => {

        Read(`getProtagonist?id=${storePlayer.id}`)
            .then(response => {
                setState(set => ({
                    ...set,
                    name: response.data[0].name,
                    img: (response.data[0].img) ? femaleImg : maleImg                   
                }));

                storePlayer.setPlayer(
                    response.data[0].level,
                    response.data[0].health,
                    response.data[0].maxHealth,
                    (response.data[0].strength + response.data[0].intellect + response.data[0].dexterity) / 2,
                    response.data[0].experience,
                    response.data[0].intellect,
                    response.data[0].dexterity,
                    response.data[0].strength,
                    response.data[0].points
                );
                
            })
    }, [])

    useEffect(() => {

        const data = {
            id: storePlayer.id,
            attribute: {
                strength: storePlayer.ability.strength.points,
                intellect: storePlayer.ability.intellect.points,
                dexterity: storePlayer.ability.dexterity.points,
                constitution: storePlayer.ability.constitution.points,
                wisdom: storePlayer.ability.wisdom.points,
                charisma: storePlayer.ability.charisma.points,
                available: storePlayer.ability.available
            },
            experience: {
                level: storePlayer.level,
                points: storePlayer.points
            }, 
            state: {
                health: storePlayer.health,
                maxHealth: storePlayer.maxHealth,
                mana: storePlayer.mana,
                maxMana: storePlayer.maxMana
            }
        }

        if (storePlayer.level > 0) {
            Update('updateStats', data);
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
                    <img src={shield}/>
                </div>

                <div key={'playerWeapon'} className={`playerWeapon ${(storePlayer.attack) ? 'swing' : ''}`}>
                    <img src={sword}/>
                </div>
                
                <Chat name={set.name}/> 
            </div>
        </>
    )
}

export default Interface;