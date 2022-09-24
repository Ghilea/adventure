import { getQuest } from './api/quest.js';
import { getProtagonist, getAllProtagonist, createProtagonist, updateStatsProtagonist } from './api/protagonist.js';
import { getEnemy } from './api/enemy.js';
import { getLevel, createLevel, getAllLevels, updateLevel } from './api/level.js'
import { LoadingTip } from './api/loading.js';

export const Api = (app, knex) => {

     //get
    app.get('/', () => {

        return `
        | Api links [Get] |

        Get levels by id: /getLevel?id=[id]

        Get all levels: /getAllLevels

        Get quest by position of player: /getLevel?xPos=[coord]&yPos=[coord]

        Get enemy: /getEnemy
                
        Get loadingTip: /loadingTip,
        
        Get protagonist by id: /getProtagonist?id=[id]

        Get all protagonist: /getAllProtagonist
        `
    })

    app.get('/getLevel', (req, res) => {
        getLevel(knex, res, req.query.id);
    });

    app.get('/getAllLevels', (req, res) => {
        getAllLevels(knex, res);
    });

    app.get('/getQuest', (req, res) => {
        getQuest(knex, res, req.query.x, req.query.y);
    });

    app.get('/getEnemy', (req, res) => {
        getEnemy(knex, res);
    });

    app.get('/getProtagonist', (req, res) => {
        getProtagonist(knex, res, req.query.id);
    });

    app.get('/getAllProtagonist', (req, res) => {
        getAllProtagonist(knex, res);
    });

    app.get('/loadingTip', (req, res) => {
        LoadingTip(knex, res);
    });

    //put
    app.put('/updateStats', (req, res) => {
        updateStatsProtagonist(knex, req, res);
    });

    app.put('/updateLevel', (req, res) => {
        updateLevel(knex, req, res);
    });

    //post
    app.post('/createProtagonist', (req, res) => {
        createProtagonist(knex, req);
    });

    app.post('/createLevel', (req, res) => {
        createLevel(knex, req, res);
    });
}