/**
 * Routes for express app
 */
var _ = require('lodash');
var App = require('../../public/assets/app.server');

module.exports = function (app) {

    // This is where the magic happens. We take the locals data we have already
    // fetched and seed our stores with data.
    // App is a function that requires store data and url to initialize and return the React-rendered html string
    app.get('*', function (req, res, next) {
        App(req, res);
    });

};
