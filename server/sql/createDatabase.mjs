import { createEnemies, createLevels, createLoading, createProtagonist, createQuest, createStats } from './createTable.mjs';

export const createDatabase = (mysql) => {
    const con = mysql.createConnection({
        host: process.env.VITE_DB_HOST,
        user: process.env.VITE_DB_USER,
        password: process.env.VITE_DB_PASS
    });

    con.connect((err) => {
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
    })
}