export const getLevel = async (knex, res, id) => {
    try {
        await knex.select('title', 'level', 'content')
        .where('id', id)
        .from('levels').then((query) => {
            return res.code(200).send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const getAllLevels = async (knex, res) => {
    try {
        await knex.select('id', 'title', 'level', 'content')
        .from('levels').then((query) => {
            return res.code(200).send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const createLevel = async (knex, req, res) => {
    try {
        await knex.insert({
            content: req.body.content,
            level: req.body.level,
            title: req.body.title
        })
        .into('levels')
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const updateLevel = (con, req, res) => {
    con.connect(function (err) {
        con.query(`UPDATE levels SET title = '${req.body.data.title}', level = '${req.body.data.level}' WHERE id = ${req.body.data.id}`)
        res.send('Level updated')
    })
}