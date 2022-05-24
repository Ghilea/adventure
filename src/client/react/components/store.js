import create from 'zustand';

export const player = create(set => ({
    id: 1,
    hp: 1,
    maxHp: 0,
    mana : 0,
    maxMana: 0,
    dps: 0,
    exp: 0,
    level: 0,
    points: 0,
    str: 0,
    int: 0,
    dex: 0,
    attack: false,
    canAttack: true,
    block: false,
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
    setPoints: (points) => set(state => ({
        ...state,
        points: points
    })),
    updatePoints: (points, str, int, dex) => set(state => ({
        points: points,
        str: str,
        int: int,
        dex: dex,
        dps: (str + int + dex) / 2
    })) 
}))

export const coords = create(set => ({
    x: 0,
    y: 0
}))

export const map = create(set => ({
    level: 1,
    playerPosition: [0, 0, 0],
    walking: false,
    showCharacterSheet: false,
    characterSheet: (value) => set(state => ({
        ...state, 
        showCharacterSheet: value
    })),
    setPlayerPosition: (position) => set(state => ({
        ...state,
        playerPosition: position
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

export const movement = create(set => ({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    Jump: false
}))

export const menu = create(set => ({
    showCreate: false,
    login: false,
    createWindow: (value) => set(state => ({
        ...state,
        showCreate: value
    })),
    isLogin: (value) => set(state => ({
        ...state,
        login: value
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