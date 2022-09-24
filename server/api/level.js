export const getLevel = (con, res, id) => {
    con.connect((err) => {
        con.query(`SELECT content FROM levels WHERE id = ${id}`, (err, result, fields) => {
            res.status(200).json(result)
        })
    })
}

export const getAllLevels = (con, res) => {
    con.connect((err) => {
        con.query(`SELECT id, title, level, content FROM levels`, (err, result, fields) => {
            res.status(200).json(result)
        })
    })
}

export const createLevel = (con, req, res) => {
    con.connect((err) => {
        con.query(`INSERT INTO levels SET content = '${req.body.data.content}'`)
        res.send('New level added')
    })
}

export const updateLevel = (con, req, res) => {
    con.connect(function (err) {
        con.query(`UPDATE levels SET title = '${req.body.data.title}', level = '${req.body.data.level}' WHERE id = ${req.body.data.id}`)
        res.send('Level updated')
    })
}