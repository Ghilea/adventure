import React from 'react';
import { useNavigate } from 'react-router-dom';
import { player, map } from '@store/store'
import { useKey } from 'rooks';
import './index.scss';
import Button from '@comp/button/buttons';

const Index = () => {

    const navigate = useNavigate();

    const storePlayer = player(state => state);
    const storeMap = map(state => state);

    const handleKeyCharacterSheet = (e) => {
        if (e.key === 'Escape' && !storeMap.chatInput) {
            if (storeMap.showCharacterSheet) {
                storeMap.characterSheet(false)
                storeMap.disableCamera(false)
            } else {
                storeMap.characterSheet(true);
                storeMap.disableCamera(true);
            }
        }
    }

    const handleExit = () => {
        navigate('/view-character');
    }

    useKey(['Escape'], handleKeyCharacterSheet);

    return (
        <>
            {
                (storeMap.showCharacterSheet) ?

                <div className='characterSheet'>
                    <div className='points'>Poäng: {storePlayer.points}
                    </div>
                    <div className='attributes'>
                   
                    </div>
                    <div className='dps'>Dps: {storePlayer.dps}</div>
                    <Button
                        className='bg-black texture-bg button'
                        onClick={handleExit}>
                        Exit to menu
                    </Button>
                </div>
                : <></>
            }
        </>
    )
}

export default Index