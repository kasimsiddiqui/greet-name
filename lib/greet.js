'use strict';

var name = process.argv.slice(2);
name = Array.prototype.join.call(name, ' ');

exports.greet = function(name) {
  if(name){
    return('Hello ' + name);
  }
  else{
    return('Hello');
  }
};

console.log(exports.greet(name));
