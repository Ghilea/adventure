export const getProtagonist = (con, res, id) => {
    con.connect(function (err) {
        con.query(`SELECT name, experience, level, points, img, health, maxHealth, strength, intellect, dexterity FROM protagonist JOIN stats ON stats.id = stats_id WHERE protagonist.id =${id}`, (err, result, fields) => {
            res.status(200).json({
                'protagonist': result
            })
        })
    })
}

export const getAllProtagonist = (con, res) => {
    con.connect(function (err) {
        con.query(`SELECT protagonist.id, name, experience, img, level, health, maxHealth, strength, intellect, dexterity FROM protagonist JOIN stats ON stats.id = stats_id`, (err, result, fields) => {
            res.status(200).json({
                'protagonist': result
            })
        })

    })
}
    
export const createProtagonist = (con, req, res) => {
    con.connect(function (err) {
        con.query(`INSERT INTO stats SET health = 50, maxHealth = 50, strength = ${req.body.data.str}, dexterity = ${req.body.data.dex}, intellect = ${req.body.data.int}, points = ${req.body.data.points}`, (err, result, fields) => {
            con.query(`INSERT INTO protagonist SET name = '${req.body.data.name}', img = '${req.body.data.img}', stats_id = ${result.insertId}`)
        })
        res.send('skapade en protagonist')
    })
}

export const updateStatsProtagonist = (con, req, res) => {
    con.connect(function (err) {
        con.query(`UPDATE stats INNER JOIN protagonist ON stats_id = stats.id SET strength = ${req.body.data.attribute.str}, intellect = ${req.body.data.attribute.int}, dexterity = ${req.body.data.attribute.dex}, health = ${req.body.data.hp}, maxHealth = ${req.body.data.maxHp}, experience = ${req.body.data.exp}, level = ${req.body.data.level}, points = ${req.body.data.points} WHERE protagonist.id = ${req.body.data.id}`)
        res.send('uppdaterade stats')
    })
}