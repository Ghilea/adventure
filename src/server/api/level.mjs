export const getLevel = (con, res, id) => {
    con.connect((err) => {
        con.query(`SELECT content FROM levels WHERE id = ${id}`, (err, result, fields) => {
            res.status(200).json({
                'level': result
            })
        })
    })
}

export const getAllLevels = (con, res) => {
    con.connect((err) => {
        con.query(`SELECT title, level, content FROM levels`, (err, result, fields) => {
            res.status(200).json({
                'levels': result
            })
        })
    })
}

export const createLevel = (con, req, res) => {
    con.connect((err) => {
        con.query(`INSERT INTO levels SET content = '${req.body.data.content}'`)
        res.send('La till en ny level')
    })
}