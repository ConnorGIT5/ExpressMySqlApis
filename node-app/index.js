// // this event is built into node

// process.on('exit', function(){   // "on" = listneing to the event. "exit"=the event that's emitted when a process ends. "function()"= a callback function that runs when an 'exit' occurs

// })

// // building an event from scratch
// // importing an event emitter from the events module that's already in node
// const { EventEmitter } = require('events');
// // creating our own eventEmitter by creating a new class
// const eventEmitter = new EventEmitter();
// // making a callback that is executed on the 'lunch' event
// eventEmitter.on('lunch', () => {

//     console.log("here's lunch: 🥨")
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

// console.log('hello, user!');

// importing two functions from the file system module
// if a function ends in 'sync', it's blocking, which means it needs to finish all it's work before any other code can run
// const { readFile, readFileSync } = require('fs');

// reading a text file in node by passing a path to the file and categorizing the code as utf-8
// const txt = readFileSync('./hi.txt', 'utf8');

// // this message below won't run first because the 'sync' is blocking

// console.log(txt);
// console.log("Make sure this runs first ⚠️");

// refactornig the code as a call-back to prevent blocking. 'err'= the error object. 'txt'= the txt object
// readFile('./hi.txt', 'utf-8', (err, txt) => {
//     console.log(txt)  
// });

// console.log("Make sure this runs first ⚠️");

// promises: asyncronous and non-blocking

// const { readFile } = require('fs').promises;  // '.promises' is a namespace

// async function hello() {
//     const file = await readFile('./hi.txt', 'utf8');
// };

// 'require' imports the 'myModule' object
// const myModule = require('./my-module');

// console.log(myModule)

const express = require('express');

// creating an instance of the express app
const app = express();

// '.get': when a user goes to a server, they will see the contents. They will not add or update anything to the server
// request: user's incoming data    response: user's outgoing data

// const fs = require('fs');
//     // gotta import the 'node filesystem' in order to use 'readFile'

// app.get('/', (request, response) => {

//     fs.readFile('./home.html', 'utf8', (err, html) => {

//         if (err) {
//             response.status(500).send('sorry, error with our servers 😥')
//         }

//         response.send(html);
//     })

// });

// !!!!!!!!!!!!!!!!!!!! avoiding callback hell !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Use promises instead of callbacks

const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    
    response.send( await readFile('./home.html', 'utf8'));
})



app.listen(process.env.PORT || 3000, () => console.log("app available on http://localhost:3000"))