import React, {useState, useContext, useEffect} from 'react';
import {StoreContext, StoreProvider} from './store'

const HealthBar = () => {

    const [store, setStore] = useContext(StoreContext);
    const [total, setTotal] = useState(store.player.MaxHp);

    const [hitWidth, setHitWidth] = useState(
        0 + '%'
    );

    const [barWidth, setBarWidth] = useState(
        (store.player.playerHp / total) * 100 + '%'
    );
     
    useEffect(()=>{
        if (store.enemy.enemyAttack) {
            setHitWidth((store.enemy.enemyDps / store.player.playerHp) * 100 + '%');
        }

        if(store.player.playerHp <= 0){
            console.log('Du dog');
        }
    }, [store.enemy.enemyAttack])
    

        /*setTimeout(function () {
            hit.css({
                'width': '0'
            });
            bar.css('width', barWidth + "%");
        }, 500);*/


       
 
//

    return (
    
        <div className = 'health-bar' data-value = {store.player.playerHp}>
            
            <div className = 'bar'
            style = {
                {
                    width: barWidth
                }
            }>
                <div className='hit' 
                style = {
                    {
                        width: hitWidth
                    }
                }>

                </div>
            </div>

            <div div className = 'health' > {store.player.playerHp} / {store.player.playerMaxHp}</div >
        </div>
     
    )
}

export default HealthBar;