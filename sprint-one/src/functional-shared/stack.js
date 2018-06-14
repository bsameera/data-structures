var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {
    first: 0,
    last: 0
  };

  extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.last] = value;
  this.last++;
};

stackMethods.pop = function() {
  var value = this[this.last - 1];
  this.last--;
  return value;
};

stackMethods.size = function() {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};




