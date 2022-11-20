import { useEffect, createElement } from 'react';
import { player } from '@store/store';
import { Read, Update } from '@comp/crud';
import Bar from './components/bar';
import disable from '@hooks/disable-click';
import CharacterSheet from './components/characterSheet';
import Chat from './components/chat';

import femaleImg from '@assets/images/characters/FantasyCharacters_h_warrior_female.png';
import maleImg from '@assets/images/characters/FantasyCharacters_h_warrior_male.png';
import './index.scss';

const Index = () => {

    const storePlayer = player(state => state);
    const experience = player(state => state.experience);
    const state = player(state => state.state);
    const ability = player(state => state.ability);

    const [mouseRight] = disable();

    useEffect(() => {
        let ignore = false;

        const startFetching = async () => {
            const json = await Read(`getProtagonist?id=${storePlayer.id}`)

            if (!ignore) {

                //loop and set data
                json.data.map((item) => {

                    storePlayer.setPlayer({
                        level: item.level,
                        health: item.health,
                        maxHp: item.maxHealth,
                        exp: item.experience,
                        int: item.intellect,
                        dex: item.dexterity,
                        str: item.strength,
                        con: item.constitution,
                        wis: item.wisdom,
                        cha: item.charisma,
                        points: item.points,
                        name: item.name,
                        img: (item.img) ? femaleImg : maleImg
                    });

                })
            }
        }

        startFetching();

        return () => {
            ignore = true;
        }

    }, [])

    useEffect(() => {

        const data = {
            id: storePlayer.id,
            attribute: {
                strength: ability.strength.points,
                intellect: ability.intellect.points,
                dexterity: ability.dexterity.points,
                constitution: ability.constitution.points,
                wisdom: ability.wisdom.points,
                charisma: ability.charisma.points,
                available: ability.available
            },
            experience: {
                level: experience.level,
                points: experience.points
            },
            state: {
                health: state.health,
                maxHealth: state.maxHealth,
                mana: state.mana,
                maxMana: state.maxMana
            }
        }

        if (storePlayer.level > 0) {
            Update('updateStats', data);
        }

    }, [storePlayer]);

    useEffect(() => {
        if (storePlayer.exp > 0) {
            updateLevel();
        }

    }, [experience.points]);

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

    /*     const handleMouseClick = (event) => {
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
    
            } else if (event.type === 'mousedown' && event.button === 2) {
                storePlayer.isBlock(true);
            } else if (event.type === 'contextmenu') {
                storePlayer.isBlock(false);
            }
    
        } */

    return (
        <div className='fixed pos-l-0 pos-t-0 grid template-col-5 template-row-5 w-full h-full justify-items-center items-center'
            onContextMenu={mouseRight} >

            <div className='level pos-t-1 pos-l-1 absolute flex items-center justify-center text-size-7 rounded-pill opacity-5 w-10 px-5'>
                {experience.level}
            </div>

            <Bar name='health' currentValue={state.health} maxValue={state.maxHealth} className='place-row-5-1 place-col-1-1 place-self-end' color='bg-red' />

            <Bar name='mana' currentValue={state.mana} maxValue={state.maxMana} className='place-row-5-1 place-col-5-1 place-self-end' color='bg-blue' />

            <Bar name='exp' currentValue={experience.points} className='place-row-5-1 place-col-3-1 place-self-end' color='bg-white' />

            <CharacterSheet />

            <Chat name={storePlayer.name} />
        </div>
    )
}

export default Index;