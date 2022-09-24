import Knex from 'knex';
import Fastify from 'fastify';
import cors from 'cors';
import dotenv from 'dotenv'
import websockets from './websocket/websocket.js';
import { Api } from './Api.js';

//env
dotenv.config();
const app = Fastify({ logger: false });

/*app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
*/
//create connection
const knex = Knex({
    client: 'mysql',
    connection: {
        host: process.env.VITE_DB_HOST,
        user: process.env.VITE_DB_USER,
        password: process.env.VITE_DB_PASS,
        database: process.env.VITE_DB_DATABASE
    }
});

Api(app, knex);

const startServer = async () => {
    try {
        await app.listen({port: process.env.VITE_PORT}).then(()=>{
            //websockets(server);

            console.log(`Server online (port: ${process.env.VITE_PORT})`);
        })

    } catch (err){
        console.error(`Error: ${err}`);
        process.exit(1);
    }

}

startServer();