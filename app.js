const http = require('http');
const app = require('./server');
const config = require('./config');

const serverStartCallback = () => {
    console.log('Web server successfully started at port %d', config.server.port);
};

http.createServer(app)
    .listen(config.server.port, serverStartCallback);