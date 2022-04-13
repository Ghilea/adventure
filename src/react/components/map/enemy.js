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

    const [set, setState] = useState({
        enemyName: null,
        experience: 0,
        img: null,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        playerCanAttack: true,
        playerRun: false
    });

    const [combatText, setCombatText] = useState({
        text: null
    });

    const [anim, setAnim] = useState(true);

    //get and set enemy
    useEffect(() => {

        let url = `http://localhost:3000/getEnemy`;

        Read(url)
            .then(items => {
                
                if (items.enemy.length > 0) {
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
        if (!set.playerRun && store.enemy.enemyHp <= 0) {
            setStore(store => ({
                ...store,
                player: {
                    ...store.player,
                    playerExp: store.player.playerExp += set.experience
                }
            }))
        }else if(set.playerRun){
            setState(set => ({
                ...set,
                playerRun: false
            }))
        }
    }, [store.enemy.enemyHp])

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
        
        setState(set => ({
            ...set,
            playerCanAttack: false
        }))

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

    //player run
    const run = () => {
        setState(set => ({
            ...set,
            playerRun: true
        }))

        setStore(store => ({
            ...store,
            enemy: {
                ...store.enemy,
                enemyAttack: false,
                enemyHp: 0
            }
        }))
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

        setState(set => ({
            ...set,
            playerCanAttack: true
        }))
    }

    return (
        <div className={`enemyContainer ${(store.enemy.enemyHp <= 0) ? 'hide' : ''}`}>

            <div className='textBox'>{combatText.text}</div>
           
                <img className={`enemyAvatar ${(store.enemy.enemyAttack) ? 'enemyAttackAnimation' : ''}`} src={set.img} />
             
                <p className='enemyName'>{set.enemyName}</p>
                <p className='enemyHp'>HP: {store.enemy.enemyHp}</p>
                

                <div className = {
                    `enemyBtn ${(set.playerCanAttack) ? '' : 'hide'}`
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