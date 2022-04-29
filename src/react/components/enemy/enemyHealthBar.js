import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import {
    StoreContext
} from '../store';

const EnemyHealthBar = () => {

    const [store, setStore] = useContext(StoreContext);

    const [health, setHealth] = useState({
        hit: 0 + '%',
        bar: 100 + '%'
    });

    useEffect(() => {

        if(store.player.playerAttack) {
            setHealth(health => ({
                ...health,
                hit: (store.player.playerDps / store.enemy.enemyHp) * 100 + '%'
            }))

            if (store.enemy.enemyHp <= 0) {
                setStore(store => ({
                    ...store,
                    player: {
                        ...store.player,
                        playerExp: (store.player.playerExp += store.enemy.enemyExp)
                    },
                    enemy: {
                        ...store.enemy,
                        dead: true
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
        }

    }, [store.player.playerAttack])

    return ( 

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

    )
}

export default EnemyHealthBar;