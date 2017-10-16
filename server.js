const http = require('http');
const express = require('express');
import bodyParser from 'body-parser';
import users from './routes/users';
import token from './routes/token';
import dao from './routes/dao';

const app = express();
app.use(bodyParser.json());
const isDevMode = process.env.NODE_ENV === 'development';
const request = require('request')

app.use(require('morgan')('short'));

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./config/webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

// app.get('/test', (req, res) => res.json( { username: "tim" } ) );

app.use('/api/users', users);
app.use('/api/token', token);
app.use('/api/dao', dao);

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});


const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
