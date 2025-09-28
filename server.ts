// import http from 'http';
// import * as http from 'http';

const http = require('http');
import { IncomingMessage, ServerResponse } from 'http';
const { mainContent } = require('./content');

const port = 8000;

http
  .createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('info site');
    res.write(mainContent);
    res.end();
  })
  .listen(port);

console.log(`listening on http://localhost:${port}`);
