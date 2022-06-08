export const getEnemy = (con, res) => {
        con.connect((err) => {
            con.query(`SELECT 
        name, type, experience, level, img, health, maxHealth, strength, intellect, dexterity FROM enemies JOIN stats ON stats.id = stats_id ORDER BY RAND() LIMIT 1`, (err, result, fields) => {
                res.status(200).json({
                    'enemy': result
                })
            })

        })
    }