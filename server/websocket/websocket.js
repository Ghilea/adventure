export const Websockets = (app) => {
  app.addHook("preValidation", async (request, reply) => {
    if (request.routerPath === "/ws" && !request.query.username) {
      reply.code(403).send("Connection rejected");
    }
  });

  app.get("/ws", { websocket: true }, (connection, req) => {
    const ClientBroadcast = (message) => {
      for (let client of app.websocketServer.clients) {
        client.send(JSON.stringify(message));
      }
    };

    const ServerBroadcast = (message) => {
      for (let server of app.websocketServer.clients) {
        console.log(JSON.stringify(message));
      }
    };

    //new user
    console.log(`client connected ${req.query.username}`);

    /*ClientBroadcast({
            sender: '__server',
            message: `${req.query.username} joined`
        });*/

    //user leave
    connection.socket.on("close", () => {
      console.log("Client disconnected");
      /*ClientBroadcast({
                sender: '__server',
                message: `${req.query.username} left`
            });*/
    });

    //broadcast incoming message
    connection.socket.on("message", (message) => {
      message = JSON.parse(message.toString());
      ClientBroadcast({
        sender: req.query.username,
        ...message,
      });
    });

    //send
    connection.socket.send(`Hello ${req.query.username}!`);

    //client message
    connection.socket.on("message", (message) => {
      console.log(`Client message: ${message}`);
      //connection.socket.send(`Client message: ${message}`)
    });
  });
};
