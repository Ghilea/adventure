
const getQuest = (con, res, x, y) => {
    con.connect((err) => {
        con.query(`SELECT * FROM quest WHERE Xpos=${x} AND Ypos =${y}`, (err, result, fields) => {
            res.status(200).json({
                'quest': result
            })
        })
    })
}

export {getQuest};