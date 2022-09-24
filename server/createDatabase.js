import Knex from 'knex';
import dotenv from 'dotenv'
import { CreateTable } from './sql/createTable.js';

dotenv.config();

const CreateDabase = async () => {

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
    await knex.raw('CREATE DATABASE IF NOT EXISTS ??', database);

    //add database
    conn.database = database;

    //update database connection
    knex = Knex({
        client: 'mysql',
        connection: conn
    })

    const result = CreateTable(knex);
    
    console.log(result)

    /*if(result){
        process.exit() 
    }*/

}

CreateDabase();

