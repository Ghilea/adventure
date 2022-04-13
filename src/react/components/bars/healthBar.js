import React, {useState, useContext, useEffect} from 'react';
import {StoreContext} from '../store'
import Read from '../crud/read';

const HealthBar = () => {

    const [store, setStore] = useContext(StoreContext);
    const [health, setHealth] = useState(
        { 
            hit: 0 + '%',
            bar: 100 + '%'
        }
    );
    
    useEffect(() => {
        let url = `http://localhost:3000/getProtagonist?id=${store.player.playerId}`;

        Read(url)
            .then(items => {
                if (items.protagonist.length > 0) {
                    setHealth(health => ({
                        ...health,
                            bar: (items.protagonist[0].health / items.protagonist[0].maxHealth) * 100 + '%'
                    }))
                }
            })

    }, [])

    useEffect(() => {
        if (store.enemy.enemyAttack) {
            setHealth(health => ({
                ...health,
                hit: (store.enemy.enemyDps / store.player.playerHp) * 100 + '%'
            }))
        }

        if(store.player.playerHp <= 0){
            console.log('Du dog');
        }

        setTimeout(function () {
            setHealth(health => ({
                ...health,
                hit: 0 + '%',
                bar: ((store.player.playerHp - store.enemy.enemyDps) / store.player.playerMaxHp) * 100 + '%'
            }))
        }, 500);
    }, [store.enemy.enemyAttack])
    

    useEffect(() => {
        if(store.player.playerMaxHp > 0){
            
            setHealth(health => ({
                ...health,
                bar: (store.player.playerHp / store.player.playerMaxHp) * 100 + '%'
            }))
        }
    }, [store.player.playerMaxHp])

    return (
    
        <div className = 'health-bar' data-value = {store.player.playerHp}>
            
            <div className = 'bar'
            style = {
                {
                    width: health.bar
                }
            }>
                <div className='hit' 
                style = {
                    {
                        width: health.hit
                    }
                }>

                </div>
            </div>

            <div className = 'health'> {store.player.playerHp} / {store.player.playerMaxHp}</div>
        </div>
     
    )
}

export default HealthBar;