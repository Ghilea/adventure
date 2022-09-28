import create from 'zustand';

export const message = create(set => ({
    visible: false,
    setMessage: (value) => set(state => ({
        visible: value,
    }))
}))

export const player = create(set => ({
    id: 1,
    gender: null,
    experience: {
        level: null,
        points: null
    },
    state: {
        maxHealth: null,
        health: null,
        maxMana: null,
        mana: null,
    },
    coreStats: {
        available: 0,
        strength: 0, //is how hard you hit something, how much you can carry, and how well you tend to do with strength based skill checks.
        intellect: 0, //is how smart you are. It’s that simple really – Intelligence is usually academic intelligence – so how much you know about things.
        dexterity: 0, //s how hard you hit something, how much you can carry, and how well you tend to do with strength based skill checks.
        constitution: 0, //is around your actual fortitude as a player. It is the stat that has a direct effect on your hit points, as well as your resistance to poisoning, how fast you sober up, and the likes.
        wisdom: 0, // is knowing about the world around you as well as how perceptive you are. It determines what you naturally notice.
        charisma: 0 // is how good you are with people. It is how good you are at persuading people you are a good guy or how well you get on with NPCs.
    },
    secondaryStats: {
        block: 0,
        movementSpeed: 6,
        meleeHit: 0,
        spellHit: 0,
        spellpower: 0,
        weapons: {
            sword: 0,
            axe: 0,
            dagger: 0,
            mace: 0,
            bow: 0,
            crossbow: 0
        }
    },
    combatChecks: {
        acrobatics: 0, //dex
        animalHandling: 0, //wis
        arcana: 0, //int
        athletics: 0, //str
        deception: 0, //cha
        history: 0, //int
        insight: 0, // wis
        intimidation: 0, //cha
        investigation: 0, //int
        medicine: 0, //wis,
        nature: 0, //int
        perception: 0, //wis
        performance: 0, //cha
        persuasion: 0, //cha
        religion: 0, //int
        sleightOfHand: 0, //dex,
        stealth: 0, //dex
        survival: 0 //wis
    },
    setMovementSpeed: (speed) => set(state => ({
        ...state,
        movementSpeed: speed
    })),
    setPlayerId: (id) => set(state => ({
        ...state,
        id: id
    })),
    setPlayer: (level, hp, maxHp, dps, exp, int, dex, str, points) => set(state => ({
        ...state,
        level: level,
        hp: hp,
        maxHp: maxHp,
        dps: dps,
        exp: exp,
        int: int,
        dex: dex,
        str: str,
        points: points

    })),
    isAttack: (attack, hp) => set(state => ({
        ...state,
        attack: attack,
        hp: hp
    })),
    isBlock: (block) => set(state => ({
        ...state,
        block: block
    })),
    allowAttack: (canAttack, attack) => set(state => ({
        ...state,
        canAttack: canAttack,
        attack: attack
    })),
    gainExp: (exp) => set(state => ({
        ...state,
        exp: exp
    })),
    gainLevel: (points, level) => set(state => ({
        ...state,
        points: points,
        level: level
    })),
    setAvailablePoints: (points) => set(state => ({
        ...state,
        coreStats: {
            ...state.coreStats,
            available: points
        }
    })),
    updateCoreStats: (availablePoints, type, usedPoints) => set(state => ({
        ...state,
        coreStats: {
            ...state.coreStats,
            available: availablePoints,
            [type]: usedPoints,
        }
        
    })) 
}))

export const map = create(set => ({
    level: 1,
    playerPosition: null,
    camera: false,
    showCharacterSheet: false,
    chatWindow: true,
    chatInput: false,
    closeChatWindow: (value) => set(state => ({
        ...state,
        chatWindow: value
    })),
    openChat: (value) => set(state => ({
        ...state,
        chatInput: value
    })),
    disableCamera: (value) => set(state => ({
        ...state,
        camera: value
    })),
    characterSheet: (value) => set(state => ({
        ...state, 
        showCharacterSheet: value
    })),
    setPlayerPosition: (position) => set(state => ({
        ...state,
        playerPosition: [position]
    }))
}))

export const enemy = create(set => ({
    hp: 0,
    maxHp: 0,
    dps: 0,
    attack: false,
    exp: 0,
    dead: true,
    setEnemy: (hp, maxHp, exp, dps, dead) => set(state => ({
        ...state,
        hp: hp,
        maxHp: maxHp,
        dps: dps,
        exp: exp,
        dead: dead,
    })),
    isAttack: (attack) => set(state => ({
        ...state,
        attack: attack
    })),
    isDead: (dead) => set(state => ({
        ...state,
        dead: dead
    })),
    gettingHit: (attack, hp) => set(state => ({
        ...state,
        attack: attack,
        hp: hp
    })) 
}))

export const menu = create(set => ({
    create: false,
    options: {
        sound: {
            enable: true,
            volume: 0.8,
            },
        music: {
            enable: true,
            volume: 0.5,
            loop: true
        }
    },
    mapEditor: false,
    login: false,
    loginSuccess: false,
    loadingDone: false,
    startGame: false,
    activeMenu: null,
    changeOptions: (type, type2, value) => set (state => ({
        ...state,
        options: {
            ...state.options,
            [type]: {
                ...state.options[type],
                [type2] : value
            }
        }
    })),
    activateMenu: (value) => set (state => ({
        ...state,
        activeMenu: value,

    })),
    isStartGame: (value) => set(state => ({
        ...state,
        startGame: value
    })),
    isLoadingDone: (value) => set(state => ({
        ...state,
        loadingDone: value
    })),
    isLoginSuccess: (value) => set(state => ({
        ...state,
        loginSuccess: value
    }))
}))

export const quest = create(set => ({
    showQuest: false
}))

export const combat = create(set => ({
    text: null,
    changeText: (text) => set(state => ({
        ...state,
        text: text
    }))
}))