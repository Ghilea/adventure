import create from 'zustand';

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
    ability: {
        available: 0,
        strength: {
            points: 0,
            modifier: -5 
        }, //is how hard you hit something, how much you can carry, and how well you tend to do with strength based skill checks.
        intellect: {
            points: 0,
            modifier: -5
        }, //is how smart you are. It’s that simple really – Intelligence is usually academic intelligence – so how much you know about things.
        dexterity: {
            points: 0,
            modifier: -5
        }, //determines speed. It is how fast you are, as well as how successful you are with ranged attacks.
        constitution: {
            points: 0,
            modifier: -5
        }, //is around your actual fortitude as a player. It is the stat that has a direct effect on your hit points, as well as your resistance to poisoning, how fast you sober up, and the likes.
        wisdom: {
            points: 0,
            modifier: -5
        }, // is knowing about the world around you as well as how perceptive you are. It determines what you naturally notice.
        charisma: {
            points: 0,
            modifier: -5
        } // is how good you are with people. It is how good you are at persuading people you are a good guy or how well you get on with NPCs.
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
        ability: {
            ...state.ability,
            available: points
        }
    })),
    updateAvailable: (available) => set(state => ({
        ...state,
        ability: {
            available: available
        }
    })),
    updateAbility: (available, type, points) => set(state => ({
        ...state,
        ability: {
            ...state.ability,
            available: available,
            [type]: {
                ...state.ability[type],
                points: points,
                modifier: Math.round((points / 2) - 5.5)
            },
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
    login: false,
    loadingDone: false,
    startGame: false,
    activeContent: null,
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
    activateContent: (value) => set (state => ({
        ...state,
        activeContent: value,

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