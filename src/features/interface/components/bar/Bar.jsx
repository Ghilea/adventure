import React, {useState, useEffect} from 'react';
import { enemy, player } from '@store/store'
import { Read } from '@comp/crud';
import './expBar.scss';
import './healthBar.scss';
import './manaBar.scss';

export const Health = () => {

    const storeEnemy = enemy(state => state);
    const storePlayer = player(state => state);

    const [health, setHealth] = useState(
        { 
            hit: 0 + '%',
            bar: 100 + '%'
        }
    );
    
    useEffect(() => {
        Read(`getProtagonist?id=${storePlayer.id}`).then(response => setHealth(set => ({
            ...set,
            bar: (response.data[0].health / response.data[0].maxHealth) * 100 + '%'
        })))
    }, [])

    useEffect(() => {
        if (storeEnemy.attack) {
            setHealth(health => ({
                ...health,
                hit: (storeEnemy.dps / storePlayer.hp) * 100 + '%'
            }))
        }

        if(storePlayer.hp <= 0){
            console.log('Du dog');
        }

        setTimeout(function () {
            setHealth(health => ({
                ...health,
                hit: 0 + '%',
                bar: ((storePlayer.hp - storeEnemy.dps) / storePlayer.maxHp) * 100 + '%'
            }))
        }, 500);
    }, [storeEnemy.attack])
    

    useEffect(() => {
        if(storePlayer.maxHp > 0){
            
            setHealth(health => ({
                ...health,
                bar: (storePlayer.hp / storePlayer.maxHp) * 100 + '%'
            }))
        }
    }, [storePlayer.maxHp])

    return (
    
        <div className = 'health-bar' data-value = {storePlayer.hp}>
            
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

            <div className = 'health'> {storePlayer.hp} / {storePlayer.maxHp}</div>
        </div>
     
    )
}

export const Mana = () => {

    const storePlayer = player(state => state);

    const [mana, setMana] = useState(
        { 
            hit: 0 + '%',
            bar: 100 + '%'
        }
    );
    

    return (
    
        <div className = 'mana-bar' data-value = {
            storePlayer.mana
        } >
            
            <div className = 'bar'
            style = {
                {
                    width: mana.bar
                }
            }>
                <div className='hit' 
                style = {
                    {
                        width: mana.hit
                    }
                }>

                </div>
            </div>

            <div className = 'mana' > 40
            </div >
        </div>
     
    )
}

export const Exp = () => {

    const storePlayer = player(state => state);

    const [exp, setExp] = useState(
        { 
            hit: 0 + '%',
            bar: 100 + '%'
        }
    );
    
    return (
    
        <div className = 'exp-bar' data-value = {
            storePlayer.exp
        } >
            
            <div className = 'bar'
            style = {
                {
                    width: exp.bar
                }
            }>
                <div className='hit' 
                style = {
                    {
                        width: exp.hit
                    }
                }>

                </div>
            </div>

            <div className = 'exp' > {
                storePlayer.exp
            } exp
            </div >
        </div>
     
    )
}