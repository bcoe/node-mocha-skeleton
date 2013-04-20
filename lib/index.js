// I import all of my public modules in index.js
// this simplifies the external interface to the API:
//
// var Hello = require('node-mocha-skeleton').Hello;
//
// vs.
//
// var Hello = require('node-mocha-skeleton/hello').Hello;
exports.Hello = require('./hello').Hello;