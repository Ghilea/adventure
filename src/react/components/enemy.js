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
        dps: 0
    });

    useEffect(() => {

        let url = `http://localhost:1234/getEnemy`;

        let mounted = true;

        Read(url)
            .then(items => {

                console.log(items);

                if (mounted && items.enemy.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.enemy[0].name,
                        experience: items.enemy[0].experience,
                        img: `assets/images/fantasycharacters/${items.enemy[0].img}.png`,
                        health: items.enemy[0].health,
                        strength: items.enemy[0].strength,
                        intellect: items.enemy[0].intellect,
                        dexterity: items.enemy[0].dexterity,
                        dps: (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2
                    }));

                    setStore(store => ({
                        ...store,
                        enemyHp: items.enemy[0].health,
                        enemyDps: (items.enemy[0].strength + items.enemy[0].intellect + items.enemy[0].dexterity) / 2
                    }))

                }
            })
        return () => mounted = false;
    }, [])

    useEffect(() => {
        if (set.heroName != null) {
            setState(set => ({
                ...set,
                health: store.enemyHp
            }))
        }
    }, useContext(StoreContext));

    const attack = () => {
        const text = document.querySelector('.textBox');

        const p = document.createElement('p');

        text.appendChild(p).append(`Du attackerade för ${store.playerDps} skada.`);

        setStore(store => ({
            ...store,
            enemyHp: store.enemyHp -= store.playerDps
        }))

        if(store.enemyHp > 0){
            setStore(store => ({
                ...store,
                playerExp: store.playerExp += set.experience
            }))
            enemyAttack();
        }
        
    }

    const enemyAttack = () => {
        const text = document.querySelector('.textBox');

        const p = document.createElement('p');

        text.appendChild(p).append(`${set.heroName} attackerade dig ${set.dps}skada.`);

        setStore(store => ({
            ...store,
            playerHp: store.playerHp -= set.dps
        }))
    }

    return (
        <div className='enemyContainer'>
            <div className='textBox'></div>
            <div className='enemy'>
                <img className='skull' src='assets/images/fantasy_gui_png/button_10_s03.png' />
                <p className='skull_p'>{set.heroName}</p>
                <p className='enemyHp'>HP: {set.health}</p>
                <img className='enemyAvatar' src={set.img} />
                <img className='skull_2' src='assets/images/fantasy_gui_png/button_10_s03.png' />
                <div className='enemyBtn'>
                    <button onClick = {
                        (event) => attack(event)
                    } > Attack </button>
                </div>
            </div>
        </div>
        
    )
}

export default getEnemy;