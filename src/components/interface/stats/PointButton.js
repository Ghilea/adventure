import React, { useEffect, useState } from 'react';
import { player } from '@comp/store';
import './PointButton.scss';

export const PointButton = ({children}) => {

    const storePlayer = player(state => state);

    const [stats, setStats] = useState({
        name: null,
        type: null
    });

    useEffect(() => {
        switch (children) {
            case 'Strength':
                setStats({
                    name: 'strength',
                    type: storePlayer.coreStats.strength
                });             
                break;
            case 'Intellect':
                setStats({
                    name: 'intellect',
                    type: storePlayer.coreStats.intellect
                });
                break;
            case 'Dexterity':
                setStats({
                    name: 'dexterity',
                    type: storePlayer.coreStats.dexterity
                });
                break;
            case 'Constitution':
                setStats({
                    name: 'constitution',
                    type: storePlayer.coreStats.constitution
                });
                break;
            case 'Wisdom':
                setStats({
                    name: 'wisdom',
                    type: storePlayer.coreStats.wisdom
                });
                break;
            case 'Charisma':
                setStats({
                    name: 'charisma',
                    type: storePlayer.coreStats.charisma
                });
                break;
        }
    }, [storePlayer.coreStats])
    
    const increaseAttribute = () => {
        storePlayer.updateCoreStats(storePlayer.coreStats.available - 1, stats.name, stats.type + 1);
    }

    const decreaseAttribute = () => {
        storePlayer.updateCoreStats(storePlayer.coreStats.available + 1, stats.name, stats.type - 1);
    }

    return (
        <>
            <div className='btnSection'>
                <div className='coreStats'>
                    <p className='coreStatsTitle'>{children}</p> 
                    <p className='coreStatsPoints'>{stats.type}</p>
                </div>

                <div className='buttonContainer'>
                    <div className='coreStatsButton' onClick={() => decreaseAttribute()} disabled={stats.type === 0 ? true : false}>-</div>
                
                    <div className='coreStatsButton' onClick={() => increaseAttribute()} disabled={storePlayer.coreStats.available === 0 ? true: false}>+</div>
                </div>
                
            </div>
        </>
    )
}