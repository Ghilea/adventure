import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import {
    StoreContext
} from './store';
import Read from '../crud/read';

const getEnemy = () => {

    const [store, setStore] = useContext(StoreContext);

    const [set, setState] = useState({
        enemyName: null,
        experience: 0,
        img: null,
        health: 0,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        dps: 0,
        canAttack: true
    });

    useEffect(() => {

        let url = `http://localhost:3000/getEnemy`;

        let mounted = true;

        Read(url)
            .then(items => {
                
                if (mounted && items.enemy.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.enemy[0].name,
                        experience: items.enemy[0].experience,
                        img: `assets/images/characters/${items.enemy[0].img}.png`,
                        health: items.enemy[0].health,
                        strength: items.enemy[0].strength,
                        intellect: items.enemy[0].intellect,
                        dexterity: items.enemy[0].dexterity,
                        dps: (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2
                    }));

                    setStore(store => ({
                        ...store,
                        enemy: {
                            ...store.enemy,
                            enemyHp: items.enemy[0].health,
                            enemyDps: (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2
                        }
                        
                    }))

                }
            })
        return () => mounted = false;
    }, [])

    useEffect(() => {
        if (set.heroName != null) {
            setState(set => ({
                ...set,
                health: store.enemy.enemyHp
            }))
        }
    }, useContext(StoreContext));

    const attack = () => {
        setState(set => ({
            ...set,
            canAttack: false
        }))

        setStore(store => ({
            ...store,
            player: {
                ...store.player,
                playerAttack: true
            }
        }))

        const text = document.querySelector('.textBox');

        setTimeout(() => {
            const p = document.createElement('p');

            text.appendChild(p).append(`Du attackerade för ${store.player.playerDps} skada.`);

            setStore(store => ({
                ...store,
                player: {
                    ...store.player,
                    playerAttack: false
                },
                enemy: {
                    ...store.enemy,
                    enemyHp: store.enemy.enemyHp -= store.player.playerDps
                }
            }))
        }, 1000);
    }

    useEffect(()=>{
        if (store.enemy.enemyHp <= 0) {
            setStore(store => ({
                ...store,
                player: {
                    ...store.player,
                    playerExp: store.player.playerExp += set.experience
                }
            }))
        } else {
            setTimeout(() => {
                enemyAttack();
            }, 2000);
        }
    }, [store.enemy.enemyHp])

    const run = () => {
        setStore(store => ({
            ...store,
            enemy: {
                ...store.enemy,
                enemyHp: 0
            }
        }))
    }

    const enemyAttack = () => {
        const text = document.querySelector('.textBox');

        const p = document.createElement('p');

        text.appendChild(p).append(`${set.heroName} attackerade dig ${set.dps}skada.`);

        setStore(store => ({
            ...store,
            player: {
                ...store.player,
                playerHp: store.player.playerHp -= set.dps
            }
        }))

        setState(set => ({
            ...set,
            canAttack: true
        }))
    }

    return (
        <div className={`enemyContainer ${(store.enemy.enemyHp <= 0) ? 'hide' : ''}`}>

            <div className='textBox'></div>
           
                <img className='enemyAvatar' src={set.img} />
             
                <p className='enemyName'>{set.heroName}</p>
                <p className='enemyHp'>HP: {set.health}</p>
                

                <div className = {
                    `enemyBtn ${(set.canAttack) ? '' : 'hide'}`
                }>
                    <button onClick = {
                        attack
                    } > Anfall </button>
                    <button onClick = {
                        run
                    } > Fly </button>
                </div>
      
        </div>
        
    )
}

export default getEnemy;