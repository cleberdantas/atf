#!/usr/bin/env node
'use strict';
var meow = require('meow');
var aboveTheFoldPhantomjs = require('./');

var cli = meow({
  help: [
    'Usage',
    '  atf <input>',
    '',
    'Example',
    '  atf http://somesite.com'
  ].join('\n')
});

aboveTheFoldPhantomjs(cli.input[0]);
