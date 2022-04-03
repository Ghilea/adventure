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

app.get('/updateStats', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    updateStats(res);
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

const updateStats = (res) => {
    con.connect(function (err) {
        //con.query(`UPDATE stats SET ${data.attribute} = ${data.value} WHERE id = ${data.id}`)
        res.status(201);
    })
}

const updateExperience = (res, id, data) => {
    con.connect(function (err) {
        con.query(`UPDATE protagonist SET experience = ${data.exp} WHERE id = ${id}`, (err, result, fields) => {
            res.status(200).json({
                'experience': result
            })
        })
    })
}