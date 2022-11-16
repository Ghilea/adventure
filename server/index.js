import Fastify from "fastify";
import cors from "@fastify/cors";
import websocketPlugin from "@fastify/websocket";
import dotenv from "dotenv";
import { Websockets } from "./websocket/websocket.js";
import { FetchApi } from "./Api.js";

dotenv.config();

const app = Fastify({ logger: false });

await app.register(cors, {});

await app.register(websocketPlugin, {
  options: {
    maxPayload: 1048576,
  },
});

Websockets(app);

FetchApi(app);

const startServer = async () => {
  try {
    await app.listen({ port: process.env.VITE_PORT }).then((address) => {
      console.log(`Server listening at: ${address}`);
    });
  } catch (err) {
    console.error(`Error: ${err}`);
    process.exit(1);
  }
};

startServer();
