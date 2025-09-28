// import { camelCase } from 'lodash-es';
import { camelCase } from 'lodash';

const message = 'welcome to the Context.ts page!';
const messageInCamelCase = camelCase(message);

export const mainContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Info Site</title>
    <style>
      body {
        background-color: #333;
        color: #ddd;
        font-family: sans-serif;
        padding: 0 1rem;

        p{
          span{
            color:yellow;
            font-size:large
          }
        }
      }
    </style>
  </head>
  <body>
    <h1>Info Site</h1>
    <p>Hi, <span> ${messageInCamelCase}</span></p>
  </body>
</html>
`;
