import React, {
    useContext, 
    useState,
    useEffect, 
    useRef, 
    createElement
} from 'react';
import {
    StoreContext
} from '../store';
import Read from '../crud/read';
import Update from '../crud/update';
import HealthBar from './healthBar';
import ExpBar from './expBar';
import ManaBar from './manaBar';
import CharacterSheet from './overlays/charactersheet';
import PlayerMovement from '../player/playerMovement';
import {
    useKey
} from 'rooks';

const Interface = () => {

    const [store, setStore] = useContext(StoreContext);

    const ws = useRef(null);
    const inputRef = useRef(null);

    useEffect(()=>{
        ws.current = new WebSocket(`ws://localhost:3000/websockets`);
    }, [])
    
    const [set, setState] = useState({
        heroName: '',
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
                ws.current.send(JSON.stringify({"name":set.heroName,"message": textInput}));
            }
            SetTextInput('');
            setChatOpen(false);
        }else{
            setChatOpen(true);
            inputRef.current.focus();
        }
        
    }

    useEffect(() => {

        let url = `http://localhost:3000/getProtagonist?id=${store.player.playerId}`;

        Read(url)
            .then(items => {

                if (items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name,
                        img: `assets/images/characters/${items.protagonist[0].img}.png`                      
                    }));

                    setStore(store => ({
                        ...store, 
                        player: {
                            ...store.player,
                            playerLevel: items.protagonist[0].level,
                            playerHp: items.protagonist[0].health,
                            playerMaxHp: items.protagonist[0].maxHealth,
                            playerDps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2,
                            playerExp: items.protagonist[0].experience,
                            str: items.protagonist[0].strength,
                            int: items.protagonist[0].intellect,
                            dex: items.protagonist[0].dexterity,
                            playerPoints: items.protagonist[0].points,
                        }
                        
                    }))
                } 
            })
    }, [])

    useEffect(() => {
        const url = `http://localhost:3000/updateStats`;

        const data = {
            id: store.player.playerId,
            attribute: {
                str: store.player.str,
                int: store.player.int,
                dex: store.player.dex
            },
            exp: store.player.playerExp,
            level: store.player.playerLevel,
            hp: store.player.playerHp,
            maxHp: store.player.playerMaxHp,
            points: store.player.playerPoints,
        }

        if (store.player.playerLevel > 0) {
            Update(url, data);
        }
            
    }, [store.player]);

    useEffect(() => {
        if(store.player.playerExp > 0){
            updateLevel();
        }
        
    }, [store.player.playerExp]);

    const updateLevel = () => {
     
        let points = store.player.playerPoints;
        let lvl = store.player.playerLevel;
        let nextLevel = lvl + 1;
        let formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);

        while (store.player.playerExp >= formulaLevel) {
            lvl++;
            nextLevel++;
            points++;
            formulaLevel = (50 * nextLevel ** 3 / 3 - 100 * nextLevel ** 2 + 850 * nextLevel / 3 - 200);
        }
        
        setStore((store)=>({
            ...store,
            player: {
                ...store.player,
                playerPoints: points,
                playerLevel: lvl
            }
        }))
    }

    const handleKeyCharacterSheet = (event) => {
        if (event.key === 'c' && !chatOpen) {
            if(store.map.showCharacterSheet){
                setStore(store => ({
                    ...store,
                    map: {
                        ...store.map,
                        showCharacterSheet: false
                    }
                }))
            }else{
                setStore(store => ({
                    ...store,
                    map: {
                        ...store.map,
                        showCharacterSheet: true
                    }
                }))
            }
            
        }
    }

    const handleMouseClick = (event) => {
        event.preventDefault();
        if (event.type === 'click' && store.enemy.enemyHp > 0) {
            console.log('left');
            
            const playerText = createElement(
                'p', {
                    key: 'combatScrollPlayer',
                    className: 'combatScrollPlayer combatScrollAnimation'
                },
                store.player.playerDps
            )

            setStore(store => ({
                ...store,
                combat: {
                    ...store.combat,
                    text: playerText
                },
                player: {
                    ...store.player,
                    playerCanAttack: false,
                    playerAttack: true,
                },
                enemy: {
                    ...store.enemy,
                    enemyAttack: false,
                    enemyHp: store.enemy.enemyHp -= store.player.playerDps
                }
            }))

            setTimeout(() => {
                setStore(store => ({
                    ...store,
                    player: {
                        ...store.player,
                        playerCanAttack: true,
                        playerAttack: false,
                    },
                    combat: {
                        ...store.combat,
                        text: null
                    },
                }))
            }, 1500)


        } else if (event.type === 'contextmenu') {
            console.log('right');
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
            onContextMenu = {handleMouseClick}>
                <div className='avatar'> 
                    <img src={set.img} /> 
                </div>
                <div className='heroName'>{set.heroName}</div>
                <div className='level'>
                    {
                        store.player.playerLevel
                    }
                </div>
                <HealthBar />
                <ExpBar />
                <ManaBar />
                <PlayerMovement />
                       
                <div className='coords'>X: {store.coords.x} Y: {store.coords.y}</div>
  
                {
                    (store.map.showCharacterSheet) ? <CharacterSheet /> : <></>
                }

                <div key={'playerShield'} className={`playerShield ${(store.player.block) ? 'block' : ''}`}>
                    <img src='assets/images/gui/shield.png'/>
                </div>

                <div key={'playerWeapon'} className={`playerWeapon ${(store.player.playerAttack) ? 'swing' : ''}`}>
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