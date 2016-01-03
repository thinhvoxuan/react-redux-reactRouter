var express = require('express');
var fs = require('fs');
var secrets = require('./config/secrets');
var webpack = require('webpack');
var config = require('../webpack/webpack.config.dev.js');
var app = express();
var compiler = webpack(config);

var isDev = process.env.NODE_ENV === 'development';
if (isDev) {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

// Bootstrap application settings
require('./config/express')(app);
// Bootstrap routes
require('./config/routes')(app);

app.listen(app.get('port'));
