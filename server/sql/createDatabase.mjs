import Knex from 'knex';
import { createEnemies, createLevels, createLoading, createProtagonist, createQuest, createStats } from './createTable.mjs';

export const createDatabase = () => {

    const database = process.env.VITE_DB_DATABASE;
    const conn = {
        host : process.env.VITE_DB_HOST,
        user : process.env.VITE_DB_USER,
        password : process.env.VITE_DB_PASS
    };

    //create connection
    let knex = Knex({
        client: 'mysql',
        connection: conn
    });

    //create database if its not exists already
    knex.raw('CREATE DATABASE IF NOT EXISTS ??', database).then(()=> {
        knex.destroy();
    });

    conn.database = database;

    //update knex object with know database
    knex = Knex({
        client: 'mysql',
        connection: conn
    })
    
    /*con.connect((err) => {
        con.query(`CREATE DATABASE IF NOT EXISTS ${process.env.VITE_DB_DATABASE} DEFAULT CHARACTER SET = 'utf8mb4'`, (err, result) => {
            if (err) throw err;
    
            con.query(`USE ${process.env.VITE_DB_DATABASE};`, (error, results) => {
                if (error) throw error;
                createEnemies(con);
                createLevels(con);
                createLoading(con);
                createProtagonist(con);
                createQuest(con);
                createStats(con);
            });
            
            console.log('Database created');
        })
    })*/
}