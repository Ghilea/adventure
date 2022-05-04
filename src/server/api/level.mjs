export const getLevel = (con, res, id) => {
    con.connect((err) => {
        con.query(`SELECT wall FROM levels WHERE id = ${id}`, (err, result, fields) => {
            res.status(200).json({
                'level': result
            })
        })
    })
}