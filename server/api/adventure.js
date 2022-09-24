export const getAdventure = (con, res, x, y) => {
        con.connect((err) => {
            con.query(`SELECT * FROM areas WHERE Xpos=${x} AND Ypos =${y}`, (err, result, fields) => {
                const enemies = ((Math.random() * 1) < 0.5);

                const content = (result.length > 0) ? true : false;
                res.status(200).json({result, enemies, content})
            })
        })
    }