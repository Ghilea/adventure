import {WebSocketServer} from 'ws'

const Socket = (server) => {
    const wss = new WebSocketServer({
        noServer: true,
        path: '/websockets'
    });
    const clients = new Map();

    server.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (WebSocketServer) => {
            wss.emit('connection', WebSocketServer, request);
            console.log('New client connection');
            clients.set(WebSocketServer);
        })
    })

    wss.on('connection', (websocketConnection, connectionRequest) => {
        //const [_path, params] = connectionRequest?.url?.split('?');
        //const connectionParams = new URLSearchParams(params);
        //console.log(connectionParams);

        websocketConnection.on('message', message => {
            
            const parsedMessage = JSON.parse(message);
            console.log(parsedMessage);
            
            [...clients.keys()].forEach((client) => {
                client.send(JSON.stringify({
                    message: parsedMessage
                }))
            })
            
        })
    })

    return wss;
}

export default Socket;