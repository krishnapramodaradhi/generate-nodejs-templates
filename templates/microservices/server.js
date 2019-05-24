const http = require('http');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

http
  .createServer(app)
  .listen(PORT, () => console.log(`Server listening on ${PORT}`));
