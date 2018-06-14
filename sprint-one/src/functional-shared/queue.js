var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    first: 0,
    last: 0
  };

  extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function() {
  var value = this[this.first];
  this.first++;
  return value;
};

queueMethods.size = function() {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};


