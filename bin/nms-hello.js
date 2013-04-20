#!/usr/bin/env node
// to execute a bin script we must provide a hint as to Node's bin location.

var optimist = require('optimist'),
  Hello = require('../lib').Hello;

// optimist is a great library for taking the hassle
// out of parsing CLI options.
var argv = optimist
  .options('h', {
    alias: 'hello',
    describe: 'print hello world message.'
  }).argv;

if (argv.hello) {
  var hello = new Hello();
  console.log(hello.sayHello());
} else {
  console.log(optimist.help());
}