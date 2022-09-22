import mySQL from 'mysql';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import websockets from './websocket/websocket.mjs';

//api
import { getQuest } from './api/quest.mjs';
import { getProtagonist, getAllProtagonist, createProtagonist, updateStatsProtagonist } from './api/protagonist.mjs';
import { getAdventure } from './api/adventure.mjs';
import { getEnemy } from './api/enemy.mjs';
import { getLevel, createLevel, getAllLevels, updateLevel } from './api/level.mjs'
import { LoadingTip } from './api/loading.mjs';

//create database
import { createDatabase } from './sql/createDatabase.mjs';

//env
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//setup database
createDatabase();

const con = mySQL.createConnection({
    host: process.env.VITE_DB_HOST,
    user: process.env.VITE_DB_USER,
    password: process.env.VITE_DB_PASS,
    database: process.env.VITE_DB_DATABASE
})

/*const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.VITE_DB_HOST,
    port : 3306,
    user : process.env.VITE_DB_USER,
    password : process.env.VITE_DB_PASS,
    database : process.env.VITE_DB_DATABASE
  }
});*/

//GET
app.get('/getAdventure', (req, res) => {
    getAdventure(con, res, req.query.x, req.query.y);
});

app.get('/getLevel', (req, res) => {
    getLevel(con, res, req.query.id);
});

app.get('/getAllLevels', (req, res) => {
    getAllLevels(con, res);
});

app.get('/getQuest', (req, res) => {
    getQuest(con, res, req.query.x, req.query.y);
});

app.get('/getEnemy', (req, res) => {
    getEnemy(con, res);
});

app.get('/getProtagonist', (req, res) => {
    getProtagonist(con, res, req.query.id);
});

app.get('/getAllProtagonist', (req, res) => {
    getAllProtagonist(con, res);
});

app.get('/loadingTip', (req, res) => {
    LoadingTip(con, res);
});

//PUT
app.put('/updateStats', (req, res) => {
    updateStatsProtagonist(con, req, res);
});

app.put('/updateLevel', (req, res) => {
    updateLevel(con, req, res);
});

//POST
app.post('/createProtagonist', (req, res) => {
    createProtagonist(con, req, res);
});

app.post('/createLevel', (req, res) => {
    createLevel(con, req, res);
});

//LISTENER
const PORT = process.env.VITE_PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
    console.log(`ApiLink: http://${process.env.VITE_DB_HOST}:${PORT}/loadingTip`);
});

//WEBSOCKET
websockets(server);