// import { camelCase } from 'lodash-es';
import { camelCase } from 'lodash';
import axios from 'axios';

interface Noun {
  article: string;
  singular: string;
  plural: string;
}

// const noun = {
//   article: '',
//   singualr: '',
//   plural: '',
// };

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

// const options = {
//   method: 'GET',
//   url: url,
//   headers: {
//     'Accept-Encoding': 'application/json',
//   },
// };

let nouns: Noun[] = [];
let nouns2: Noun[] = [];

let isDataAvailable = false;

export const loadNouns = async () => {
  nouns = (await axios.get(url)).data;
  // console.log(nouns);
  if (nouns !== null) {
    isDataAvailable = true;
    console.log(isDataAvailable);
  }
  return nouns;
};

loadNouns();

setTimeout(() => {
  nouns2 = nouns;
  console.log(nouns2);
  isDataAvailable = true;
  console.log(isDataAvailable);
}, 500);

// if (isDataAvailable) {
//   console.log(isDataAvailable);
//   console.log(nouns2);
// }
const message = 'welcome to the Context.ts page!';
const messageInCamelCase = camelCase(message);

let mainContent = '';

setTimeout(() => {
  mainContent = `<!DOCTYPE html>
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
            <p>Welcome to this infor Site!</p>
            <p>Hi, <span> ${messageInCamelCase}</span></p>
            <h2>Nouns</h2>
            ${
              isDataAvailable
                ? nouns2
                    .map((noun) => {
                      return `<div class="noun">
            <div class="singular">${noun.article} ${noun.singular}</div>
      </div>`;
                    })
                    .join('')
                : 'nnnn'
            }
        
        </body>
        </html>
        `;
}, 500);

export { mainContent };
