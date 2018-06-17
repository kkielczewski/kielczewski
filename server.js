const Koa = require('koa');
const mongoose = require('mongoose');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const send = require('koa-send');
const routes = require('./routes');
const config = require('./config');
const path = require('path');

// Make mongoose use native ES6 promises
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(config.database.url, config.database.opts);

// Koa
const app = new Koa()
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(routes)
  .use(serve(path.join(__dirname, '/client/dist')))
  .use(function* index() {
    yield send(this, '/client/dist/index.html');
  });

const server = app.listen(config.server.port);

module.exports = server;
