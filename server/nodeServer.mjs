import mySQL from 'mysql';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import websockets from './websocket/websocket.mjs';

//api
import { getQuest } from './api/quest.mjs';
import { getProtagonist, getAllProtagonist, createProtagonist, updateStatsProtagonist } from './api/protagonist.mjs';
import { getAdventure } from './api/adventure.mjs';
import { getEnemy } from './api/enemy.mjs';
import { getLevel, createLevel, getAllLevels, updateLevel } from './api/level.mjs'
import { LoadingTip } from './api/loading.mjs';

//env
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

//connection
const HOST = process.env.REACT_APP_DB_HOST;
const USER = process.env.REACT_APP_DB_USER;
const PASS = process.env.REACT_APP_DB_PASS;
const BASE = process.env.REACT_APP_DB_DATABASE;
const PORT = process.env.REACT_APP_PORT || 3000;

const con = mySQL.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: BASE
})

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
const server = app.listen(PORT, () => {
    console.log(`Game listening on port ${PORT}!`);
});

//WEBSOCKET
websockets(server);