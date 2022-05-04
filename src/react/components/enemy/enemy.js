import React, {
    useEffect,
    useState,
    useContext,
    createElement
} from 'react';
import {
    StoreContext
} from '../store';
import { Read } from '../crud';
import EnemyHealthBar from './enemyHealthBar';

const getEnemy = () => {

    const [store, setStore] = useContext(StoreContext);

    const [set, setState] = useState({
        enemyName: null,
        img: null,
        strength: 0,
        intellect: 0,
        dexterity: 0
    });

    //get and set enemy
    useEffect(() => {

        let url = `http://localhost:3000/getEnemy`;

        Read(url)
            .then(items => {
                
                if (items.enemy.length > 0) {
                    setState(set => ({
                        ...set,
                        enemyName: items.enemy[0].name,
                        img: `assets/images/characters/${items.enemy[0].img}.png`,
                        strength: items.enemy[0].strength,
                        intellect: items.enemy[0].intellect,
                        dexterity: items.enemy[0].dexterity,
                    }));

                    setStore(store => ({
                        ...store,
                        enemy: {
                            ...store.enemy,
                            enemyHp: items.enemy[0].health,
                            enemyExp: items.enemy[0].experience,
                            enemyMaxHp: items.enemy[0].maxHealth,
                            enemyDps: (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2,
                            dead: false,
                        }
                        
                    }))

                }
            })

            console.log(store.enemy.enemyHp);
    }, [])

    //update animation on enemy attacking
    useEffect(() => {
        setTimeout(()=>{
            setStore(store => ({
                ...store,
                enemy: {
                    ...store.enemy,
                    enemyAttack: false
                }
            }))
        }, 100)        
    }, [store.player.playerHp])

    //enemy attack
    const enemyAttack = () => {
        const enemyText = createElement(
            'p', {
                key: 'combatScrollEnemy',
                className: 'combatScrollEnemy combatScrollAnimation'
            },
            `- ${store.enemy.enemyDps}`
        )

        setStore(store => ({
            ...store,
            enemy: {
                ...store.enemy,
                enemyAttack: true
            },
            player: {
                ...store.player,
                playerAttack: false,
                playerHp: store.player.playerHp -= store.enemy.enemyDps
            }
        }))
    }

    return (
        <>
            {
                (!store.enemy.dead) ?

                <>
                    <img className = {
                        `enemyAvatar ${(store.enemy.enemyAttack) ? 'enemyAttackAnimation' : ''}`
                    }
                    src = {
                        set.img
                    }
                    />

                    <div className='textBox'>{store.combat.text}</div>
        
                   <EnemyHealthBar />

                    <p className='enemyName'>{set.enemyName}</p>
                </>
                : <></>

            }
        </>
    )
}

export default getEnemy;