const http = require('http');
const mySQL = require("mysql");
const url = require('url');

const con = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'adventure'
})

http.createServer((req, res) => {
    
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });
    
    //route
    if (new url.parse(req.url, true).pathname === "/adventure") {
        getAdventure(res, url.parse(req.url, true).query.x, url.parse(req.url, true).query.y);
    } else if (new url.parse(req.url, true).pathname === "/allAdventures") {
        getAllAdventures(res);
    } else if (new url.parse(req.url, true).pathname === "/getProtagonist") {
        getProtagonist(res, url.parse(req.url, true).query.id);
    }else{
        res.end('inget');
    }

}).listen(1234);


function getAdventure(res, x, y) {

    con.connect(function(err) {

        con.query(`SELECT * FROM areas WHERE Xpos=${x} AND Ypos =${y}`, function(err, result, fields){

            const enemies = ((Math.random() * 1) < 0.5);

            res.end(JSON.stringify({
                'adventure': {result, 'enemies': enemies}
            }))
            
                    
        })

    })
}

function getProtagonist(res, id) {

    con.connect(function (err) {

        con.query(`SELECT protagonist.id, name, experience, img, health, strength, intellect, dexterity FROM
                protagonist JOIN stats ON stats.id = stats_id WHERE protagonist.id =${id}`,
                function (err, result, fields) {

            res.end(JSON.stringify({
                'protagonist': {
                    result
                }
            }))


        })

    })
}

function getAllAdventures(res) {

    con.connect(function (err) {

        con.query(`SELECT * FROM areas`, function (err, result, fields) {

            res.end(JSON.stringify({
                'adventure': {
                    result
                }
            }))


        })

    })
}