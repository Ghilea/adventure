export const getLevel = async (knex, res, id) => {
    try {
        await knex.select('id', 'title', 'level', 'content')
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
            level: req.body.level || 0,
            title: req.body.title
        })
        .into('levels')
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

export const updateLevel = async (knex, req, res) => {
    try {
        await knex.update({
            content: req.body.content,
            level: req.body.level,
            title: req.body.title
        })
        .where({'id': req.body.id})
        .into('levels')
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}