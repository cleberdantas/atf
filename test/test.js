/*global describe, it */
'use strict';
var assert = require('assert');
var aboveTheFoldPhantomjs = require('../');

describe('above-the-fold-phantomjs node module', function () {
  it('must have at least one test', function () {
    aboveTheFoldPhantomjs();
    assert(false, 'I was too lazy to write any tests. Shame on me.');
  });
});
