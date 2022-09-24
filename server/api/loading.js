export const LoadingTip = async (knex, res) => {
    try {
        await knex.select('sentence')
        .orderByRaw('RAND()')
        .limit(1)
        .from('loadingTip').then((query) => {
            return res.code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .send(query);
        })
        
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}