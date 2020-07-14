"use strict";
var __assign = (this && this.__assign) || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) {
        t[p] = s[p];
      }
    }
  }
  return t;
};
exports.__esModule = true;
var a = [1, 2, 3, 4];
var b = a.slice();
b.map(function (x) {
  console.log(x);
});
var z = { a: 2, b: 3 };
var z1 = __assign({}, z);
var f = {
  item: "",
  item1: [],
};
f.item = "";
f.item1 = ["1", "2", "3"];
var keys;
keys = "item1";
var types;
types = [];
types[0] = "";
function getProp(obj, k) {
  return obj[k];
}

var x = getProp(f, "item1");
console.log(x);
function makeRecord(keys, v) {
  var acc = {};
  return keys.reduce(function (a, k) {
    a[k] = v;
    return a;
  }, acc);
}
var ks = ["a", "b"];
var r = makeRecord(ks, 7);
console.log(r);
var retry_1 = require("./retry");
retry_1.retry();
