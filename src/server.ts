// import http from 'http';
// import * as http from 'http';

import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import { mainContent } from './content.js';

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
