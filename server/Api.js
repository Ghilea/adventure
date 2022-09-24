import { getQuest } from './api/quest.js';
import { getProtagonist, getAllProtagonist, createProtagonist, updateStatsProtagonist } from './api/protagonist.js';
import { getAdventure } from './api/adventure.js';
import { getEnemy } from './api/enemy.js';
import { getLevel, createLevel, getAllLevels, updateLevel } from './api/level.js'
import { LoadingTip } from './api/loading.js';

export const Api = (app, knex) => {

    //get
    app.get('/', async () => {
        return {Link: '/loadingTip'}
    });

    app.get('/getAdventure', async (req, res) => {
        getAdventure(knex, res, req.query.x, req.query.y);
    });

    app.get('/getLevel', async (req, res) => {
        getLevel(knex, res, req.query.id);
    });

    app.get('/getAllLevels', async (req, res) => {
        getAllLevels(knex, res);
    });

    app.get('/getQuest', async (req, res) => {
        getQuest(knex, res, req.query.x, req.query.y);
    });

    app.get('/getEnemy', async (req, res) => {
        getEnemy(knex, res);
    });

    app.get('/getProtagonist', async (req, res) => {
        getProtagonist(knex, res, req.query.id);
    });

    app.get('/getAllProtagonist', async (req, res) => {
        getAllProtagonist(knex, res);
    });

    app.get('/loadingTip', async (req, res) => {
        return LoadingTip(knex, res);
    });

    //put
    app.put('/updateStats', async (req, res) => {
        updateStatsProtagonist(knex, req, res);
    });

    app.put('/updateLevel', async (req, res) => {
        updateLevel(knex, req, res);
    });

    //post
    app.post('/createProtagonist', async (req, res) => {
        createProtagonist(knex, req, res);
    });

    app.post('/createLevel', async (req, res) => {
        createLevel(knex, req, res);
    });
}