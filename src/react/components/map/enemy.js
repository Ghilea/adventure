import React, {
    useEffect,
    useState,
    useContext,
    createElement
} from 'react';
import {
    StoreContext
} from '../store';
import Read from '../crud/read';

const getEnemy = () => {

    const [store, setStore] = useContext(StoreContext);

    const [health, setHealth] = useState({
        hit: 0 + '%',
        bar: 100 + '%'
    });

    const [set, setState] = useState({
        enemyName: null,
        experience: 0,
        img: null,
        strength: 0,
        intellect: 0,
        dexterity: 0,
    });

    const [combatText, setCombatText] = useState({
        text: null
    });

    //get and set enemy
    useEffect(() => {

        let url = `http://localhost:3000/getEnemy`;

        Read(url)
            .then(items => {
                
                if (items.enemy.length > 0) {
                    setHealth(health => ({
                        ...health,
                        bar: (items.enemy[0].health / items.enemy[0].maxHealth) * 100 + '%'
                    }))

                    setState(set => ({
                        ...set,
                        enemyName: items.enemy[0].name,
                        experience: items.enemy[0].experience,
                        img: `assets/images/characters/${items.enemy[0].img}.png`,
                        strength: items.enemy[0].strength,
                        intellect: items.enemy[0].intellect,
                        dexterity: items.enemy[0].dexterity
                    }));

                    setStore(store => ({
                        ...store,
                        enemy: {
                            ...store.enemy,
                            enemyHp: items.enemy[0].health,
                            enemyMaxHp: items.enemy[0].maxHealth,
                            enemyDps: (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2
                        }
                        
                    }))

                }
            })
    }, [])

    //update if enemy get hits
    useEffect(() => {
        if (store.enemy.enemyAttack) {
            setHealth(health => ({
                ...health,
                hit: (store.player.playerDps / store.enemy.enemyHp) * 100 + '%'
            }))
        }

        if (store.enemy.enemyHp <= 0) {
            setStore(store => ({
                ...store,
                player: {
                    ...store.player,
                    playerExp: store.player.playerExp += set.experience
                }
            }))
        }

        setTimeout(function () {
            setHealth(health => ({
                ...health,
                hit: 0 + '%',
                bar: ((store.enemy.enemyHp - store.player.playerDps) / store.enemy.enemyMaxHp) * 100 + '%'
            }))
        }, 500);
    }, [store.enemy.enemyHp])

    useEffect(() => {
        if (store.player.playerMaxHp > 0) {

            setHealth(health => ({
                ...health,
                bar: (store.enemy.enemyHp / store.enemy.enemyMaxHp) * 100 + '%'
            }))
        }
    }, [store.enemy.enemyMaxHp])

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

    //player attack
    const attack = () => {
        
        
        setStore(store => ({
            ...store,
            player: {
                ...store.player,
                playerAttack: true
            },
            enemy: {
                ...store.enemy,
                enemyAttack: false,
                enemyHp: store.enemy.enemyHp -= store.player.playerDps
            }
        }))

        const playerText = createElement(
            'p', {
                key: 'combatScrollPlayer',
                className: 'combatScrollPlayer combatScrollAnimation'
            }, 
            store.player.playerDps
        )

        setCombatText((combatText) => ({
            ...combatText,
            text: playerText
        }))

        setTimeout(() => {
            if (store.enemy.enemyHp > 0) {
                enemyAttack();
            }
        }, 2000);
        
    }

    //enemy attack
    const enemyAttack = () => {
        const enemyText = createElement(
            'p', {
                key: 'combatScrollEnemy',
                className: 'combatScrollEnemy combatScrollAnimation'
            },
            `- ${store.enemy.enemyDps}`
        )

        setCombatText((combatText) => ({
            ...combatText,
            text: enemyText
        }))

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
            <img className = {
                `enemyAvatar ${(store.enemy.enemyAttack) ? 'enemyAttackAnimation' : ''}`
            }
            src = {
                set.img
            }
            />

            <div className='textBox'>{store.combat.text}</div>
 
            <div className = 'enemyHealth-bar' data-value = {store.enemy.enemyHp}>
            
            <div className = 'enemyBar'
            style = {
                {
                    width: health.bar
                }
            }>
                <div className='enemyHit' 
                style = {
                    {
                        width: health.hit
                    }
                }>

                    </div>
                </div>

                <div className = 'enemyHealth'> {store.enemy.enemyHp} / {store.enemy.enemyMaxHp}</div>
            </div>

            <p className='enemyName'>{set.enemyName}</p>
            <p className='enemyHp'>HP: {store.enemy.enemyHp}</p>

        </>
    )
}

export default getEnemy;