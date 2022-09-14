export const LoadingTip = (con, res) => {
    con.connect((err) => {
        con.query(`SELECT 
        sentence FROM game_loading ORDER BY RAND() LIMIT 1`, (err, result, fields) => {
            res.status(200).json(result)
        })

    })
}