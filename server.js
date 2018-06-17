const Koa = require('koa');
const mongoose = require('mongoose');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const send = require('koa-send');
const compress = require('koa-compress');
const routes = require('./routes');
const config = require('./config');
const path = require('path');

// Make mongoose use native ES6 promises
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(config.database.url, config.database.opts);

// Koa
/* eslint-disable */
const app = new Koa()
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(compress({
    filter: function (content_type) {
       return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }))
  .use(serve(path.join(__dirname, '/client/dist')))
  .use(routes)
  .use(function* index() {
    yield send(this, '/client/dist/index.html');
  });
/* eslint-enable */
const server = app.listen(config.server.port);

module.exports = server;
