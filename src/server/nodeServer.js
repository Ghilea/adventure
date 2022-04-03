const http = require('http');
const mySQL = require("mysql");
const url = require('url');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors());

const con = mySQL.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

app.get('/adventure', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    getAdventure(res, req.query.x, req.query.y);
});

app.get('/allAdventure', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    getAllAdventures(res);
});

app.get('/getProtagonist', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    getProtagonist(res, req.query.id);
});


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);

const getAdventure = (res, x, y) => {

    con.connect((err) => {

         con.query(`SELECT * FROM areas WHERE Xpos=${x} AND Ypos =${y}`, function(err, result, fields){

            const enemies = ((Math.random() * 1) < 0.5);

            const content = (result.length > 0) ? true : false;
            res.end(JSON.stringify({
                'adventure': {result, enemies, content}
            }))
            
                    
        })

    })
}

const getAllAdventures = (res) => {

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

const getProtagonist = (res, id) => {

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