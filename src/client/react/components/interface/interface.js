import React, { useState, useEffect,  useRef,  createElement } from 'react';
import { player, enemy, map, combat } from '../store';
import { Read, Update } from '../../../../shared/components/Crud';
import { Health, Mana, Exp } from './Bar';
import { CharacterSheet } from './Charactersheet';

import {
    useKey
} from 'rooks';

const Interface = () => {

    const storePlayer = player(state => state);
    const storeEnemy = enemy(state => state);
    const storeCombat = combat(state => state);
    const storeMap = map(state => state);

    const ws = useRef(null);
    const inputRef = useRef(null);

    useEffect(()=>{
        ws.current = new WebSocket(`ws://localhost:3000/websockets`);
    }, [])
    
    const [set, setState] = useState({
        name: '',
        img: null
    });

    const [chatMessage, setChatMessage]= useState([])

    const [chatOpen, setChatOpen] = useState(false);

    const [textInput, SetTextInput] = useState('');

    useEffect(()=>{
        let messageId = 0;

        ws.current.onmessage = (message) => {
            const output = JSON.parse(message.data);
            
            setChatMessage(chatMessage => ([
                ...chatMessage,
                <p key={output.message.name+messageId}><span>{output.message.name}: </span>{output.message.message}</p>
            ]))
            messageId++;
        };
    }, [ws.current])
        
    const openChatInput = (event) => {
        event.preventDefault();

        if(chatOpen){
            if (textInput.length > 0) {
                ws.current.send(JSON.stringify({"name":set.name,"message": textInput}));
            }
            SetTextInput('');
            setChatOpen(false);
        }else{
            setChatOpen(true);
            inputRef.current.focus();
        }
        
    }

    useEffect(() => {

        let url = `http://localhost:3000/getProtagonist?id=${storePlayer.id}`;

        Read(url)
            .then(items => {

                if (items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        name: items.protagonist[0].name,
                        img: `assets/images/characters/${items.protagonist[0].img}.png`                      
                    }));

                    storePlayer.setPlayer(
                        items.protagonist[0].level,
                        items.protagonist[0].health,
                        items.protagonist[0].maxHealth,
                        (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2,
                        items.protagonist[0].experience,
                        items.protagonist[0].intellect,
                        items.protagonist[0].dexterity,
                        items.protagonist[0].strength,
                        items.protagonist[0].points
                    );
                } 
            })
    }, [])

    useEffect(() => {
        const url = `http://localhost:3000/updateStats`;

        const data = {
            id: storePlayer.id,
            attribute: {
                str: storePlayer.str,
                int: storePlayer.int,
                dex: storePlayer.dex
            },
            exp: storePlayer.exp,
            level: storePlayer.level,
            hp: storePlayer.hp,
            maxHp: storePlayer.maxHp,
            points: storePlayer.points,
        }

        if (storePlayer.level > 0) {
            Update(url, data);
        }
            
    }, [storePlayer]);

    useEffect(() => {
        if(storePlayer.exp > 0){
            updateLevel();
        }
        
    }, [storePlayer.exp]);

    const updateLevel = () => {
     
        let points = storePlayer.points;
        let lvl = storePlayer.level;
        let nextLevel = lvl + 1;
        let formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);

        while (storePlayer.exp >= formulaLevel) {
            lvl++;
            nextLevel++;
            points++;
            formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);
        }
        
        storePlayer.gainLevel(points, lvl);
    }

    const handleKeyCharacterSheet = (event) => {
        if (event.key === 'c' && !chatOpen) {
            (storeMap.showCharacterSheet) ? 
            storeMap.CharacterSheet(false) : storeMap.CharacterSheet(true);            
        }
    }

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

        }else if (event.type === 'mousedown' && event.button === 2) {
            storePlayer.isBlock(true);
        }else if (event.type === 'contextmenu') {
            storePlayer.isBlock(false);
        }

    }

    useKey(['c'], handleKeyCharacterSheet);
    useKey(['Enter'], openChatInput);

    return (
        <>
            <div className = 'interface'
            onClick = {
                handleMouseClick
            }
            onContextMenu = {handleMouseClick}
            onMouseDown = {
                handleMouseClick
            } >
                <div className='avatar'> 
                    <img src={set.img} /> 
                </div>
                <div className='heroName'>{set.name}</div>
                <div className='level'>
                    {
                        storePlayer.level
                    }
                </div>
                <Health />
                <Exp />
                <Mana />
                       
                {
                    (storeMap.showCharacterSheet) ? <CharacterSheet /> : <></>
                }

                <div key={'playerShield'} className={`playerShield ${(storePlayer.block) ? 'block' : ''}`}>
                    <img src='assets/images/gui/shield.png'/>
                </div>

                <div key={'playerWeapon'} className={`playerWeapon ${(storePlayer.attack) ? 'swing' : ''}`}>
                    <img src='assets/images/gui/sword.png'/>
                </div>
                
                <div className='chat'>
                    {
                        chatMessage                
                    }
                </div>
       
                {
                    (chatOpen) ?
                        < input id = 'chatInput'
                        className = 'chatInput'
                        type = 'text'
                        ref = {
                            inputRef
                        }
                        onChange = {
                            (e) => SetTextInput(e.target.value)
                        } />
                    :
                    <></>
                }   
                
            </div>
        </>
    )
}

export default Interface;