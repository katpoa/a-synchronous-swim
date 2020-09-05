const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// var messageQueue = messageQueue;
// module.exports.initialize = (queue) => {
//   messageQueue = queue;
// };
//enqueue?
const commands = ['up', 'down', 'left', 'right'];
module.exports.router = (req, res, next = ()=>{}) => {
  // console.node('Serving request type ' + req.method + ' for url ' + req.url);node .
  console.log('hello from server');

  if (req.method === 'OPTIONS' && req.url === '/') {
    res.writeHead(200, headers);
    res.end();
    next();
  }

  if (req.method === 'GET' && req.url === '/') {
    console.log(messageQueue.messages);
    let random = Math.floor(Math.random() * commands.length);
    res.writeHead(200, headers);
    res.end(messageQueue.dequeue());
    // res.end(commands[random]);

    next();

  }
  //if req.method === post return data
// post the background img
// invoke next() at the end of a request to help with testing!
  if (req.method === 'POST' && req.url === '/') {
    //if the imag is missing
    res.writeHead(404, headers);
    res.end();
    next();

  }
};

