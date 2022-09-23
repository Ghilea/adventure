import Knex from 'knex';
import { CreateTable } from './createTable.js';

export const createDatabase = async() => {

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

    //drop database
    knex.raw('DROP DATABASE IF EXISTS', database);
    
    //create database if its not exists already
    await knex.raw('CREATE DATABASE IF NOT EXISTS ??', database);

    //add database
    conn.database = database;

    //update knex object with know database
    knex = Knex({
        client: 'mysql',
        connection: conn
    })

    CreateTable(knex);
}