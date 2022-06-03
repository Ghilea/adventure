import React, { useEffect, useState, createElement } from 'react';
import { enemy, player, combat } from '@comp/store';
import { Read } from '@/shared/components/Crud';
import EnemyHealthBar from '@comp/enemy/enemyHealthBar';
import { fetchURL } from '@shared/components/global';

const getEnemy = () => {

    const storeEnemy = enemy(state => state);
    const storePlayer = player(state => state);
    const storeCombat = combat(state => state);

    const [set, setState] = useState({
        name: null,
        img: null,
        strength: 0,
        intellect: 0,
        dexterity: 0
    });

    //get and set enemy
    useEffect(() => {

        let url = `${fetchURL}/getEnemy`;

        Read(url)
            .then(items => {
                
                if (items.enemy.length > 0) {
                    setState(set => ({
                        ...set,
                        name: items.enemy[0].name,
                        img: `assets/images/characters/${items.enemy[0].img}.png`,
                        strength: items.enemy[0].strength,
                        intellect: items.enemy[0].intellect,
                        dexterity: items.enemy[0].dexterity,
                    }));

                    storeEnemy.setEnemy(
                        items.enemy[0].health,
                        items.enemy[0].maxHealth,
                        items.enemy[0].experience,
                        (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2,
                        false
                    );
                }
            })
    }, [])

    //update animation on enemy attacking
    useEffect(() => {
        setTimeout(()=>{
            storeEnemy.isAttack(false)
        }, 100)        
    }, [storePlayer.hp])

    //enemy attack
    const enemyAttack = () => {
        const enemyText = createElement(
            'p', {
                key: 'combatScrollEnemy',
                className: 'combatScrollEnemy combatScrollAnimation'
            },
            `- ${storeEnemy.dps}`
        )

        storeEnemy.isAttack(true)
        
        storePlayer.isAttack(false, storePlayer.hp -= store.dps)

    }

    return (
        <>
            {
                (!storeEnemy.dead) ?

                <>
                    <img className = {
                        `enemyAvatar ${(storeEnemy.attack) ? 'enemyAttackAnimation' : ''}`
                    }
                    src = {
                        set.img
                    }
                    />

                    <div className='textBox'>{storeCombat.text}</div>
        
                   <EnemyHealthBar />

                    <p className='enemyName'>{set.name}</p>
                </>
                : <></>

            }
        </>
    )
}

export default getEnemy;