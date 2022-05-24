import React, { useEffect, useState } from 'react';
import { enemy, player } from '../store';

const EnemyHealthBar = () => {

    const storeEnemy = enemy(state => state);
    const storePlayer = player(state => state);

    const [health, setHealth] = useState({
        hit: 0 + '%',
        bar: 100 + '%'
    });

    useEffect(() => {

        if(storePlayer.attack) {
            setHealth(health => ({
                ...health,
                hit: (storePlayer.dps / storeEnemy.hp) * 100 + '%'
            }))

            if (storeEnemy.hp <= 0) {
                storePlayer.gainExp(storePlayer.exp += storeEnemy.exp);
                storeEnemy.isDead(true);
            }

            setTimeout(function () {
                setHealth(health => ({
                    ...health,
                    hit: 0 + '%',
                    bar: ((storeEnemy.hp - storePlayer.dps) / storeEnemy.maxHp) * 100 + '%'
                }))

            }, 500);
        }

    }, [storePlayer.attack])

    return ( 

        <div className = 'enemyHealth-bar' data-value = {storeEnemy.hp}>
        
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

            <div className = 'enemyHealth'> {storeEnemy.hp} / {storeEnemy.maxHp}</div>

        </div>

    )
}

export default EnemyHealthBar;