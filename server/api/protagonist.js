export const getProtagonist = async (knex, res, id) => {
    try {
        await knex.select('name', 'experience', 'level', 'points', 'img', 'health', 'maxHealth', 'strength', 'intellect', 'dexterity', 'constitution', 'wisdom')
        .join('stats', 'protagonist.stats_id', 'stats.id')
        .where('protagonist.id', id)
        .from('protagonist').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .header('Access-Control-Allow-Origin', '*')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const getAllProtagonist = async (knex, res) => {
    try {
        await knex.select('protagonist.id', 'name', 'experience', 'level', 'gender', 'points', 'img', 'health', 'maxHealth', 'strength', 'intellect', 'dexterity', 'constitution', 'wisdom')
        .join('stats', 'protagonist.stats_id', 'stats.id')
        .from('protagonist').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .header('Access-Control-Allow-Origin', '*')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}
    
export const createProtagonist = async (knex, req) => {
    try {
        await knex.insert({
            health: 50, 
            maxHealth: 50, 
            stength: req.str,
            intellect: req.int,
            dexterity: req.dex,
            constitution: req.con,
            wisdom: req.wis,
            charisma: req.cha,
            points: req.points
        })
        .returning('id')
        .into('stats').then((id) => {
            knex.insert({
                name: req.name,
                img: req.img,
                stats_id: id
            })
            .into('protagonist')
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const updateStatsProtagonist = (con, req, res) => {
    con.connect(function (err) {
        con.query(`UPDATE stats INNER JOIN protagonist ON stats_id = stats.id SET strength = ${req.body.data.attribute.str}, intellect = ${req.body.data.attribute.int}, dexterity = ${req.body.data.attribute.dex}, health = ${req.body.data.hp}, maxHealth = ${req.body.data.maxHp}, experience = ${req.body.data.exp}, level = ${req.body.data.level}, points = ${req.body.data.points} WHERE protagonist.id = ${req.body.data.id}`)
        res.send('Stats updated')
    })
}