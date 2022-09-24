export const LoadingTip = async (knex, res) => {
    try {
        await knex.select('sentence')
        .orderByRaw('RAND()')
        .limit(1)
        .from('game_loading').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .header('Access-Control-Allow-Origin', '*')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}