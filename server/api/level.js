export const getLevel = async (knex, res, id) => {
    try {
        await knex.select('content')
        .where('id', x)
        .from('levels').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const getAllLevels = async (knex, res) => {
    try {
        await knex.select('id', 'title', 'level', 'content')
        .from('levels').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
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