import { useState } from 'react';
import './index.scss';

/* useEffect(() => {
    if (storeEnemy.attack) {
        setHealth(health => ({
            ...health,
            hit: (storeEnemy.dps / storePlayer.hp) * 100 + '%'
        }))
    }

    if (storePlayer.hp <= 0) {
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
    if (storePlayer.maxHp > 0) {

        setHealth(health => ({
            ...health,
            bar: (storePlayer.hp / storePlayer.maxHp) * 100 + '%'
        }))
    }
}, [storePlayer.maxHp])
*/

const Bar = ({ currentValue, maxValue, className, color }) => {

    const [barValue, setBarValue] = useState(
        {
            hit: 0 + '%',
            bar: (maxValue) ? (currentValue / maxValue) * 100 + '%' : 100 + '%'
        }
    );

    return (

        <div className={`w-full rounded-lg relative p-1 bg-black ${className}`} data-value={currentValue} >

            <div className={`top rounded-lg relative w-full h-4 ${color}`}
                style={
                    {
                        width: barValue.bar
                    }
                }>
                <div className='hit absolute w-0 pos-l-0 pos-t-0 pos-b-0 bg-grey transition'
                    style={
                        {
                            width: barValue.hit
                        }
                    }>

                </div>
            </div>

            <div className='value text-black text-shadow absolute transition'>{currentValue }{(maxValue) ? ` / ${maxValue}` : null}</div >
        </div>

    )
}

export default Bar