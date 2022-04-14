const mySQL = require("mysql");
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
    getAdventure(res, req.query.x, req.query.y);
});

app.get('/getQuest', (req, res) => {
    getQuest(res, req.query.x, req.query.y);
});

app.get('/getEnemy', (req, res) => {
    getEnemy(res);
});

app.get('/getProtagonist', (req, res) => {
    getProtagonist(res, req.query.id);
});

app.get('/getAllProtagonist', (req, res) => {
    getAllProtagonist(res);
});

app.put('/updateStats', (req, res) => {
    updateStats(req, res);
});

app.post('/createProtagonist', (req, res) => {
    createProtagonist(req, res);
});

app.listen(process.env.PORT, () =>
    console.log(`Adventure listening on port ${process.env.PORT}!`),
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

const getQuest = (res, x, y) => {
    con.connect((err) => {
        con.query(`SELECT * FROM quest WHERE Xpos=${x} AND Ypos =${y}`, (err, result, fields) => {
            res.status(200).json({
                'quest': result
            })
        })
    })
}

const getEnemy = (res) => {
    con.connect((err) => {
        con.query(`SELECT 
        name, type, experience, level, img, health, maxHealth, strength, intellect, dexterity FROM enemies JOIN stats ON stats.id = stats_id ORDER BY RAND() LIMIT 1`, (err, result, fields) => {
            res.status(200).json({
                'enemy':result
            })
        })

    })
}

const getProtagonist = (res, id) => {
    con.connect(function (err) {
        con.query(`SELECT name, experience, level, points, img, health, maxHealth, strength, intellect, dexterity FROM protagonist JOIN stats ON stats.id = stats_id WHERE protagonist.id =${id}`, (err, result, fields) => {
            res.status(200).json({
                'protagonist': result
            })
        })
    })
}

const getAllProtagonist = (res) => {
    con.connect(function (err) {
        con.query(`SELECT protagonist.id, name, experience, img, level, health, maxHealth, strength, intellect, dexterity FROM protagonist JOIN stats ON stats.id = stats_id`, (err, result, fields) => {
            res.status(200).json({
                'protagonist': result
            })
        })

    })
}

const createProtagonist = (req, res) => {
    con.connect(function (err) {
        con.query(`INSERT INTO stats SET health = 50, maxHealth = 50, strength = ${req.body.data.str}, dexterity = ${req.body.data.dex}, intellect = ${req.body.data.int}, points = ${req.body.data.points}`, (err, result, fields) => {
            con.query(`INSERT INTO protagonist SET name = '${req.body.data.name}', img = '${req.body.data.img}', stats_id = ${result.insertId}`)
        })
        res.send('skapade en protagonist')
    })
}

const updateStats = (req, res) => {
    con.connect(function (err) {
        con.query(`UPDATE stats INNER JOIN protagonist ON stats_id = stats.id SET strength = ${req.body.data.attribute.str}, intellect = ${req.body.data.attribute.int}, dexterity = ${req.body.data.attribute.dex}, health = ${req.body.data.hp}, maxHealth = ${req.body.data.maxHp}, experience = ${req.body.data.exp}, level = ${req.body.data.level}, points = ${req.body.data.points} WHERE protagonist.id = ${req.body.data.id}`)
        res.send('uppdaterade stats')
    })
}