'use strict';

var greet = require('../lib/greet');
var expect = require('chai').expect;

describe('greet', function() {
  it('will say Hello Kasim when passed Kasim', function() {
    expect(greet.greet('Kasim')).to.eql('Hello Kasim');
  });
});

describe('greet', function() {
  it('will say Hello when passed nothing', function() {
    expect(greet.greet()).to.eql('Hello');
  });
});


