export const LoadingTip = async (knex, res) => {
    try {
        await knex.select('sentence')
        .orderByRaw('RAND()')
        .limit(1)
        .from('game_loading').then((query) => {
            return res.code(200).send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}