var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.last = 0;
  this.first = 0;
};

Stack.prototype.push = function(value) {
  this[this.last] = value;
  this.last++;
};

Stack.prototype.pop = function() {
  var value = this[this.last - 1];
  this.last--;
  return value;
};

Stack.prototype.size = function() {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};

var newInstance = new Stack();


