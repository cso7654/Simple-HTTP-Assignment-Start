const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const strMessage = JSON.stringify({ message: text.hello });

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(strMessage);
  response.end();
};
const getTimeJSON = (request, response) => {
  const strMessage = JSON.stringify({ message: text.getTimeString() });

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(strMessage);
  response.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
