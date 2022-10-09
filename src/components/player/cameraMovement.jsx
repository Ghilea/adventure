import { useEffect, useRef, useState } from 'react';
import { PointerLockControls as PointerLockControlsImpl } from '@react-three/drei';
import { extend, useThree } from '@react-three/fiber';
import { map, player, enemy, combat } from '@store/store';

extend({ PointerLockControlsImpl });

const CameraMovement = () => {

    const storePlayer = player(state => state);
    const storeEnemy = enemy(state => state);
    const storeCombat = combat(state => state);
    const storeMap = map(state => state);

    const [unlocked, setUnlocked] = useState(false);

    const {camera, gl} = useThree();
    const controls = useRef();

    useEffect(() => {
        if (storeMap.camera) {
            controls.current.unlock();
            setUnlocked(true);
        }else{
            setUnlocked(false);
            controls.current.lock();
        }
    }, [storeMap.camera])

    useEffect(() => {
        if (!storeMap.camera && !unlocked) {
            document.addEventListener('click', (event) => {
                handleMouseClick(event)
            })
        }
    }, [])

    const handleMouseClick = (event) => {
        console.log('click');
        event.preventDefault();

        if (event.type === 'click' && storeEnemy.hp > 0 && storePlayer.canAttack) {
            console.log('left');

            const playerText = createElement(
                'p', {
                    key: 'combatScrollPlayer',
                    className: 'combatScrollPlayer combatScrollAnimation'
                },
                storePlayer.dps
            )

            storePlayer.allowAttack(false, true);
            storeEnemy.gettingHit(false, (storeEnemy.hp -= storePlayer.dps));
            storeCombat.changeText(playerText);

            setTimeout(() => {
                storePlayer.allowAttack(true, false);
                storeCombat.changeText(null);
            }, 1500)

        } else if (event.type === 'mousedown' && event.button === 2) {
            storePlayer.isBlock(true);
        } else if (event.type === 'contextmenu') {
            storePlayer.isBlock(false);
        }

    }

    return (
            <>
                {
                    (storeMap.camera && unlocked) ? 
                    <></>
                    : <PointerLockControlsImpl ref={controls} args={[camera, gl.domElement]} />
                }
            </>
        )
}

export default CameraMovement