import Knex from 'knex';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import websocketPlugin from '@fastify/websocket';
import dotenv from 'dotenv'
import { Websockets } from './websocket/websocket.js';
import { Api } from './Api.js';

dotenv.config();

const app = Fastify({ logger: false });

const host = process.env.VITE_DB_HOST;
const user = process.env.VITE_DB_USER;
const pass = process.env.VITE_DB_PASS;
const db = process.env.VITE_DB_DATABASE;
const port = process.env.VITE_PORT;

//create connection
const knex = Knex({
    client: 'mysql',
    connection: {
        host: host,
        user: user,
        password: pass,
        database: db
    }
});

await app.register(cors, {})

await app.register(websocketPlugin, {
    options: {
        maxPayload: 1048576
    }
})

Websockets(app);

Api(app, knex);

const startServer = async () => {
    try {
        await app.listen({port: port}).then((address)=>{
            console.log(`Server listening at: ${address}`);
        })
    } catch (err){
        console.error(`Error: ${err}`);
        process.exit(1);
    }
}

startServer();