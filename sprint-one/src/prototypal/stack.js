var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.first = 0;
  storage.last = 0;

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
