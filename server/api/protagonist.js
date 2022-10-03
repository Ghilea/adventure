export const getProtagonist = async (knex, res, id) => {
    try {
        await knex.select('name', 'experience', 'level', 'available', 'img', 'health', 'maxHealth', 'strength', 'intellect', 'dexterity', 'constitution', 'wisdom', 'charisma')
        .join('stats', 'protagonist.stats_id', 'stats.id')
        .where('protagonist.id', id)
        .from('protagonist').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const getAllProtagonist = async (knex, res) => {
    try {
        await knex.select('protagonist.id', 'name', 'experience', 'level', 'gender', 'available', 'img', 'health', 'maxHealth', 'strength', 'intellect', 'dexterity', 'constitution', 'wisdom', 'charisma')
        .join('stats', 'protagonist.stats_id', 'stats.id')
        .from('protagonist').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}
    
export const createProtagonist = async (knex, req) => {
    try {
        await knex.insert({
            health: req.body.hp, 
            maxHealth: req.body.maxHp, 
            strength: req.body.str,
            intellect: req.body.int,
            dexterity: req.body.dex,
            constitution: req.body.con,
            wisdom: req.body.wis,
            charisma: req.body.cha,
            points: req.body.points
        })
        .into('stats').then(async (id) => {
            await knex.insert({
                name: req.body.name,
                img: req.body.img,
                gender: req.body.gender,
                stats_id: id
            })
            .into('protagonist')
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const updateStatsProtagonist = async (knex, req, res) => {
    try {
        await knex.update({
            health: req.body.state.health, 
            maxHealth: req.body.state.maxHealth,
            mana: req.body.state.mana, 
            maxMana: req.body.state.maxMana,
            strength: req.body.attribute.strength,
            intellect: req.body.attribute.intellect,
            dexterity: req.body.attribute.dexterity,
            constitution: req.body.attribute.constitution,
            wisdom: req.body.attribute.wisdom,
            charisma: req.body.attribute.charisma,
            available: req.body.attribute.available,
            experience: req.body.experience.points,
            level: req.body.experience.level
        })
        .where({'id': req.body.id})
        .into('stats').then(async (id) => {
            await knex.update({
                name: req.body.name,
                img: req.body.img,
                gender: req.body.gender,
                stats_id: id
            })
            .where({'stats_id': req.body.id})
            .into('protagonist')
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
    /*con.connect(function (err) {
        con.query(`UPDATE stats INNER JOIN protagonist ON stats_id = stats.id SET strength = ${req.body.data.attribute.str}, intellect = ${req.body.data.attribute.int}, dexterity = ${req.body.data.attribute.dex}, health = ${req.body.data.hp}, maxHealth = ${req.body.data.maxHp}, experience = ${req.body.data.exp}, level = ${req.body.data.level}, points = ${req.body.data.points} WHERE protagonist.id = ${req.body.data.id}`)
        res.send('Stats updated')
    })*/
}