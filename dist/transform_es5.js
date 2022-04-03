"use strict";

var aa = function aa() {
  var aa = {
    'hello': 'world'
  };
  var bb = new Map();
  bb.set(aa, 'hhh');
  return bb;
};

var bbb = aa();
console.log(bbb);