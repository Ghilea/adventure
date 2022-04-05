const http = require('http');
const mySQL = require("mysql");
const url = require('url');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const con = mySQL.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

app.get('/getAdventure', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    getAdventure(res, req.query.x, req.query.y);
});

app.get('/getEnemy', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    getEnemy(res);
});

app.get('/getProtagonist', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    getProtagonist(res, req.query.id);
});

app.put('/updateStats', (req, res) => {
    updateStats(req, res);
});


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);

const getAdventure = (res, x, y) => {
    con.connect((err) => {
         con.query(`SELECT * FROM areas WHERE Xpos=${x} AND Ypos =${y}`, (err, result, fields) => {
            const enemies = ((Math.random() * 1) < 0.5);
    
            const content = (result.length > 0) ? true : false;
            res.status(200).json({
                'adventure': result, enemies, content
            })         
        })
    })
}

const getEnemy = (res) => {
    con.connect((err) => {
        con.query(`SELECT name, type, experience, img, health, strength, intellect, dexterity FROM enemies JOIN stats ON stats.id = stats_id ORDER BY RAND() LIMIT 1`, (err, result, fields) => {
            res.status(200).json({
                'enemy':result
            })
        })

    })
}

const getProtagonist = (res, id) => {
    con.connect(function (err) {
        con.query(`SELECT protagonist.id, name, experience, img, health, strength, intellect, dexterity FROM protagonist JOIN stats ON stats.id = stats_id WHERE protagonist.id =${id}`, (err, result, fields) => {
            res.status(200).json({
                'protagonist':result
            })
        })

    })
}

const updateStats = (req, res) => {
    con.connect(function (err) {
        con.query(`UPDATE stats SET strength = ${req.body.data.attribute.str}, intellect = ${req.body.data.attribute.int}, dexterity = ${req.body.data.attribute.dex}, health = ${req.body.data.hp}, experience = ${req.body.data.exp} WHERE id = ${req.body.data.id}`)
        res.send('uppdaterade stats')
    })
}
